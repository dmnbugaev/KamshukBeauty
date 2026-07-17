import { expect, test, type Page } from '@playwright/test'
import path from 'node:path'

const routes = [
  '/',
  '/manikyur',
  '/pedikyur',
  '/naraschivanie-resnic',
  '/brovi',
  '/makiyazh',
  '/obuchenie',
  '/blog',
  '/blog/arkhitektura-brovej',
  '/blog/kak-podgotovitsya-k-vizitu-v-studiyu',
  '/blog/naraschivanie-resnic-vidy-i-uhod',
  '/blog/permanentnyj-makiyazh-brovej',
  '/blog/skolko-derzhitsya-gel-lak',
  '/blog/uhod-za-nogtami-doma',
  '/privacy',
  '/terms',
  '/missing-page-ui-audit',
]

const viewports = [
  { name: '320x568', width: 320, height: 568 },
  { name: '360x800', width: 360, height: 800 },
  { name: '375x812', width: 375, height: 812 },
  { name: '390x844', width: 390, height: 844 },
  { name: '430x932', width: 430, height: 932 },
  { name: '768x1024', width: 768, height: 1024 },
  { name: '1024x768', width: 1024, height: 768 },
  { name: '1280x720', width: 1280, height: 720 },
  { name: '1366x768', width: 1366, height: 768 },
  { name: '1440x900', width: 1440, height: 900 },
  { name: '1920x1080', width: 1920, height: 1080 },
]

const screenshotViewports = new Set(['320x568', '390x844', '768x1024', '1366x768', '1920x1080'])

function safeName(input: string) {
  return input.replace(/^\//, 'home').replace(/[^\w-]+/g, '-').replace(/-$/, '') || 'home'
}

async function preparePage(page: Page) {
  await page.addInitScript(() => {
    try {
      window.localStorage.setItem('cookie_consent', 'rejected')
      window.sessionStorage.setItem('welcome_popup_shown', '1')
      document.cookie = 'cookie_consent=rejected; path=/; SameSite=Lax'
    } catch {
      // Storage is unavailable in browser-created data: frames.
    }
  })
}

async function findOverflowingElements(page: Page) {
  return page.evaluate(() => {
    const viewportWidth = document.documentElement.clientWidth
    const tolerance = 1

    return Array.from(document.body.querySelectorAll<HTMLElement>('*'))
      .map((element) => {
        const rect = element.getBoundingClientRect()
        const style = window.getComputedStyle(element)
        const isClippedDecoration =
          !element.textContent?.trim() &&
          ['absolute', 'fixed'].includes(style.position) &&
          Boolean(element.closest('.overflow-hidden'))
        return {
          tag: element.tagName.toLowerCase(),
          id: element.id,
          className: typeof element.className === 'string' ? element.className : '',
          text: (element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
          position: style.position,
          display: style.display,
          isClippedDecoration,
        }
      })
      .filter((item) => !item.isClippedDecoration && item.width > 0 && (item.left < -tolerance || item.right > viewportWidth + tolerance))
      .slice(0, 20)
  })
}

async function expectNoHorizontalOverflow(page: Page) {
  const metrics = await page.evaluate(() => ({
    viewportWidth: document.documentElement.clientWidth,
    documentScrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
  }))
  const offenders = await findOverflowingElements(page)

  expect(
    {
      metrics,
      offenders,
    },
    `Horizontal overflow detected: ${JSON.stringify({ metrics, offenders }, null, 2)}`,
  ).toEqual({
    metrics: {
      viewportWidth: metrics.viewportWidth,
      documentScrollWidth: metrics.viewportWidth,
      bodyScrollWidth: metrics.viewportWidth,
    },
    offenders: [],
  })
}

test.describe('UI responsive audit', () => {
  test.setTimeout(360_000)

  for (const route of routes) {
    test(`${route} renders without critical UI regressions`, async ({ page }, testInfo) => {
      const consoleErrors: string[] = []
      const pageErrors: string[] = []
      const failedRequests: string[] = []
      const badLocalResponses: string[] = []

      page.on('console', (message) => {
        if (message.type() === 'error') {
          const text = message.text()
          const isExpectedAudit404 =
            route === '/missing-page-ui-audit' &&
            text.includes('404') &&
            text.includes('/missing-page-ui-audit')
          const isNuxtDevManifestAbort = text.includes('[nuxt] Error fetching app manifest') && text.includes('Failed to fetch')
          const isNuxtDevHmrSocket = text.includes('WebSocket connection') && text.includes('/_nuxt/')
          if (!text.includes('net::ERR_NETWORK_ACCESS_DENIED') && !isExpectedAudit404 && !isNuxtDevManifestAbort && !isNuxtDevHmrSocket) {
            consoleErrors.push(text)
          }
        }
      })
      page.on('pageerror', (error) => pageErrors.push(error.message))
      page.on('requestfailed', (request) => {
        const url = request.url()
        if (url.startsWith('http://127.0.0.1:3107') || url.startsWith('http://localhost:3107')) {
          const errorText = request.failure()?.errorText || 'failed'
          if (errorText !== 'net::ERR_ABORTED') {
            failedRequests.push(`${errorText} ${url}`)
          }
        }
      })
      page.on('response', (response) => {
        const url = response.url()
        const status = response.status()
        const isAudit404 = url.endsWith('/missing-page-ui-audit')
        if ((url.startsWith('http://127.0.0.1:3107') || url.startsWith('http://localhost:3107')) && status >= 400 && !isAudit404) {
          badLocalResponses.push(`${status} ${url}`)
        }
      })

      for (const viewport of viewports) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height })
        await preparePage(page)
        const response = await page.goto(route, { waitUntil: 'networkidle' })

        if (route === '/missing-page-ui-audit') {
          expect(response?.status()).toBe(404)
        } else {
          expect(response?.ok(), `${route} returned ${response?.status()}`).toBeTruthy()
        }

        const siteHeader = page.getByRole('banner').first()
        await expect(siteHeader).toBeVisible()
        await expect(page.locator('main')).toBeVisible()
        await expect(page.getByRole('contentinfo').first()).toBeVisible()
        await expect(page.locator('h1').first()).toBeVisible()
        await expectNoHorizontalOverflow(page)

        const interactive = page.locator('a[href], button').first()
        await expect(interactive).toBeVisible()

        if (viewport.width < 1024) {
          const menuButton = siteHeader.locator('button[aria-expanded]').first()
          await expect(menuButton).toBeVisible()
          await menuButton.click()
          await expect(menuButton).toHaveAttribute('aria-expanded', 'true')
          await expect(siteHeader.getByRole('link').filter({ hasText: /./ }).first()).toBeVisible()
          await page.keyboard.press('Escape')
          await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
        }

        if (screenshotViewports.has(viewport.name)) {
          await page.screenshot({
            path: path.join('test-results', 'ui-audit', 'screenshots', `${safeName(route)}-${viewport.name}.png`),
            fullPage: false,
          })
        }
      }

      expect(consoleErrors, `Console errors on ${route}`).toEqual([])
      expect(pageErrors, `Unhandled page errors on ${route}`).toEqual([])
      expect(failedRequests, `Local request failures on ${route}`).toEqual([])
      expect(badLocalResponses, `Local HTTP errors on ${route}`).toEqual([])
    })
  }
})

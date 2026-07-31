import { expect, test, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const mobileViewport = { width: 390, height: 844 }
const desktopViewport = { width: 1366, height: 768 }

const responsiveViewports = [
  [320, 568],
  [360, 800],
  [375, 812],
  [390, 844],
  [412, 915],
  [768, 1024],
  [820, 1180],
  [1024, 768],
  [1280, 720],
  [1366, 768],
  [1440, 900],
  [1920, 1080],
] as const

const internalRoutes = [
  '/',
  '/manikyur',
  '/pedikyur',
  '/naraschivanie-resnic',
  '/brovi',
  '/makiyazh',
  '/obuchenie',
  '/blog',
  '/privacy',
  '/terms',
]

const screenshotStates = [
  { name: 'home-desktop', path: '/', viewport: desktopViewport },
  { name: 'home-tablet', path: '/', viewport: { width: 820, height: 1180 } },
  { name: 'home-mobile', path: '/', viewport: mobileViewport },
  { name: 'menu-mobile-open', path: '/', viewport: mobileViewport, openMenu: true },
]

const collectConsoleErrors = (page: Page) => {
  const errors: string[] = []

  page.on('console', (message) => {
    if (message.type() === 'error') {
      errors.push(message.text())
    }
  })

  page.on('pageerror', (error) => {
    errors.push(error.message)
  })

  return errors
}

const getHeader = (page: Page) => page.locator('header')
const getBurgerButton = (page: Page) => page.locator('header button[aria-controls="mobile-menu"]')
const getMobileMenu = (page: Page) => page.getByRole('dialog', { name: /мобильное меню/i })

test.beforeEach(async ({ page, baseURL }) => {
  const localOrigin = new URL(baseURL || 'http://127.0.0.1').origin

  await page.addInitScript(() => {
    window.sessionStorage.setItem('welcome_popup_shown', '1')
    window.localStorage.setItem('cookie_consent', 'accepted')
    document.cookie = 'cookie_consent=accepted; path=/'
  })

  await page.route('https://**/*', async (route) => {
    const requestURL = new URL(route.request().url())

    if (requestURL.origin === localOrigin) {
      await route.continue()
      return
    }

    if (requestURL.hostname === 'fonts.googleapis.com') {
      await route.fulfill({
        status: 200,
        contentType: 'text/css',
        body: '',
      })
      return
    }

    await route.fulfill({
      status: 204,
      body: '',
    })
  })
})

async function expectNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const root = document.documentElement
    const offenders = Array.from(document.body.querySelectorAll<HTMLElement>('*'))
      .filter((element) => {
        const rect = element.getBoundingClientRect()
        return rect.width > 0 && (rect.left < -1 || rect.right > root.clientWidth + 1)
      })
      .map((element) => ({
        tag: element.tagName,
        className: element.className.toString(),
        left: Math.round(element.getBoundingClientRect().left),
        right: Math.round(element.getBoundingClientRect().right),
      }))

    return {
      documentOverflow: root.scrollWidth > root.clientWidth,
      scrollWidth: root.scrollWidth,
      clientWidth: root.clientWidth,
      offenders: offenders.slice(0, 10),
    }
  })

  expect(overflow, JSON.stringify(overflow, null, 2)).toMatchObject({
    documentOverflow: false,
  })
}

async function expectHeaderDoesNotCoverMain(page: Page) {
  const metrics = await page.evaluate(() => {
    const header = document.querySelector('header')
    const main = document.querySelector('main')
    const firstBlock = main?.firstElementChild
    const headerRect = header?.getBoundingClientRect()
    const blockRect = firstBlock?.getBoundingClientRect()

    return {
      headerBottom: headerRect?.bottom ?? 0,
      firstTop: blockRect?.top ?? 0,
    }
  })

  expect(metrics.firstTop).toBeGreaterThanOrEqual(metrics.headerBottom - 1)
}

test.describe('header', () => {
  test('desktop navigation is visible and header fits viewport', async ({ page }) => {
    const errors = collectConsoleErrors(page)
    await page.setViewportSize(desktopViewport)
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    await expect(getHeader(page)).toBeVisible()
    await expect(page.getByRole('link', { name: /камшук бьюти/i }).first()).toBeVisible()
    await expect(page.getByRole('navigation', { name: /основная навигация/i }).getByRole('link', { name: 'Услуги' })).toBeVisible()
    await expect(getBurgerButton(page)).toBeHidden()

    await expectNoHorizontalOverflow(page)
    await expectHeaderDoesNotCoverMain(page)
    expect(errors).toEqual([])
  })

  test('mobile burger button is visible and header fits viewport', async ({ page }) => {
    const errors = collectConsoleErrors(page)
    await page.setViewportSize(mobileViewport)
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    await expect(getHeader(page)).toBeVisible()
    await expect(getBurgerButton(page)).toBeVisible()
    await expect(page.getByRole('navigation', { name: /основная навигация/i }).getByRole('link', { name: 'Услуги' })).toBeHidden()

    await expectNoHorizontalOverflow(page)
    await expectHeaderDoesNotCoverMain(page)
    expect(errors).toEqual([])
  })
})

test.describe('burger menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(mobileViewport)
    await page.goto('/', { waitUntil: 'domcontentloaded' })
  })

  test('opens and closes with button, Escape and link click', async ({ page }) => {
    const errors = collectConsoleErrors(page)
    const burger = getBurgerButton(page)

    await expect(burger).toHaveAttribute('aria-controls', 'mobile-menu')
    await expect(burger).toHaveAttribute('aria-expanded', 'false')

    await burger.click()
    await expect(burger).toHaveAttribute('aria-expanded', 'true')
    await expect(getMobileMenu(page)).toBeVisible()
    await expect(page.locator('body')).toHaveCSS('overflow', 'hidden')

    await burger.click()
    await expect(burger).toHaveAttribute('aria-expanded', 'false')
    await expect(getMobileMenu(page)).toBeHidden()
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')

    await burger.click()
    await page.keyboard.press('Escape')
    await expect(getMobileMenu(page)).toBeHidden()
    await expect(burger).toBeFocused()

    await burger.click()
    await expect(getMobileMenu(page)).toBeVisible()
    await page.waitForTimeout(250)
    await getMobileMenu(page).getByRole('link', { name: /блог/i }).click()
    await expect(page).toHaveURL(/\/blog/)
    await expect(getMobileMenu(page)).toBeHidden()
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
    expect(errors).toEqual([])
  })

  test('keeps focus inside, closes outside, and survives repeated opens', async ({ page }) => {
    const errors = collectConsoleErrors(page)
    const burger = getBurgerButton(page)

    for (let i = 0; i < 3; i += 1) {
      await burger.click()
      await expect(getMobileMenu(page)).toBeVisible()
      await page.keyboard.press('Tab')
      await expect(getMobileMenu(page)).toContainText('Адрес и время')
      await getMobileMenu(page).click({ position: { x: 2, y: 2 } })
      await expect(getMobileMenu(page)).toBeHidden()
      await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
    }

    expect(errors).toEqual([])
  })

  test('closes when viewport changes to desktop', async ({ page }) => {
    const burger = getBurgerButton(page)

    await burger.click()
    await expect(getMobileMenu(page)).toBeVisible()
    await page.setViewportSize(desktopViewport)
    await expect(getMobileMenu(page)).toBeHidden()
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
  })
})

test.describe('responsive layout', () => {
  for (const [width, height] of responsiveViewports) {
    test(`home has no overflow at ${width}x${height}`, async ({ page }) => {
      const errors = collectConsoleErrors(page)
      await page.setViewportSize({ width, height })
      await page.goto('/', { waitUntil: 'domcontentloaded' })

      await expectNoHorizontalOverflow(page)
      await expect(page.locator('img').first()).toBeVisible()

      const hyphenation = await page.evaluate(() => {
        const rootStyle = getComputedStyle(document.body)
        return {
          hyphens: rootStyle.hyphens,
          wordBreak: rootStyle.wordBreak,
          overflowWrap: rootStyle.overflowWrap,
        }
      })

      expect(hyphenation.hyphens).toBe('none')
      expect(hyphenation.wordBreak).toBe('normal')
      expect(errors).toEqual([])
    })
  }
})

test.describe('updated studio content', () => {
  test('shows current offers, team and complete portfolio', async ({ page }) => {
    await page.setViewportSize(desktopViewport)
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    const offers = page.locator('#offers')
    await expect(offers).toContainText('Скидка 20% на услуги студии при первом посещении')
    await expect(offers).toContainText('5 визитов со скидкой 20%')
    await expect(offers).toContainText('10-й маникюр или педикюр-комплекс в подарок')
    await expect(page.locator('#about')).toContainText('Валерия')
    await expect(page.locator('#about')).toContainText('Ника')
    await expect(page.locator('#work img')).toHaveCount(31)
  })
})

test.describe('navigation', () => {
  for (const route of internalRoutes) {
    test(`route ${route} opens without 404`, async ({ page }) => {
      const errors = collectConsoleErrors(page)
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' })

      expect(response?.status()).toBeLessThan(400)
      await expect(page.locator('main')).toBeVisible()
      await expect(page.locator('text=/404|not found/i')).toHaveCount(0)
      await expectNoHorizontalOverflow(page)
      expect(errors).toEqual([])
    })
  }
})

test.describe('accessibility', () => {
  for (const route of ['/', '/blog', '/manikyur']) {
    test(`has no critical axe violations on ${route}`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'domcontentloaded' })

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze()

      const criticalViolations = results.violations.filter((violation) => violation.impact === 'critical')
      expect(criticalViolations).toEqual([])
    })
  }
})

test.describe('visual states', () => {
  for (const state of screenshotStates) {
    test(`captures ${state.name}`, async ({ page }, testInfo) => {
      await page.setViewportSize(state.viewport)
      await page.goto(state.path, { waitUntil: 'domcontentloaded' })

      if (state.openMenu) {
        await getBurgerButton(page).click()
        await expect(getMobileMenu(page)).toBeVisible()
      }

      const screenshot = await page.screenshot({
        fullPage: false,
        path: testInfo.outputPath(`${state.name}.png`),
      })

      expect(screenshot.byteLength).toBeGreaterThan(10_000)
    })
  }
})

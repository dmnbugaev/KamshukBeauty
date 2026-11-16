import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.beforeEach(async ({ page }) => {
  await page.route(/https:\/\/(mc\.yandex|yandex\.ru\/map-widget)/, route => route.fulfill({ status: 200, body: '' }))
})

const dismissNotices = async (page: import('@playwright/test').Page) => {
  await page.addInitScript(() => {
    document.cookie = 'cookie_consent=rejected; path=/'
  })
}

for (const viewport of [{ width: 320, height: 480 }, { width: 640, height: 360 }, { width: 820, height: 600 }, { width: 1023, height: 768 }]) {
  test(`menu fits and traps focus at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await dismissNotices(page)
    await page.setViewportSize(viewport)
    await page.goto('/')
    const burger = page.locator('button[aria-controls="mobile-menu"]')
    await burger.click()
    const menu = page.getByRole('dialog', { name: 'Мобильное меню', exact: true })
    await expect(menu).toBeVisible()
    const top = await menu.boundingBox()
    const header = await page.locator('header').boundingBox()
    expect(top!.y).toBeCloseTo(header!.height, 0)
    await expect(page.locator('main')).toHaveAttribute('inert', '')
    const links = menu.locator('a:visible,button:visible')
    await links.last().focus()
    await page.keyboard.press('Tab')
    await expect(links.first()).toBeFocused()
    await page.keyboard.press('Shift+Tab')
    await expect(links.last()).toBeFocused()
    const call = await links.last().boundingBox()
    expect(call!.y + call!.height).toBeLessThanOrEqual(viewport.height)
    await page.keyboard.press('Escape')
    await expect(menu).toBeHidden()
    await expect(burger).toBeFocused()
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
  })
}

for (const route of ['/', '/manikyur', '/pedikyur', '/brovi', '/makiyazh', '/naraschivanie-resnic', '/permanentnyj-makiyazh']) {
  test(`FAQ exposes full answers on ${route}`, async ({ page }) => {
    await dismissNotices(page)
    await page.setViewportSize({ width: 320, height: 568 })
    await page.goto(route)
    const buttons = page.locator('main button[aria-controls*="faq-"]')
    for (const button of await buttons.all()) {
      await button.click()
      await expect(button).toHaveAttribute('aria-expanded', 'true')
      const answer = page.locator('#' + await button.getAttribute('aria-controls'))
      await expect(answer).toBeVisible()
      expect(await answer.evaluate(e => e.scrollHeight <= e.clientHeight + 1)).toBe(true)
    }
  })
}

test('portfolio filters work and every home image loads', async ({ page }) => {
  await dismissNotices(page)
  await page.goto('/')
  await page.locator('img').evaluateAll(images => images.forEach(img => { (img as HTMLImageElement).loading = 'eager' }))
  await expect.poll(() => page.locator('img').evaluateAll(images => images.filter(img => !(img as HTMLImageElement).complete || !(img as HTMLImageElement).naturalWidth).map(img => img.getAttribute('src')))).toEqual([])
  const filter = page.locator('#work').getByRole('button', { name: 'Перманентный макияж', exact: true })
  await filter.click()
  await expect(filter).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('#portfolio-grid img')).toHaveCount(2)
  await page.locator('#work').getByRole('button', { name: 'Все', exact: true }).click()
  await expect(page.locator('#portfolio-grid img')).toHaveCount(32)
})

test('service prices and discounts remain unbroken at narrow widths', async ({ page }) => {
  await dismissNotices(page)
  for (const route of ['/manikyur', '/pedikyur', '/brovi', '/makiyazh', '/naraschivanie-resnic', '/permanentnyj-makiyazh']) {
    await page.goto(route)
    await page.waitForFunction(() => [...document.fonts].some(f => f.family.replaceAll('"', '') === 'Unbounded' && f.status === 'loaded'))
    for (const width of [320, 390, 1024]) {
      await page.setViewportSize({ width, height: 900 })
      await page.evaluate(() => document.fonts.ready)
      const values = page.locator('.service-stat-price, .service-stats > div:last-child .headline')
      for (const value of await values.all()) {
        const geometry = await value.evaluate(e => {
          const range = document.createRange()
          range.selectNodeContents(e)
          const rects = [...range.getClientRects()]
          const block = e.closest('.headline')!.getBoundingClientRect()
          return { lines: new Set(rects.map(r => Math.round(r.top))).size, fits: rects.every(r => r.left >= block.left - 1 && r.right <= block.right + 1) }
        })
        expect(geometry, `${route} at ${width}px`).toEqual({ lines: 1, fits: true })
      }
    }
  }
})

test('reviews respect reduced motion and do not move following content', async ({ page }) => {
  await dismissNotices(page)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.clock.install()
  await page.goto('/')
  const dot = page.getByRole('button', { name: 'Отзыв 1', exact: true })
  await page.clock.fastForward(12_000)
  await expect(dot).toHaveAttribute('aria-pressed', 'true')
  const before = await page.locator('#book').evaluate(e => e.getBoundingClientRect().top + scrollY)
  await page.getByRole('button', { name: 'Следующий отзыв' }).click()
  await expect(page.getByRole('button', { name: 'Отзыв 2', exact: true })).toHaveAttribute('aria-pressed', 'true')
  const after = await page.locator('#book').evaluate(e => e.getBoundingClientRect().top + scrollY)
  expect(after).toBeCloseTo(before, 0)
})

for (const route of ['/', '/obuchenie', '/privacy', '/blog', '/permanentnyj-makiyazh']) {
  test(`accessibility audit ${route}`, async ({ page }, testInfo) => {
    await dismissNotices(page)
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto(route)
    await page.evaluate(() => document.fonts.ready)
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
    await testInfo.attach('axe.json', { body: JSON.stringify(results.violations, null, 2), contentType: 'application/json' })
    expect(results.violations.filter(v => ['critical', 'serious'].includes(v.impact || '')).map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) }))).toEqual([])
  })
}

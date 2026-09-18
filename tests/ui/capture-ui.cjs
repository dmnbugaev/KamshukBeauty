// Capture real-font viewport states separately from the geometry audit.
const { chromium } = require('@playwright/test')
const fs = require('node:fs/promises')
const path = require('node:path')

async function main() {
  const output = path.resolve('artifacts/ui-audit/visual-final')
  await fs.mkdir(output, { recursive: true })
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage({ reducedMotion: 'reduce' })
    await page.addInitScript(() => {
      sessionStorage.setItem('welcome_popup_shown', '1')
      document.cookie = 'cookie_consent=rejected; path=/'
    })
    await page.route(/https:\/\/(mc\.yandex|yandex\.ru\/map-widget)/, route => route.fulfill({ status: 200, body: '' }))
    for (const route of ['/', '/obuchenie', '/permanentnyj-makiyazh', '/privacy']) {
      for (const width of [320, 1024, 1440]) {
        await page.setViewportSize({ width, height: 900 })
        await page.goto((process.env.AUDIT_URL || 'http://127.0.0.1:3105') + route, { waitUntil: 'networkidle' })
        await page.locator('dialog.welcome-dialog').waitFor({ state: 'attached' })
        await page.waitForFunction(() => [...document.fonts].some(f => f.family === 'Unbounded' && f.status === 'loaded'))
        await page.evaluate(() => document.fonts.ready)
        await page.screenshot({ path: path.join(output, `${route.slice(1) || 'home'}-${width}.png`), animations: 'disabled' })
        if (route === '/') {
          for (const id of ['services', 'about', 'book']) {
            await page.locator('#' + id).evaluate(e => window.scrollTo({ top: e.getBoundingClientRect().top + scrollY - 100, behavior: 'instant' }))
            await page.screenshot({ path: path.join(output, `${id}-${width}.png`), animations: 'disabled' })
          }
        }
      }
    }
    await page.setViewportSize({ width: 640, height: 360 })
    await page.goto('http://127.0.0.1:3105/')
    await page.locator('dialog.welcome-dialog').waitFor({ state: 'attached' })
    await page.getByRole('button', { name: 'Открыть меню' }).click()
    await page.screenshot({ path: path.join(output, 'menu-landscape.png'), animations: 'disabled' })
    console.log(output)
  } finally {
    await browser.close()
  }
}

main().catch(error => { console.error(error); process.exitCode = 1 })

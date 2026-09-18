// Run against a running site: node tests/ui/audit-layout.cjs [baseline|fixed]
const browsers = require('@playwright/test')
const fs = require('node:fs/promises')
const path = require('node:path')

const widths = process.env.AUDIT_WIDTHS?.split(',').map(Number) || [320, 360, 375, 390, 412, 480, 639, 640, 641, 767, 768, 769, 820, 1023, 1024, 1025, 1100, 1279, 1280, 1281, 1366, 1440, 1535, 1536, 1537, 1920, 2560]
const browserName = process.env.AUDIT_BROWSER || 'chromium'
const captureScreenshots = process.env.AUDIT_SCREENSHOTS === '1'
const origin = process.env.AUDIT_URL || 'http://127.0.0.1:3105'
const output = path.resolve('artifacts/ui-audit', `layout-${process.argv[2] || 'fixed'}`)

function inspectLayout() {
  const issues = []
  const textBoxes = []
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  while (walker.nextNode()) {
    const node = walker.currentNode
    const parent = node.parentElement
    if (!node.textContent.trim() || !parent || parent.closest('script,style,svg,.sr-only,nuxt-devtools-panel')) continue
    if (!parent.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) continue
    // Only inspect page content, not floating widgets or external embeds.
    if (!parent.closest('main,header,footer')) continue
    const range = document.createRange()
    range.selectNodeContents(node)
    let block = parent
    while (block.parentElement && ['inline', 'contents'].includes(getComputedStyle(block).display)) block = block.parentElement
    const bounds = block.getBoundingClientRect()
    const rects = [...range.getClientRects()].filter(r => r.width > 1 && r.height > 1).filter(r => {
      let ancestor = parent.parentElement
      while (ancestor && ancestor !== document.body) {
        if (['auto', 'scroll', 'hidden', 'clip'].includes(getComputedStyle(ancestor).overflowY)) {
          const clip = ancestor.getBoundingClientRect()
          if (r.top >= clip.bottom || r.bottom <= clip.top) return false
        }
        ancestor = ancestor.parentElement
      }
      return true
    })
    const text = node.textContent.trim().replace(/\s+/g, ' ').slice(0, 90)
    if (rects.some(r => r.left < bounds.left - 2 || r.right > bounds.right + 2 || r.left < -2 || r.right > innerWidth + 2)) {
      issues.push({ type: 'text-overflow', text, element: block.tagName, class: block.className, width: Math.round(bounds.width) })
    }
    textBoxes.push({ parent, text, rects })
  }
  for (let i = 0; i < textBoxes.length; i++) {
    const a = textBoxes[i]
    for (let j = i + 1; j < textBoxes.length; j++) {
      const b = textBoxes[j]
      if (a.parent.contains(b.parent) || b.parent.contains(a.parent)) continue
      if (a.parent.closest('h1,h2,h3,p,blockquote') === b.parent.closest('h1,h2,h3,p,blockquote') && a.parent.closest('h1,h2,h3,p,blockquote')) continue
      if (a.rects.some(r => b.rects.some(s => Math.min(r.right, s.right) - Math.max(r.left, s.left) > 2 && Math.min(r.bottom, s.bottom) - Math.max(r.top, s.top) > 3))) {
        issues.push({ type: 'text-overlap', a: a.text, b: b.text })
      }
    }
  }
  return { issues, fonts: [...document.fonts].some(f => f.family.replaceAll('"', '').replaceAll("'", '') === 'Unbounded' && f.status === 'loaded'), pageOverflow: document.documentElement.scrollWidth > innerWidth }
}

async function main() {
  await fs.mkdir(output, { recursive: true })
  const pages = await fs.readdir('src/pages', { recursive: true })
  const routes = pages.filter(p => p.endsWith('.vue')).map(p => '/' + p.replaceAll('\\', '/').replace(/\.vue$/, '').replace(/(^|\/)index$/, '')).sort()
  const browser = await browsers[browserName].launch()
  const context = await browser.newContext({ reducedMotion: 'reduce' })
  await context.addInitScript(() => {
    sessionStorage.setItem('welcome_popup_shown', '1')
    document.cookie = 'cookie_consent=rejected; path=/'
  })
  await context.route(/https:\/\/(mc\.yandex|yandex\.ru\/map-widget)/, route => route.fulfill({ status: 200, body: '' }))
  const results = []
  const queue = [...routes]
  const workers = await Promise.allSettled(Array.from({ length: 2 }, async () => {
    const page = await context.newPage()
    while (queue.length) {
      const route = queue.shift()
      const errors = []
      const onError = e => errors.push(e.message)
      page.on('pageerror', onError)
      const response = await page.goto(origin + route, { waitUntil: 'networkidle' })
      await page.locator('dialog.welcome-dialog').waitFor({ state: 'attached' })
      // Head styles can settle after hydration. Do not accept fallback-font results.
      await page.waitForFunction(() => [...document.fonts].some(f => f.family.replaceAll('"', '').replaceAll("'", '') === 'Unbounded' && f.status === 'loaded'))
      await page.evaluate(() => document.fonts.ready)
      for (const width of widths) {
        await page.setViewportSize({ width, height: 900 })
        await page.evaluate(() => document.fonts.ready)
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))
        const result = await page.evaluate(inspectLayout)
        results.push({ browser: browserName, route, width, status: response.status(), errors: [...errors], ...result })
        if (captureScreenshots && ['/', '/obuchenie', '/permanentnyj-makiyazh'].includes(route) && [320, 768, 1024, 1440].includes(width)) {
          await page.screenshot({ path: path.join(output, `${route.replaceAll('/', '_') || 'home'}-${width}.png`), fullPage: true })
          if (route === '/') {
            for (const section of ['services', 'about', 'book']) {
              await page.locator(`#${section}`).screenshot({
                path: path.join(output, `${section}-${width}.png`),
                // Fixed controls belong to the viewport, not a stitched section capture.
                style: '.site-header, .messenger-float { visibility: hidden !important; }',
              })
            }
          }
        }
      }
      page.off('pageerror', onError)
      console.log(`${route}: ${results.filter(r => r.route === route && r.issues.length).length}/${widths.length} widths with text issues`)
    }
    await page.close()
  }))
  await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(results, null, 2))
  const failures = results.filter(r => r.issues.length || r.pageOverflow || r.errors.length || r.status >= 400 || !r.fonts)
  console.log(JSON.stringify({ checks: results.length, failures: failures.length, fontLoadedChecks: results.filter(r => r.fonts).length, output }))
  await browser.close()
  for (const worker of workers) {
    if (worker.status === 'rejected') {
      console.error(worker.reason)
      process.exitCode = 1
    }
  }
  if (failures.length || results.length !== routes.length * widths.length) process.exitCode = 1
}

main().catch(e => { console.error(e); process.exitCode = 1 })

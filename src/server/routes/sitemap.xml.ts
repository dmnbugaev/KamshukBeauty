export default defineEventHandler((event) => {
  const baseUrl = 'https://kamshukbeauty.ru'

  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/manikyur', priority: '0.9', changefreq: 'monthly' },
    { url: '/pedikyur', priority: '0.9', changefreq: 'monthly' },
    { url: '/naraschivanie-resnic', priority: '0.9', changefreq: 'monthly' },
    { url: '/brovi', priority: '0.9', changefreq: 'monthly' },
    { url: '/makiyazh', priority: '0.9', changefreq: 'monthly' },
    { url: '/obuchenie', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog/skolko-derzhitsya-gel-lak', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/naraschivanie-resnic-vidy-i-uhod', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/arkhitektura-brovej', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/uhod-za-nogtami-doma', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/permanentnyj-makiyazh-brovej', priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  ]

  const today = new Date().toISOString().split('T')[0]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${baseUrl}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return xml
})

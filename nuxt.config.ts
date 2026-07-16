export default defineNuxtConfig({
  srcDir: 'src/',

  dir: {
    public: '../public',
  },

  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Камшук Бьюти — Студия красоты в Москве',
      meta: [
        { name: 'description', content: 'Премиальная студия красоты Камшук Бьюти в Москве, Коммунарка. Маникюр, педикюр, ресницы, брови, макияж, обучение. Запись онлайн.' },
        { name: 'keywords', content: 'студия красоты москва, маникюр коммунарка, смарт педикюр, ресницы брови, обучение маникюру, камшук бьюти' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:site_name', content: 'Камшук Бьюти' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;500;600;700;900&family=Manrope:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },

  compatibilityDate: '2024-11-01',
})

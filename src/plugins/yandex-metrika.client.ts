export default defineNuxtPlugin(() => {
  const { accepted } = useCookieConsent()

  const load = () => {
    if ((window as any).ym) return

    ;(function (m: any, e: any, t: any, r: any, i: any, k?: any, a?: any) {
      m[i] =
        m[i] ||
        function () {
          ;(m[i].a = m[i].a || []).push(arguments)
        }
      m[i].l = +new Date()
      for (let j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) return
      }
      k = e.createElement(t)
      a = e.getElementsByTagName(t)[0]
      k.async = 1
      k.src = r
      a.parentNode.insertBefore(k, a)
    })(
      window,
      document,
      'script',
      'https://mc.yandex.ru/metrika/tag.js',
      'ym'
    )
    ;(window as any).ym(108566486, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })
  }

  if (accepted.value) {
    load()
  }

  watch(accepted, (val) => {
    if (val) load()
  })
})

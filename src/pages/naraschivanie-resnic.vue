<script setup lang="ts">
useHead({
  title: 'Наращивание ресниц в Коммунарке — от 3 300 ₽ | Камшук Бьюти',
  meta: [
    { name: 'description', content: 'Наращивание и ламинирование ресниц в Коммунарке (Москва) от 3 000 ₽. Скидка 20% на первый визит. Запись онлайн.' },
    { name: 'keywords', content: 'наращивание ресниц Коммунарка, ламинирование ресниц Коммунарка, ресницы Новая Москва, наращивание ресниц ТиНАО, объёмное наращивание ресниц Коммунарка' },
    { property: 'og:title', content: 'Наращивание ресниц в Коммунарке — Камшук Бьюти от 3 300 ₽' },
    { property: 'og:description', content: 'Наращивание ресниц классика, 2D и объём в Коммунарке. Скидка 20% новым гостям.' },
    { property: 'og:image', content: 'https://kamshukbeauty.ru/images/4_foto/resnici_i_brovi.jpg' },
    { property: 'og:url', content: 'https://kamshukbeauty.ru/naraschivanie-resnic' },
  ],
  link: [{ rel: 'canonical', href: 'https://kamshukbeauty.ru/naraschivanie-resnic' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Наращивание ресниц в Коммунарке',
        description: 'Классическое, объёмное наращивание и ламинирование ресниц в студии Камшук Бьюти, Коммунарка.',
        provider: { '@type': 'BeautySalon', name: 'Камшук Бьюти', url: 'https://kamshukbeauty.ru' },
        areaServed: { '@type': 'City', name: 'Москва' },
        offers: [
          { '@type': 'Offer', name: 'Наращивание ресниц', price: '3300', priceCurrency: 'RUB' },
          { '@type': 'Offer', name: 'Ламинирование ресниц', price: '3000', priceCurrency: 'RUB' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://kamshukbeauty.ru' },
          { '@type': 'ListItem', position: 2, name: 'Наращивание ресниц в Коммунарке', item: 'https://kamshukbeauty.ru/naraschivanie-resnic' },
        ],
      },
    ]),
  }],
})

const prices = [
  { name: 'Наращивание ресниц (классика)', price: '3 300 ₽', desc: 'Одна ресница на натуральную, естественный эффект' },
  { name: 'Ламинирование ресниц', price: '3 000 ₽', desc: 'Укрепление, изгиб и объём без наращивания' },
  { name: 'Снятие наращённых ресниц', price: '500 ₽', desc: 'Бережное снятие без повреждения натуральных ресниц' },
  { name: 'Коррекция ресниц', price: 'от 1 500 ₽', desc: 'Заполнение отросших участков через 3–4 недели' },
]

const faqs = [
  { q: 'Больно ли наращивать ресницы?', a: 'Нет, процедура абсолютно безболезненна. Вы лежите с закрытыми глазами, пока мастер аккуратно наклеивает каждую ресничку. Большинство гостей засыпают прямо во время сеанса.' },
  { q: 'Сколько держатся наращённые ресницы?', a: 'В среднем 3–4 недели. После этого рекомендуем коррекцию — заполнение отросших участков. Это дешевле и быстрее, чем полное наращивание.' },
  { q: 'Можно ли делать наращивание, если глаза чувствительные?', a: 'Да, используем гипоаллергенный клей. Рекомендуем предупредить мастера о чувствительности — подберём подходящий состав и технику.' },
  { q: 'Как ухаживать за наращёнными ресницами?', a: 'Не мочите в течение 24 часов после процедуры. Не трите глаза, не спите лицом в подушку. Используйте масло для ресниц на кончики натуральных ресниц. Не используйте тушь на наращённые ресницы.' },
  { q: 'В чём отличие ламинирования от наращивания?', a: 'Ламинирование — это процедура для натуральных ресниц: их укрепляют, придают изгиб и объём. Наращивание — добавление искусственных волосков. Ламинирование подходит тем, кто хочет натуральный результат.' },
]

const open = ref<number | null>(null)
</script>

<template>
  <div class="pt-20">
    <section class="py-20 relative overflow-hidden" style="background: radial-gradient(ellipse at 80% 20%, rgba(233,30,140,0.08) 0%, transparent 60%), #FFFFFF">
      <div class="container">
        <Breadcrumb :items="[{ label: 'Наращивание ресниц в Коммунарке' }]" />
        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-[1320px] mx-auto">
          <div>
            <div class="section-label mb-6">Скидка 20% на первый визит</div>
            <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-6 leading-tight">
              Наращивание<br /><span class="text-pink-shimmer">ресниц</span><br />в Коммунарке
            </h1>
            <p class="body text-lg text-[#6B4F5A] mb-8 max-w-lg leading-relaxed">
              Классическое и объёмное наращивание, ламинирование ресниц.
              Выразительный взгляд <strong>без ежедневного макияжа</strong>. Держится 3–4 недели.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
              <a href="tel:+79771075005" class="btn-outline-pink inline-block text-center">+7 (977) 107-50-05</a>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div><div class="headline text-3xl text-pink-gradient mb-1">от 3 000 ₽</div><p class="body text-xs text-[#B08898]">стоимость</p></div>
              <div><div class="headline text-3xl text-pink-gradient mb-1">3–4 нед.</div><p class="body text-xs text-[#B08898]">держится эффект</p></div>
              <div><div class="headline text-3xl text-pink-gradient mb-1">−20%</div><p class="body text-xs text-[#B08898]">первый визит</p></div>
            </div>
            <p class="body text-xs text-[#B08898] mt-5">
              * Предложение действует только на первый визит. Скидки и акции не суммируются.
            </p>
          </div>
          <div class="relative">
            <div class="aspect-[4/3] overflow-hidden rounded-3xl" style="box-shadow: 0 24px 80px rgba(233,30,140,0.15)">
              <img src="/images/4_foto/resnici_i_brovi.jpg" alt="Наращивание ресниц в Коммунарке — студия Камшук Бьюти" class="w-full h-full object-cover" width="600" height="450" loading="lazy" />
            </div>
            <div class="absolute -bottom-4 -left-4 glass-pink rounded-2xl px-5 py-3" style="box-shadow: 0 8px 32px rgba(233,30,140,0.2)">
              <p class="label text-[10px] text-[#C2185B] mb-0.5">Первый визит</p>
              <p class="headline text-2xl text-[#E91E8C]">−20%</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%)">
      <div class="container">
        <div class="max-w-xl mb-12"><div class="section-label mb-4">Прайс-лист</div><h2 class="display text-3xl lg:text-4xl text-[#1A1A2E]">Стоимость наращивания</h2></div>
        <div class="grid md:grid-cols-2 gap-4 max-w-3xl">
          <div v-for="item in prices" :key="item.name" class="card-luxury rounded-2xl p-6">
            <div class="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start mb-2">
              <h3 class="headline text-base text-[#1A1A2E]">{{ item.name }}</h3>
              <span class="label text-sm text-[#E91E8C] sm:ml-4 shrink-0">{{ item.price }}</span>
            </div>
            <p class="body text-xs text-[#B08898]">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%)">
      <div class="container">
        <div class="max-w-xl mb-12"><div class="section-label mb-4">FAQ</div><h2 class="display text-3xl lg:text-4xl text-[#1A1A2E]">Вопросы о наращивании</h2></div>
        <div class="max-w-3xl space-y-3">
          <div v-for="(faq, i) in faqs" :key="i" class="rounded-2xl overflow-hidden transition-all duration-300" :style="open === i ? 'border:1.5px solid rgba(233,30,140,0.25);background:linear-gradient(135deg,#FFF4F9,#FFF)' : 'border:1.5px solid rgba(233,30,140,0.1);background:#FFF'">
            <button class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" @click="open = open === i ? null : i">
              <span class="headline text-base text-[#1A1A2E]">{{ faq.q }}</span>
              <span class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300" :style="open === i ? 'background:linear-gradient(135deg,#E91E8C,#C2185B);transform:rotate(45deg)' : 'background:rgba(233,30,140,0.08)'">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" :stroke="open === i ? '#fff' : '#E91E8C'" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <Transition name="faq"><div v-if="open === i" class="px-6 pb-5"><div class="pink-divider mb-4"/><p class="body text-sm text-[#6B4F5A] leading-relaxed">{{ faq.a }}</p></div></Transition>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container">
        <div class="max-w-2xl mx-auto text-center glass-pink rounded-3xl p-6 sm:p-8 lg:p-12">
          <h2 class="display text-3xl text-[#1A1A2E] mb-4">Запишитесь на ресницы</h2>
          <p class="body text-base text-[#6B4F5A] mb-8">г. Москва, Коммунарка, ул. Александры Монаховой 43/1 · SoiSoul, 1 этаж · Ежедневно 10:00–22:00</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
            <NuxtLink to="/brovi" class="btn-outline-pink inline-block text-center">Ещё: брови →</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.faq-enter-active,.faq-leave-active{transition:all .3s ease;overflow:hidden}
.faq-enter-from,.faq-leave-to{opacity:0;max-height:0}
.faq-enter-to,.faq-leave-from{opacity:1;max-height:200px}
</style>

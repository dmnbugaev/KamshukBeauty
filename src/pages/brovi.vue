<script setup lang="ts">
useHead({
  title: 'Брови в Коммунарке — архитектура и коррекция от 1 050 ₽ | Камшук Бьюти',
  meta: [
    { name: 'description', content: 'Архитектура бровей, коррекция и долговременная укладка в Коммунарке (Москва) от 1 050 ₽ по Радужному предложению до конца июля. Запись онлайн.' },
    { name: 'keywords', content: 'брови Коммунарка, архитектура бровей Коммунарка, коррекция бровей Коммунарка, долговременная укладка бровей Коммунарка, брови Новая Москва' },
    { property: 'og:title', content: 'Брови в Коммунарке — архитектура от 1 050 ₽ | Камшук Бьюти' },
    { property: 'og:description', content: 'Архитектура и коррекция бровей в Коммунарке. До конца июля скидка 30% на все услуги.' },
    { property: 'og:image', content: 'https://kamshukbeauty.ru/images/4_foto/resnici_i_brovi.jpg' },
    { property: 'og:url', content: 'https://kamshukbeauty.ru/brovi' },
  ],
  link: [{ rel: 'canonical', href: 'https://kamshukbeauty.ru/brovi' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Архитектура бровей в Коммунарке',
        description: 'Архитектура, коррекция и долговременная укладка бровей в студии Камшук Бьюти, Коммунарка.',
        provider: { '@type': 'BeautySalon', name: 'Камшук Бьюти', url: 'https://kamshukbeauty.ru' },
        areaServed: { '@type': 'City', name: 'Москва' },
        offers: [
          { '@type': 'Offer', name: 'Архитектура бровей', price: '1050', priceCurrency: 'RUB' },
          { '@type': 'Offer', name: 'Долговременная укладка + оформление', price: '2800', priceCurrency: 'RUB' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://kamshukbeauty.ru' },
          { '@type': 'ListItem', position: 2, name: 'Брови в Коммунарке', item: 'https://kamshukbeauty.ru/brovi' },
        ],
      },
    ]),
  }],
})

const prices = [
  { name: 'Архитектура бровей', oldPrice: '1 500 ₽', price: '1 050 ₽', desc: 'Форма, коррекция, окрашивание — идеальные брови' },
  { name: 'Долговременная укладка + оформление', oldPrice: '4 000 ₽', price: '2 800 ₽', desc: 'Укладка держится 4–6 недель, брови всегда ухоженные' },
  { name: 'Только коррекция', oldPrice: 'от 800 ₽', price: 'от 560 ₽', desc: 'Поддержание формы между основными процедурами' },
]

const faqs = [
  { q: 'Что такое архитектура бровей?', a: 'Архитектура бровей — это комплексная процедура: определение идеальной формы под тип лица, разметка, коррекция нежелательных волосков, окрашивание хной или краской. Результат — симметричные, красивые брови, которые обрамляют взгляд.' },
  { q: 'Сколько держится архитектура бровей?', a: 'Форма держится 4–6 недель. Окрашивание хной — 2–3 недели. Рекомендуем приходить на коррекцию раз в месяц.' },
  { q: 'Что такое долговременная укладка бровей?', a: 'Это процедура, при которой волоски бровей фиксируются в нужном направлении с помощью специального состава. Брови выглядят пышными и ухоженными 4–6 недель без ежедневной укладки.' },
  { q: 'Болезненно ли делать коррекцию бровей?', a: 'Нет. Мастер использует качественный воск или пинцет, процедура проходит быстро и комфортно. Небольшое покраснение возможно, но проходит в течение нескольких часов.' },
]

const open = ref<number | null>(null)
</script>

<template>
  <div class="pt-20">
    <section class="py-20 relative overflow-hidden" style="background: radial-gradient(ellipse at 80% 20%, rgba(233,30,140,0.08) 0%, transparent 60%), #FFFFFF">
      <div class="container">
        <Breadcrumb :items="[{ label: 'Брови в Коммунарке' }]" />
        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-[1320px] mx-auto">
          <div>
            <div class="section-label mb-6">Радужное предложение · скидка 30% до конца июля</div>
            <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-6 leading-tight">
              Архитектура<br /><span class="text-pink-shimmer">бровей</span><br />в Коммунарке
            </h1>
            <p class="body text-lg text-[#6B4F5A] mb-8 max-w-lg leading-relaxed">
              Архитектура, коррекция и долговременная укладка бровей.
              Идеальная форма, которая <strong>подчёркивает ваш взгляд</strong>.
              Ежедневно 10:00–22:00.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
              <a href="tel:+79771075005" class="btn-outline-pink inline-block text-center">+7 (977) 107-50-05</a>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div><PromoPrice old-price="от 1 500 ₽" new-price="от 1 050 ₽" size="lg" align="left" /><p class="body text-xs text-[#B08898]">стоимость</p></div>
              <div><div class="headline text-3xl text-pink-gradient mb-1">4–6 нед.</div><p class="body text-xs text-[#B08898]">держится укладка</p></div>
              <div><div class="headline text-3xl text-pink-gradient mb-1">−30%</div><p class="body text-xs text-[#B08898]">до конца июля</p></div>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-[4/3] overflow-hidden rounded-3xl" style="box-shadow: 0 24px 80px rgba(233,30,140,0.15)">
              <img src="/images/4_foto/resnici_i_brovi.jpg" alt="Архитектура бровей в Коммунарке — студия Камшук Бьюти" class="w-full h-full object-cover" width="600" height="450" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%)">
      <div class="container">
        <div class="max-w-xl mb-12"><div class="section-label mb-4">Прайс-лист</div><h2 class="display text-3xl lg:text-4xl text-[#1A1A2E]">Стоимость процедур</h2></div>
        <div class="grid md:grid-cols-2 gap-4 max-w-3xl">
          <div v-for="item in prices" :key="item.name" class="card-luxury rounded-2xl p-6">
            <div class="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start mb-2">
              <h3 class="headline text-base text-[#1A1A2E]">{{ item.name }}</h3>
              <PromoPrice class="sm:ml-4 shrink-0" :old-price="item.oldPrice" :new-price="item.price" align="left" />
            </div>
            <p class="body text-xs text-[#B08898]">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%)">
      <div class="container">
        <div class="max-w-xl mb-12"><div class="section-label mb-4">FAQ</div><h2 class="display text-3xl lg:text-4xl text-[#1A1A2E]">Вопросы о бровях</h2></div>
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
          <h2 class="display text-3xl text-[#1A1A2E] mb-4">Запишитесь на брови</h2>
          <p class="body text-base text-[#6B4F5A] mb-8">г. Москва, Коммунарка, ул. Александры Монаховой 43/1 · SoiSoul, 1 этаж · Ежедневно 10:00–22:00</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
            <NuxtLink to="/naraschivanie-resnic" class="btn-outline-pink inline-block text-center">Ещё: ресницы →</NuxtLink>
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

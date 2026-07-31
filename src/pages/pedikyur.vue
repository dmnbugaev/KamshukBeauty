<script setup lang="ts">
useHead({
  title: 'Педикюр в Коммунарке — от 3 200 ₽ | Камшук Бьюти',
  meta: [
    { name: 'description', content: 'Смарт-педикюр и аппаратный педикюр в Коммунарке (Москва) от 3 200 ₽. Скидка 20% на первый визит. Ежедневно 10:00–22:00.' },
    { name: 'keywords', content: 'педикюр Коммунарка, смарт педикюр Коммунарка, аппаратный педикюр Коммунарка, педикюр Новая Москва, педикюр ТиНАО' },
    { property: 'og:title', content: 'Педикюр в Коммунарке — Камшук Бьюти от 3 200 ₽' },
    { property: 'og:description', content: 'Смарт-педикюр и аппаратный педикюр в Коммунарке. Скидка 20% новым гостям на первый визит.' },
    { property: 'og:image', content: 'https://kamshukbeauty.ru/images/4_foto/manik.jpg' },
    { property: 'og:url', content: 'https://kamshukbeauty.ru/pedikyur' },
  ],
  link: [{ rel: 'canonical', href: 'https://kamshukbeauty.ru/pedikyur' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Педикюр в Коммунарке',
        description: 'Смарт-педикюр и аппаратный педикюр в студии Камшук Бьюти, Коммунарка.',
        provider: { '@type': 'BeautySalon', name: 'Камшук Бьюти', url: 'https://kamshukbeauty.ru' },
        areaServed: { '@type': 'City', name: 'Москва' },
        offers: [
          { '@type': 'Offer', name: 'Смарт-педикюр', price: '3500', priceCurrency: 'RUB' },
          { '@type': 'Offer', name: 'Аппаратный педикюр', price: '3200', priceCurrency: 'RUB' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://kamshukbeauty.ru' },
          { '@type': 'ListItem', position: 2, name: 'Педикюр в Коммунарке', item: 'https://kamshukbeauty.ru/pedikyur' },
        ],
      },
    ]),
  }],
})

const prices = [
  { name: 'Смарт-педикюр', price: '3 500 ₽', desc: 'Аппаратная обработка + покрытие гель-лак' },
  { name: 'Аппаратный педикюр (без покрытия)', price: '3 200 ₽', desc: 'Профессиональная обработка стоп и ногтей' },
  { name: 'Комплекс маникюр + педикюр', price: 'от 6 000 ₽', desc: 'Ногти на руках и ногах за один визит' },
]

const faqs = [
  { q: 'Что такое смарт-педикюр?', a: 'Смарт-педикюр — современная техника аппаратной обработки стоп с нанесением покрытия гель-лак. Включает обработку ногтевой пластины, кутикулы, мозолей и трещин без воды, что снижает риск инфекций.' },
  { q: 'Болезненно ли делать педикюр?', a: 'Процедура безболезненна. Мастер работает аккуратно, учитывая чувствительность стоп. Большинство гостей говорят, что педикюр — самая приятная процедура.' },
  { q: 'Сколько держится покрытие на ногах?', a: 'Как правило, 4–6 недель — дольше, чем на руках, так как ногти на ногах растут медленнее и меньше подвергаются механическому воздействию.' },
  { q: 'Нужно ли готовиться к педикюру?', a: 'Заранее распаривать стопы не нужно. Аппаратный метод предполагает работу на сухой коже — это безопаснее и гигиеничнее.' },
]

const open = ref<number | null>(null)
</script>

<template>
  <div class="pt-20">
    <section class="py-20 relative overflow-hidden" style="background: radial-gradient(ellipse at 80% 20%, rgba(233,30,140,0.08) 0%, transparent 60%), #FFFFFF">
      <div class="container">
        <Breadcrumb :items="[{ label: 'Педикюр в Коммунарке' }]" />
        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-[1320px] mx-auto">
          <div>
            <div class="section-label mb-6">Скидка 20% на первый визит</div>
            <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-6 leading-tight">
              Педикюр<br /><span class="text-pink-shimmer">в Коммунарке</span>
            </h1>
            <p class="body text-lg text-[#6B4F5A] mb-8 max-w-lg leading-relaxed">
              Смарт-педикюр и аппаратный педикюр — современные техники ухода за стопами.
              Покрытие держится <strong>4–6 недель</strong>. Ежедневно 10:00–22:00.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
              <a href="tel:+79771075005" class="btn-outline-pink inline-block text-center">+7 (977) 107-50-05</a>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div><div class="headline text-3xl text-pink-gradient mb-1">от 3 200 ₽</div><p class="body text-xs text-[#B08898]">стоимость</p></div>
              <div><div class="headline text-3xl text-pink-gradient mb-1">4–6 нед.</div><p class="body text-xs text-[#B08898]">держится покрытие</p></div>
              <div><div class="headline text-3xl text-pink-gradient mb-1">−20%</div><p class="body text-xs text-[#B08898]">первый визит</p></div>
            </div>
            <p class="body text-xs text-[#B08898] mt-5">
              * Предложение действует только на первый визит. Скидки и акции не суммируются.
            </p>
          </div>
          <div class="relative">
            <div class="aspect-[4/3] overflow-hidden rounded-3xl" style="box-shadow: 0 24px 80px rgba(233,30,140,0.15)">
              <img src="/images/new_foto/20260511_232100.jpg" alt="Педикюр в Коммунарке — студия Камшук Бьюти" class="w-full h-full object-cover" width="600" height="450" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%)">
      <div class="container">
        <div class="max-w-xl mb-12"><div class="section-label mb-4">Прайс-лист</div><h2 class="display text-3xl lg:text-4xl text-[#1A1A2E]">Стоимость педикюра</h2></div>
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
        <div class="max-w-xl mb-12"><div class="section-label mb-4">FAQ</div><h2 class="display text-3xl lg:text-4xl text-[#1A1A2E]">Вопросы о педикюре</h2></div>
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
          <h2 class="display text-3xl text-[#1A1A2E] mb-4">Запишитесь на педикюр</h2>
          <p class="body text-base text-[#6B4F5A] mb-8">г. Москва, Коммунарка, ул. Александры Монаховой 43/1 · SoiSoul, 1 этаж · Ежедневно 10:00–22:00</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
            <NuxtLink to="/manikyur" class="btn-outline-pink inline-block text-center">Маникюр + педикюр</NuxtLink>
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

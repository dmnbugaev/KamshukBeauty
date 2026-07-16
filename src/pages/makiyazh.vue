<script setup lang="ts">
useHead({
  title: 'Макияж в Коммунарке — от 2 450 ₽ | Дневной, вечерний, свадебный | Камшук Бьюти',
  meta: [
    { name: 'description', content: 'Профессиональный макияж в Коммунарке (Москва) от 2 450 ₽ по Радужному предложению до конца июля. Дневной, вечерний, свадебный макияж.' },
    { name: 'keywords', content: 'макияж Коммунарка, свадебный макияж Коммунарка, вечерний макияж Коммунарка, визажист Коммунарка, макияж Новая Москва, визажист ТиНАО' },
    { property: 'og:title', content: 'Макияж в Коммунарке — Камшук Бьюти от 2 450 ₽' },
    { property: 'og:description', content: 'Дневной, вечерний, свадебный макияж в Коммунарке. До конца июля скидка 30% на все услуги.' },
    { property: 'og:image', content: 'https://kamshukbeauty.ru/images/4_foto/make.jpg' },
    { property: 'og:url', content: 'https://kamshukbeauty.ru/makiyazh' },
  ],
  link: [{ rel: 'canonical', href: 'https://kamshukbeauty.ru/makiyazh' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Макияж в Коммунарке',
        description: 'Дневной, вечерний и свадебный макияж в студии Камшук Бьюти, Коммунарка.',
        provider: { '@type': 'BeautySalon', name: 'Камшук Бьюти', url: 'https://kamshukbeauty.ru' },
        areaServed: { '@type': 'City', name: 'Москва' },
        offers: [
          { '@type': 'Offer', name: 'Дневной макияж', price: '2450', priceCurrency: 'RUB' },
          { '@type': 'Offer', name: 'Вечерний макияж', price: '3500', priceCurrency: 'RUB' },
          { '@type': 'Offer', name: 'Свадебный макияж', price: '5600', priceCurrency: 'RUB' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://kamshukbeauty.ru' },
          { '@type': 'ListItem', position: 2, name: 'Макияж в Коммунарке', item: 'https://kamshukbeauty.ru/makiyazh' },
        ],
      },
    ]),
  }],
})

const prices = [
  { name: 'Дневной макияж', oldPrice: '3 500 ₽', price: '2 450 ₽', desc: 'Естественный образ для работы, встреч и повседневной жизни' },
  { name: 'Вечерний макияж', oldPrice: '5 000 ₽', price: '3 500 ₽', desc: 'Яркий, выразительный образ для особых событий' },
  { name: 'Свадебный макияж', oldPrice: '8 000 ₽', price: '5 600 ₽', desc: 'Стойкий макияж для самого важного дня, фотосъёмки' },
  { name: 'Свадебный макияж + причёска', oldPrice: '14 000 ₽', price: '9 800 ₽', desc: 'Полный образ невесты от Камшук Бьюти' },
]

const faqs = [
  { q: 'Сколько держится макияж?', a: 'Профессиональный макияж держится 8–12 часов при использовании фиксаторов. Для свадьбы используем дополнительные средства стойкости — макияж выдержит весь день и фотосессию.' },
  { q: 'Нужно ли приходить без макияжа?', a: 'Да, желательно прийти с чистым лицом. Если сняли не успели — мастер поможет. Возьмите с собой любимые средства для ухода, если есть аллергия на определённые компоненты.' },
  { q: 'Делаете ли пробный макияж перед свадьбой?', a: 'Да, для свадебного макияжа рекомендуем пробный визит — вы увидите образ заранее и сможете внести правки. Пробный сеанс оплачивается отдельно.' },
  { q: 'Работаете ли вы выездом на локацию?', a: 'Да, при наличии свободных дат мастер может выехать к вам. Обсудите условия при записи по телефону или в мессенджере.' },
]

const open = ref<number | null>(null)
</script>

<template>
  <div class="pt-20">
    <section class="py-20 relative overflow-hidden" style="background: radial-gradient(ellipse at 80% 20%, rgba(233,30,140,0.08) 0%, transparent 60%), #FFFFFF">
      <div class="container px-6 lg:px-12">
        <Breadcrumb :items="[{ label: 'Макияж в Коммунарке' }]" />
        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-[1320px] mx-auto">
          <div>
            <div class="section-label mb-6">Радужное предложение · скидка 30% до конца июля</div>
            <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-6 leading-tight">
              Макияж<br /><span class="text-pink-shimmer">в Коммунарке</span>
            </h1>
            <p class="body text-lg text-[#6B4F5A] mb-8 max-w-lg leading-relaxed">
              Дневной, вечерний и свадебный макияж от профессионального визажиста.
              Подчеркнём вашу <strong>индивидуальность</strong> для любого события.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
              <a href="tel:+79771075005" class="btn-outline-pink inline-block text-center">+7 (977) 107-50-05</a>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div><PromoPrice old-price="от 3 500 ₽" new-price="от 2 450 ₽" size="lg" align="left" /><p class="body text-xs text-[#B08898]">стоимость</p></div>
              <div><div class="headline text-3xl text-pink-gradient mb-1">8–12 ч.</div><p class="body text-xs text-[#B08898]">стойкость</p></div>
              <div><div class="headline text-3xl text-pink-gradient mb-1">−30%</div><p class="body text-xs text-[#B08898]">до конца июля</p></div>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-[4/3] overflow-hidden rounded-3xl" style="box-shadow: 0 24px 80px rgba(233,30,140,0.15)">
              <img src="/images/4_foto/make.jpg" alt="Макияж в Коммунарке — студия Камшук Бьюти" class="w-full h-full object-cover" width="600" height="450" loading="lazy" />
            </div>
            <div class="absolute -bottom-4 -left-4 glass-pink rounded-2xl px-5 py-3" style="box-shadow: 0 8px 32px rgba(233,30,140,0.2)">
              <p class="label text-[10px] text-[#C2185B] mb-0.5">Радужное предложение</p>
              <p class="headline text-2xl text-[#E91E8C]">−30%</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%)">
      <div class="container px-6 lg:px-12">
        <div class="max-w-xl mb-12"><div class="section-label mb-4">Прайс-лист</div><h2 class="display text-3xl lg:text-4xl text-[#1A1A2E]">Стоимость макияжа</h2></div>
        <div class="grid md:grid-cols-2 gap-4 max-w-3xl">
          <div v-for="item in prices" :key="item.name" class="card-luxury rounded-2xl p-6">
            <div class="flex justify-between items-start mb-2">
              <h3 class="headline text-base text-[#1A1A2E]">{{ item.name }}</h3>
              <PromoPrice class="ml-4 shrink-0" :old-price="item.oldPrice" :new-price="item.price" />
            </div>
            <p class="body text-xs text-[#B08898]">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%)">
      <div class="container px-6 lg:px-12">
        <div class="max-w-xl mb-12"><div class="section-label mb-4">FAQ</div><h2 class="display text-3xl lg:text-4xl text-[#1A1A2E]">Вопросы о макияже</h2></div>
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
      <div class="container px-6 lg:px-12">
        <div class="max-w-2xl mx-auto text-center glass-pink rounded-3xl p-12">
          <h2 class="display text-3xl text-[#1A1A2E] mb-4">Запишитесь на макияж</h2>
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

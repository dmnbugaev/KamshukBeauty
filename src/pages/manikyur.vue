<script setup lang="ts">
useHead({
  title: 'Маникюр в Коммунарке — от 1 400 ₽ | Камшук Бьюти',
  meta: [
    { name: 'description', content: 'Маникюр и покрытие гель-лак в Коммунарке (Москва) от 1 400 ₽. Скидка 20% на первый визит. Запись онлайн. Ежедневно 10:00–22:00.' },
    { name: 'keywords', content: 'маникюр Коммунарка, маникюр гель-лак Коммунарка, маникюр Новая Москва, студия маникюра Коммунарка, маникюр ТиНАО, маникюр без выходных Москва' },
    { property: 'og:title', content: 'Маникюр в Коммунарке — Камшук Бьюти от 1 400 ₽' },
    { property: 'og:description', content: 'Маникюр и покрытие гель-лак в Коммунарке. Скидка 20% новым гостям на первый визит.' },
    { property: 'og:image', content: 'https://kamshukbeauty.ru/images/4_foto/manik.jpg' },
    { property: 'og:url', content: 'https://kamshukbeauty.ru/manikyur' },
  ],
  link: [{ rel: 'canonical', href: 'https://kamshukbeauty.ru/manikyur' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Маникюр в Коммунарке',
        description: 'Маникюр гель-лак, классический маникюр и наращивание ногтей в студии красоты Камшук Бьюти, Коммунарка.',
        provider: { '@type': 'BeautySalon', name: 'Камшук Бьюти', url: 'https://kamshukbeauty.ru' },
        areaServed: { '@type': 'City', name: 'Москва' },
        offers: [
          { '@type': 'Offer', name: 'Маникюр без покрытия', price: '1400', priceCurrency: 'RUB' },
          { '@type': 'Offer', name: 'Маникюр комплекс (гель-лак)', price: '2700', priceCurrency: 'RUB' },
          { '@type': 'Offer', name: 'Наращивание ногтей', price: '4000', priceCurrency: 'RUB' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://kamshukbeauty.ru' },
          { '@type': 'ListItem', position: 2, name: 'Маникюр в Коммунарке', item: 'https://kamshukbeauty.ru/manikyur' },
        ],
      },
    ]),
  }],
})

const prices = [
  { name: 'Маникюр без покрытия', price: '1 400 ₽', desc: 'Обработка кутикулы, форма ногтей' },
  { name: 'Маникюр комплекс (гель-лак)', price: '2 700 ₽', desc: 'Маникюр + покрытие гель-лак, держится 3–4 недели' },
  { name: 'Наращивание ногтей', price: '4 000 ₽', desc: 'Гелевое моделирование, любая длина и форма' },
  { name: 'Снятие покрытия', price: 'от 300 ₽', desc: 'Бережное снятие без повреждения пластины' },
]

const faqs = [
  { q: 'Сколько держится маникюр гель-лак?', a: 'В среднем 3–4 недели. Многие гостьи приходят раз в месяц — покрытие держится без сколов и отслоений. Результат зависит от состояния ногтевой пластины и соблюдения правил ухода.' },
  { q: 'Нужно ли снимать старое покрытие перед записью?', a: 'Нет, приходите как есть — снятие предыдущего покрытия входит в стоимость комплекса или выполняется отдельно по минимальной цене.' },
  { q: 'Как подготовиться к маникюру?', a: 'Специальной подготовки не требуется. Желательно не использовать масла и кремы за 2–3 часа до визита — они могут повлиять на адгезию покрытия.' },
  { q: 'Болезненно ли делать маникюр?', a: 'Нет. Мастер работает бережно, без дискомфорта. Гостьи часто говорят, что даже расслабляются во время процедуры.' },
  { q: 'Какую форму ногтей вы делаете?', a: 'Любую: миндаль, квадрат, овал, стилет, балерина, трапеция. Мастер поможет выбрать форму, которая подойдёт именно вашим рукам.' },
]

const open = ref<number | null>(null)
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <section
      class="py-20 relative overflow-hidden"
      style="background: radial-gradient(ellipse at 80% 20%, rgba(233,30,140,0.08) 0%, transparent 60%), #FFFFFF"
    >
      <div class="container">
        <Breadcrumb :items="[{ label: 'Маникюр в Коммунарке' }]" />

        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-[1320px] mx-auto">
          <div>
            <div class="section-label mb-6">Скидка 20% на первый визит</div>
            <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-6 leading-tight">
              Маникюр<br />
              <span class="text-pink-shimmer">в Коммунарке</span>
            </h1>
            <p class="body text-lg text-[#6B4F5A] mb-8 max-w-lg leading-relaxed">
              Маникюр гель-лак, классический и наращивание ногтей в студии Камшук Бьюти.
              Покрытие держится <strong>3–4 недели</strong> без сколов.
              Ежедневно&nbsp;10:00–22:00.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
                target="_blank" rel="noopener noreferrer"
                class="btn-pink inline-block text-center"
              >Записаться онлайн</a>
              <a href="tel:+79771075005" class="btn-outline-pink inline-block text-center">
                +7 (977) 107-50-05
              </a>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div class="text-center sm:text-left">
                <div class="headline text-3xl text-pink-gradient mb-1">от 1 400 ₽</div>
                <p class="body text-xs text-[#B08898]">стоимость</p>
              </div>
              <div class="text-center sm:text-left">
                <div class="headline text-3xl text-pink-gradient mb-1">3–4 нед.</div>
                <p class="body text-xs text-[#B08898]">держится покрытие</p>
              </div>
              <div class="text-center sm:text-left">
                <div class="headline text-3xl text-pink-gradient mb-1">−20%</div>
                <p class="body text-xs text-[#B08898]">первый визит</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-[4/3] overflow-hidden rounded-3xl" style="box-shadow: 0 24px 80px rgba(233,30,140,0.15)">
              <img
                src="/images/4_foto/manik.jpg"
                alt="Маникюр гель-лак в Коммунарке — студия Камшук Бьюти"
                class="w-full h-full object-cover"
                width="600" height="450"
              />
            </div>
            <div class="absolute -bottom-4 -left-4 glass-pink rounded-2xl px-5 py-3" style="box-shadow: 0 8px 32px rgba(233,30,140,0.2)">
              <p class="label text-[10px] text-[#C2185B] mb-0.5">Первый визит</p>
              <p class="headline text-2xl text-[#E91E8C]">−20%</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Цены -->
    <section class="py-20" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%)">
      <div class="container">
        <div class="max-w-xl mb-12">
          <div class="section-label mb-4">Прайс-лист</div>
          <h2 class="display text-3xl lg:text-4xl text-[#1A1A2E]">Стоимость маникюра</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-4 max-w-3xl">
          <div
            v-for="item in prices" :key="item.name"
            class="card-luxury rounded-2xl p-6"
          >
            <div class="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start mb-2">
              <h3 class="headline text-base text-[#1A1A2E]">{{ item.name }}</h3>
              <span class="label text-sm text-[#E91E8C] sm:ml-4 shrink-0">{{ item.price }}</span>
            </div>
            <p class="body text-xs text-[#B08898]">{{ item.desc }}</p>
          </div>
        </div>
        <p class="body text-xs text-[#B08898] mt-6">
          * Скидки и предложения не суммируются. Стоимость уточняйте при записи.
        </p>
      </div>
    </section>

    <!-- Почему мы -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="max-w-xl mb-12">
          <div class="section-label mb-4">Наши преимущества</div>
          <h2 class="display text-3xl lg:text-4xl text-[#1A1A2E]">Почему выбирают нас</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6 max-w-4xl">
          <div v-for="item in [
            { icon: '💎', title: 'Держится 3–4 недели', text: 'Используем только профессиональные материалы. Покрытие не скалывается и не отслаивается.' },
            { icon: '✋', title: 'Бережная работа', text: 'Без порезов и болезненных ощущений. Мастер работает аккуратно, учитывает состояние вашей кутикулы.' },
            { icon: '🕙', title: 'Ежедневно 10:00–22:00', text: 'Записывайтесь в удобное время — без выходных, в том числе в праздники.' },
          ]" :key="item.title" class="text-center p-6 rounded-2xl card-pink">
            <div class="ios-icon ios-pink mx-auto mb-4" style="width:56px;height:56px;border-radius:16px;font-size:1.6rem">{{ item.icon }}</div>
            <p class="headline text-base text-[#E91E8C] mb-2">{{ item.title }}</p>
            <p class="body text-sm text-[#6B4F5A]">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%)">
      <div class="container">
        <div class="max-w-xl mb-12">
          <div class="section-label mb-4">FAQ</div>
          <h2 class="display text-3xl lg:text-4xl text-[#1A1A2E]">Вопросы о маникюре</h2>
        </div>
        <div class="max-w-3xl space-y-3">
          <div
            v-for="(faq, i) in faqs" :key="i"
            class="rounded-2xl overflow-hidden transition-all duration-300"
            :style="open === i ? 'border: 1.5px solid rgba(233,30,140,0.25); background: linear-gradient(135deg,#FFF4F9,#FFF)' : 'border: 1.5px solid rgba(233,30,140,0.1); background: #FFF'"
          >
            <button class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" @click="open = open === i ? null : i">
              <span class="headline text-base text-[#1A1A2E]">{{ faq.q }}</span>
              <span class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300" :style="open === i ? 'background:linear-gradient(135deg,#E91E8C,#C2185B);transform:rotate(45deg)' : 'background:rgba(233,30,140,0.08)'">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" :stroke="open === i ? '#fff' : '#E91E8C'" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <Transition name="faq">
              <div v-if="open === i" class="px-6 pb-5">
                <div class="pink-divider mb-4"/>
                <p class="body text-sm text-[#6B4F5A] leading-relaxed">{{ faq.a }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="max-w-2xl mx-auto text-center glass-pink rounded-3xl p-6 sm:p-8 lg:p-12">
          <h2 class="display text-3xl text-[#1A1A2E] mb-4">Запишитесь на маникюр</h2>
          <p class="body text-base text-[#6B4F5A] mb-8">г. Москва, Коммунарка, ул. Александры Монаховой 43/1 · SoiSoul, 1 этаж · Ежедневно 10:00–22:00</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
            <NuxtLink to="/#price-list" class="btn-outline-pink inline-block text-center">Все цены</NuxtLink>
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

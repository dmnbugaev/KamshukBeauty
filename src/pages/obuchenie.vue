<script setup lang="ts">
useHead({
  title: 'Обучение маникюру и педикюру — Камшук Бьюти',
  meta: [
    {
      name: 'description',
      content: 'Школа-студия Анастасии Камшук. Специальные цены при записи в текущем месяце: курс мастера маникюра 30 000 ₽ вместо 35 000 ₽, мастера педикюра 25 000 ₽ вместо 28 000 ₽.',
    },
    {
      property: 'og:title',
      content: 'Обучение маникюру — Камшук Бьюти',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Школа-студия красоты Камшук Бьюти',
        description: 'Профессиональное обучение маникюру и смарт педикюру от мастера Анастасии Камшук.',
        url: 'https://kamshukbeauty.ru/obuchenie',
        telephone: '+79771075005',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Александры Монаховой д. 43/1',
          addressLocality: 'Москва',
          addressCountry: 'RU',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Курсы обучения',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Мастер маникюра', timeRequired: 'P3D' }, price: '30000', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Мастер педикюра', timeRequired: 'P2D' }, price: '25000', priceCurrency: 'RUB' },
          ],
        },
      }),
    },
  ],
})

const manikurProgram = [
  'Постановка руки на работу с аппаратом',
  'Постановка руки на работу с режущими инструментами',
  'Классический (обрезной) маникюр',
  'Аппаратный маникюр',
  'Комбинированный маникюр',
  'Европейский маникюр, японский маникюр, бразильский маникюр',
  'Мужской маникюр, детский маникюр',
  'SPA-маникюр, парафинотерапия и массаж рук',
  'Основы дезинфекции и стерилизации',
  'Деловая культура и этика общения с гостями студии',
  'Изучение анатомии и физиологии кожи, ногтей',
  'Материаловедение',
  'Обзор и подбор фрез под различные типы кутикулы',
  'Снятие старого материала',
  'Ремонт ногтей',
  'Выравнивание и укрепление ногтевой пластины',
  'Покрытие под кутикулу гель-лаком',
  'Дизайн ногтей',
  'Идеальные блики',
]

const pedikurProgram = [
  'Аппаратный / COMBI-педикюр',
  'Смарт педикюр',
]

const packages = [
  {
    title: 'Эксперт',
    displayTitle: 'Мастер ногтевого сервиса',
    duration: '5 дней',
    oldPrice: '50 000 ₽',
    price: '45 000 ₽',
    includes: '3 дня маникюр + 2 дня педикюр',
    popular: false,
  },
  {
    title: 'Топ',
    displayTitle: 'Топ-мастер ногтевого сервиса',
    duration: '7 дней',
    oldPrice: '60 000 ₽',
    price: '55 000 ₽',
    includes: '3 дня маникюр + 2 дня педикюр + 2 дня моделирование',
    popular: true,
  },
  {
    title: 'VIP',
    displayTitle: 'VIP-мастер ногтевого сервиса',
    duration: '9 дней',
    oldPrice: '70 000 ₽',
    price: '65 000 ₽',
    includes: '3 дня маникюр + 2 дня педикюр + 2 дня моделирование + 2 дня верхние формы',
    popular: false,
  },
]

const benefits = [
  { icon: '👩‍🏫', title: 'Профессиональный инструктор', text: 'Обучение от мастера с 6+ летним опытом' },
  { icon: '📒', title: 'Рабочие тетради', text: 'Готовые тетради с иллюстрациями и пояснениями' },
  { icon: '📈', title: 'Максимум практики', text: 'Работа на моделях под контролем преподавателя' },
  { icon: '🎁', title: 'Набор мастера в подарок', text: 'Стартовый набор мастера стоимостью 5000 ₽ в подарок' },
  { icon: '🏆', title: 'Портфолио работ', text: 'В процессе обучения показываем, как фотографировать работы для успешного портфолио' },
  { icon: '✅', title: 'Материалы включены', text: 'Все материалы, расходники и оборудование выдаются школой' },
]

const afterTraining = ['Сертификаты', 'Трудоустройство', 'Высокий доход', 'Удовольствие от работы']

const contactLinks = [
  { label: 'Позвонить', value: '+7 (977) 107-50-05', href: 'tel:+79771075005', className: 'btn-pink' },
  { label: 'WhatsApp', value: 'Написать', href: 'https://wa.me/message/GAZGRNJFGZWUC1', className: 'btn-outline-pink' },
  { label: 'Telegram', value: 'Написать', href: 'https://t.me/offi_nesquik', className: 'btn-outline-pink' },
]
</script>

<template>
  <div class="pt-20">
    <section id="obuchenie" class="py-20 lg:py-28 overflow-hidden" style="background: linear-gradient(160deg, #FFF8FC 0%, #FFFFFF 48%, #FFF4F9 100%)">
      <div class="container">
        <div class="max-w-4xl">
          <div>
            <p class="section-label mb-5">Обучение</p>
            <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-6">
              Школа-студия красоты Анастасии Камшук
            </h1>
            <p class="body text-lg text-[#6B4F5A] mb-6">
              Практические курсы маникюра и smart-педикюра для тех, кто хочет уверенно выйти в профессию и работать на качественном уровне.
            </p>
            <p class="body text-base text-[#6B4F5A] mb-6 max-w-3xl leading-relaxed">
              Обучение в Камшук Бьюти даёт особенные знания: мы раскрываем авторские техники и профессиональные приёмы, которые невозможно получить где-либо ещё.
            </p>
            <div class="inline-flex max-w-full rounded-full bg-[#D81B60] px-5 py-2 label text-[11px] text-white mb-8">
              Специальные цены при записи в текущем месяце
            </div>
            <div class="grid sm:grid-cols-3 gap-3 mb-8">
              <div class="glass-pink rounded-2xl p-4">
                <p class="headline text-2xl text-[#E91E8C]">5-9</p>
                <p class="body text-xs text-[#6B4F5A] leading-snug">дней интенсивной практики</p>
              </div>
              <div class="glass-pink rounded-2xl p-4">
                <p class="headline text-2xl text-[#E91E8C]">6+</p>
                <p class="body text-xs text-[#6B4F5A] leading-snug">лет опыта инструктора</p>
              </div>
              <div class="glass-pink rounded-2xl p-4">
                <p class="headline text-2xl text-[#E91E8C]">100%</p>
                <p class="body text-xs text-[#6B4F5A] leading-snug">материалы включены</p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
              <a href="tel:+79771075005" class="btn-pink text-center">Узнать о курсе</a>
              <a href="#programs" class="btn-outline-pink text-center">Смотреть программы</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="programs" class="py-20 bg-white">
      <div class="container">
        <div class="max-w-2xl mb-12">
          <p class="section-label mb-5">Программы</p>
          <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-4">Курсы обучения</h2>
          <p class="body text-base text-[#B08898]">
            Основной фокус — практика, постановка руки, стерилизация, работа с материалами и уверенное выполнение процедур на моделях.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div class="card-luxury rounded-3xl p-6 sm:p-8">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <p class="label text-[10px] text-[#E91E8C] mb-2">3 дня</p>
                <h3 class="headline text-2xl text-[#1A1A2E]">Мастер маникюра</h3>
              </div>
              <PromoPrice old-price="35 000 ₽" new-price="30 000 ₽" align="left" note="при записи в текущем месяце" />
            </div>
            <p class="body text-sm text-[#6B4F5A] mb-6">
              Авторский ровный срез, аппаратная техника, выравнивание ногтевой пластины, покрытие под кутикулу и работа с дизайнами.
            </p>
            <div class="grid gap-3 max-h-[520px] overflow-y-auto pr-1">
              <div v-for="(item, idx) in manikurProgram" :key="idx" class="flex gap-3 rounded-2xl bg-[#FFF8FC] px-4 py-3">
                <span class="label text-xs text-[#D81B60] shrink-0 w-6">{{ idx + 1 }}.</span>
                <p class="body text-sm leading-relaxed text-[#424242]">{{ item }}</p>
              </div>
            </div>
          </div>

          <div class="card-luxury rounded-3xl p-6 sm:p-8">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <p class="label text-[10px] text-[#E91E8C] mb-2">2 дня</p>
                <h3 class="headline text-2xl text-[#1A1A2E]">Мастер педикюра</h3>
              </div>
              <PromoPrice old-price="28 000 ₽" new-price="25 000 ₽" align="left" note="при записи в текущем месяце" />
            </div>
            <p class="body text-sm text-[#6B4F5A] mb-6">
              Современные техники ухода за стопами, аппаратный, COMBI и smart-педикюр с профессиональным оборудованием.
            </p>
            <div class="grid gap-3">
              <div v-for="(item, idx) in pedikurProgram" :key="idx" class="flex gap-3 rounded-2xl bg-[#FFF8FC] px-4 py-3">
                <span class="label text-xs text-[#D81B60] shrink-0 w-6">{{ idx + 1 }}.</span>
                <p class="body text-sm leading-relaxed text-[#424242]">{{ item }}</p>
              </div>
            </div>
            <div class="mt-8 rounded-2xl bg-[#FFF4F9] p-5">
              <p class="headline text-lg text-[#1A1A2E] mb-2">После курса</p>
              <p class="body text-sm text-[#6B4F5A]">
                Вы сможете приступить к работе в салоне красоты или начать принимать гостей самостоятельно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%)">
      <div class="container">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p class="section-label mb-5">Пакеты</p>
            <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E]">Пакетное предложение</h2>
          </div>
          <p class="body text-sm text-[#B08898] max-w-md lg:text-right">
            Выберите глубину обучения: базовая профессия, усиление моделированием или расширенная VIP-программа.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="pkg in packages"
            :key="pkg.title"
            :class="[
              'relative rounded-3xl bg-white p-6 sm:p-8 transition-all duration-300',
              pkg.popular
                ? 'border-2 border-[#D81B60] shadow-[0_18px_60px_rgba(216,27,96,0.16)]'
                : 'border border-[#E91E8C]/10 hover:border-[#D81B60]/30',
            ]"
          >
            <div v-if="pkg.popular" class="absolute -top-4 left-6 rounded-full bg-[#D81B60] px-4 py-1 text-white">
              <span class="label text-xs">Популярный</span>
            </div>
            <p class="label text-[10px] text-[#B08898] mb-2">{{ pkg.duration }}</p>
            <h3 class="headline text-xl text-[#1A1A2E] mb-4">{{ pkg.displayTitle }}</h3>
            <PromoPrice :old-price="pkg.oldPrice" :new-price="pkg.price" size="lg" align="left" note="скидка 5 000 ₽ при записи в текущем месяце" />
            <p class="body text-sm text-[#6B4F5A] mt-5">{{ pkg.includes }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container">
        <div class="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div>
            <p class="section-label mb-5">Преимущества</p>
            <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-5">Что вы получаете</h2>
            <p class="body text-base text-[#B08898]">
              Обучение построено вокруг практики и понятной системы: от постановки руки до портфолио и первых гостей.
            </p>
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="benefit in benefits" :key="benefit.title" class="flex gap-4 rounded-3xl border border-[#E91E8C]/10 bg-white p-5 transition-all duration-300 hover:shadow-md">
              <div class="ios-icon ios-pink" style="width:48px;height:48px;border-radius:14px;font-size:1.25rem">{{ benefit.icon }}</div>
              <div>
                <h3 class="headline text-base text-[#1A1A2E] mb-2">{{ benefit.title }}</h3>
                <p class="body text-sm leading-relaxed text-[#6B4F5A]">{{ benefit.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background: linear-gradient(160deg, #FFF8FC 0%, #FFFFFF 100%)">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <p class="section-label mb-5 justify-center">Результат</p>
          <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-10">После обучения вас ждут</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div v-for="item in afterTraining" :key="item" class="rounded-2xl bg-white px-5 py-5 shadow-[0_8px_28px_rgba(233,30,140,0.06)]">
              <span class="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#FDE8F2] text-[#D81B60]">✓</span>
              <p class="headline text-base text-[#1A1A2E]">{{ item }}</p>
            </div>
          </div>

          <div class="glass-pink rounded-3xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
            <h3 class="headline text-2xl text-[#1A1A2E] mb-4">Готовы начать обучение?</h3>
            <p class="body text-base text-[#6B4F5A] mb-8 mx-auto">
              Свяжитесь с нами, чтобы уточнить ближайшие даты, расписание, количество мест и формат записи на курс.
            </p>
            <div class="grid sm:grid-cols-3 gap-3">
              <a
                v-for="link in contactLinks"
                :key="link.label"
                :href="link.href"
                :target="link.href.startsWith('http') ? '_blank' : undefined"
                :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                :class="[link.className, 'text-center']"
              >
                {{ link.label }}<span class="block text-[11px] opacity-80">{{ link.value }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

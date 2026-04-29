<script setup lang="ts">
useHead({
  title: 'Обучение маникюру и педикюру — Камшук Бьюти',
  meta: [
    {
      name: 'description',
      content: 'Школа-студия Анастасии Камшук. Курсы мастера маникюра (3 дня, 35 000 ₽) и смарт педикюра (2 дня, 28 000 ₽). Обучение с нуля, сертификат, набор в подарок.',
    },
    {
      property: 'og:title',
      content: 'Обучение маникюру — Камшук Бьюти',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
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
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Мастер маникюра', timeRequired: 'P3D' }, price: '35000', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Мастер педикюра', timeRequired: 'P2D' }, price: '28000', priceCurrency: 'RUB' },
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
    duration: '5 дней',
    price: '50 000 ₽',
    includes: '3 дня маникюр + 2 дня педикюр',
    popular: false,
  },
  {
    title: 'Топ',
    duration: '7 дней',
    price: '60 000 ₽',
    includes: '3 дня маникюр + 2 дня педикюр + 2 дня моделирование',
    popular: true,
  },
  {
    title: 'VIP',
    duration: '9 дней',
    price: '70 000 ₽',
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
</script>

<template>
  <div class="pt-20">
    <section id="obuchenie" class="py-32">
      <div class="container px-6 lg:px-12">
        <!-- Заголовок -->
        <div class="max-w-4xl mb-20">
          <p class="label text-xs text-[#D81B60] mb-4">Обучение</p>
          <h1 class="display text-4xl lg:text-5xl text-[#1A1A1A] mb-8">
            Школа-студия красоты<br />Анастасии Камшук
          </h1>
          <div class="space-y-6 body text-lg text-[#424242]">
            <p>
              Мастер маникюра всегда востребован. А суперский мастер всегда популярен и в ресурсе.
              Спрос на данные услуги стремительно растёт. По статистике, около 95% женщин считают,
              что маникюр необходим. Всё чаще к специалистам данного профиля обращаются мужчины.
            </p>
            <p>
              За время обучения вы узнаете о современной и авторской технике создания быстрого
              и качественного маникюра от Анастасии Камшук и сможете применять полученные знания
              на практике. Здесь всё чётко и по делу (реальность, без воды и прочего).
            </p>
            <p class="headline text-lg text-[#D81B60] italic">
              Желание + знания + опыт + трудолюбие + умение делиться внутренним светом с людьми + удача = успех
            </p>
            <p class="headline text-2xl text-[#1A1A1A]">
              Наша цель — ваш успех в профессии
            </p>
          </div>
        </div>

        <!-- Фото -->
        <div class="aspect-[9/16] md:aspect-[21/9] bg-[#F5F5F5] overflow-hidden mb-32 rounded-2xl shadow-xl">
          <picture class="w-full h-full">
            <source media="(max-width: 767px)" :srcset="'/images/obuch1.jpg'" />
            <source media="(min-width: 768px)" :srcset="'/images/obuch.png'" />
            <img
              src="/images/obuch.png"
              alt="Обучение маникюру в студии Камшук Бьюти"
              class="w-full h-full object-cover md:object-contain"
            />
          </picture>
        </div>

        <!-- Программа маникюра -->
        <div class="mb-32">
          <h2 class="headline text-3xl text-[#1A1A1A] mb-6">
            Программа курса «Мастер маникюра»
          </h2>
          <div class="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 class="headline text-xl text-[#D81B60] mb-4">3 дня — 35 000 ₽</h3>
              <p class="body text-base text-[#424242] mb-6">
                На курсе вы научитесь работать профессиональными инструментами, выполнять
                авторский «ровный срез» кутикулы, работать аппаратом, разберётесь, что такое
                выравнивание ногтевой пластины. Легко будете создавать идеальные блики,
                выполнять покрытие гель-лаком «под кутикулу».
              </p>
              <p class="body text-base text-[#424242]">
                Уже после окончания курса вы сможете приступить к работе в салоне красоты
                или работать на себя.
              </p>
            </div>
            <div class="grid gap-3">
              <div
                v-for="(item, idx) in manikurProgram"
                :key="idx"
                class="flex gap-4 glass-pink rounded-lg px-4 py-3"
              >
                <span class="label text-xs text-[#D81B60] shrink-0 w-6">{{ idx + 1 }}.</span>
                <p class="body text-sm text-[#424242]">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Программа педикюра -->
        <div class="mb-32">
          <h2 class="headline text-3xl text-[#1A1A1A] mb-6">
            Программа курса «Мастер педикюра»
          </h2>
          <div class="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 class="headline text-xl text-[#D81B60] mb-4">2 дня — 28 000 ₽</h3>
              <p class="body text-base text-[#424242]">
                Аппаратный, COMBI и Смарт педикюр — современные техники ухода за стопами
                с применением профессионального оборудования.
              </p>
            </div>
            <div class="grid gap-3">
              <div
                v-for="(item, idx) in pedikurProgram"
                :key="idx"
                class="flex gap-4 glass-pink rounded-lg px-4 py-3"
              >
                <span class="label text-xs text-[#D81B60] shrink-0 w-6">{{ idx + 1 }}.</span>
                <p class="body text-sm text-[#424242]">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Пакеты -->
        <div class="mb-32">
          <h2 class="headline text-3xl text-[#1A1A1A] mb-12">Пакетное предложение</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="(pkg, idx) in packages"
              :key="idx"
              :class="[
                'border-2 p-8 relative rounded-2xl transition-all duration-300',
                pkg.popular
                  ? 'border-[#D81B60] shadow-xl shadow-rose-100'
                  : 'border-[#F5F5F5] hover:border-[#D81B60]/30',
              ]"
            >
              <div
                v-if="pkg.popular"
                class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D81B60] text-white px-4 py-1 rounded-full"
              >
                <span class="label text-xs">Популярный</span>
              </div>
              <h3 class="headline text-xl text-[#D81B60] mb-1">
                «{{ pkg.title }}-мастер ногтевого сервиса»
              </h3>
              <p class="label text-xs text-[#757575] mb-2">{{ pkg.duration }}</p>
              <p class="headline text-3xl text-[#1A1A1A] mb-6">{{ pkg.price }}</p>
              <p class="body text-sm text-[#424242]">
                Базовый курс {{ pkg.duration }} ({{ pkg.includes }})
              </p>
            </div>
          </div>
        </div>

        <!-- Что вы получаете -->
        <div class="mb-32 bg-[#FAFAFA] px-8 lg:px-16 py-16 rounded-2xl">
          <h2 class="headline text-3xl text-[#1A1A1A] mb-12 text-center">
            Обучаясь у нас, вы получаете:
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(benefit, idx) in benefits"
              :key="idx"
              class="flex gap-4 bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300"
            >
              <div class="w-12 h-12 bg-[#FCE4EC] rounded-full flex items-center justify-center text-2xl shrink-0">
                {{ benefit.icon }}
              </div>
              <div>
                <h4 class="headline text-base text-[#1A1A1A] mb-2">
                  {{ idx + 1 }}. {{ benefit.title }}
                </h4>
                <p class="body text-sm text-[#424242]">{{ benefit.text }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- После обучения -->
        <div class="mb-20">
          <h2 class="headline text-3xl text-[#1A1A1A] mb-12 text-center">
            После обучения вас ждут
          </h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div
              v-for="(item, idx) in afterTraining"
              :key="idx"
              class="flex items-center gap-3 bg-white border border-[#F5F5F5] px-6 py-4 rounded-xl hover:border-[#D81B60]/30 hover:shadow-md transition-all duration-300"
            >
              <span class="text-[#D81B60] text-xl">✓</span>
              <span class="body text-base text-[#1A1A1A]">{{ item }}</span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="max-w-3xl mx-auto text-center glass-pink px-12 py-16 rounded-3xl">
          <h3 class="headline text-2xl text-[#1A1A2E] mb-6">Готовы начать обучение?</h3>
          <p class="body text-base text-[#6B4F5A] mb-8">
            Свяжитесь с нами для уточнения деталей, расписания и записи на курс
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79771075005"
              class="btn-pink inline-block text-center"
            >
              Позвонить: +7 (977) 107-50-05
            </a>
            <a
              href="https://wa.me/message/GAZGRNJFGZWUC1"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline-pink inline-block text-center"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Камшук Бьюти — Маникюр, ресницы, брови и макияж в Коммунарке (Москва)',
  meta: [
    {
      name: 'description',
      content: 'Студия красоты Камшук Бьюти в Коммунарке (Москва, ул. Александры Монаховой 43/1). Маникюр от 1 400 ₽. Скидка 20% на первый визит. Ежедневно 10:00–22:00.',
    },
    {
      name: 'keywords',
      content: 'маникюр Коммунарка, педикюр Коммунарка, студия красоты Коммунарка, ресницы Коммунарка, брови Коммунарка, макияж Коммунарка, наращивание ресниц Новая Москва, маникюр ТиНАО, студия красоты Новая Москва, Камшук Бьюти',
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Камшук Бьюти' },
    { name: 'geo.region', content: 'RU-MOW' },
    { name: 'geo.placename', content: 'Москва, Коммунарка' },
    { name: 'geo.position', content: '55.565;37.215' },
    { name: 'ICBM', content: '55.565, 37.215' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Камшук Бьюти' },
    {
      property: 'og:title',
      content: 'Камшук Бьюти — Студия красоты в Коммунарке | Маникюр, ресницы, брови',
    },
    {
      property: 'og:description',
      content: 'Маникюр от 1 400 ₽, педикюр, ресницы, брови и макияж в Коммунарке. Скидка 20% новым гостям на первый визит.',
    },
    {
      property: 'og:image',
      content: 'https://kamshukbeauty.ru/images/new_foto/20260511_232100.jpg',
    },
    { property: 'og:url', content: 'https://kamshukbeauty.ru' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Камшук Бьюти — Студия красоты в Коммунарке' },
    {
      name: 'twitter:description',
      content: 'Маникюр, педикюр, ресницы, брови и макияж в Москве (Коммунарка). Скидка 20% новым гостям.',
    },
    {
      name: 'twitter:image',
      content: 'https://kamshukbeauty.ru/images/new_foto/20260511_232100.jpg',
    },
  ],
  link: [
    { rel: 'canonical', href: 'https://kamshukbeauty.ru' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BeautySalon',
        name: 'Камшук Бьюти',
        alternateName: 'Kamshuk Beauty',
        description: 'Студия красоты в Коммунарке (Москва). Маникюр, смарт-педикюр, наращивание ресниц, архитектура бровей, макияж, перманентный макияж, обучение мастеров.',
        url: 'https://kamshukbeauty.ru',
        telephone: '+79771075005',
        email: 'info@kamshukbeauty.ru',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Александры Монаховой д. 43/1, здание SoiSoul, 1 этаж',
          addressLocality: 'Москва',
          addressRegion: 'Москва',
          postalCode: '108811',
          addressCountry: 'RU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '55.565',
          longitude: '37.215',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
            opens: '10:00',
            closes: '22:00',
          },
        ],
        priceRange: '₽₽',
        currenciesAccepted: 'RUB',
        paymentAccepted: 'Cash, Credit Card',
        image: [
          'https://kamshukbeauty.ru/images/new_foto/20260511_232100.jpg',
          'https://kamshukbeauty.ru/images/new_foto/20260511_233301.jpg',
          'https://kamshukbeauty.ru/images/logo.jpg',
        ],
        founder: {
          '@type': 'Person',
          name: 'Анастасия Камшук',
          jobTitle: 'Мастер высшей категории, основатель',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '100',
          bestRating: '5',
          worstRating: '1',
        },
        sameAs: [
          'https://vk.com/kamshuk_beauty',
          'https://t.me/offi_nesquik',
          'https://max.ru/u/f9LHodD0cOJhZWcjFtzBOFNlcS0w2RVemO55MmCDgD_nHgsPEPAhlJp3i2M',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Услуги студии красоты Камшук Бьюти',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Маникюр без покрытия', description: 'Классический маникюр без покрытия' }, price: '1400', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Маникюр комплекс (гель-лак)', description: 'Маникюр с покрытием гель-лак' }, price: '2700', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Смарт-педикюр', description: 'Педикюр с уходом и покрытием' }, price: '3500', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Наращивание ресниц', description: 'Профессиональное наращивание ресниц' }, price: '3300', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ламинирование ресниц' }, price: '3000', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Архитектура бровей' }, price: '1500', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Дневной макияж' }, price: '3500', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Свадебный макияж' }, price: '8000', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Пудровые брови (перманентный макияж)' }, price: '16000', priceCurrency: 'RUB' },
          ],
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Сколько держится маникюр гель-лак?',
            acceptedAnswer: { '@type': 'Answer', text: 'В среднем 3–4 недели. Покрытие держится от визита до визита без сколов.' },
          },
          {
            '@type': 'Question',
            name: 'Есть ли сейчас скидка?',
            acceptedAnswer: { '@type': 'Answer', text: 'Да. Действуют скидки 20% на первый визит, студентам, ко дню рождения и по акции «Приведи друга». Скидки и предложения не суммируются.' },
          },
          {
            '@type': 'Question',
            name: 'Работаете ли в выходные?',
            acceptedAnswer: { '@type': 'Answer', text: 'Работаем ежедневно без выходных с 10:00 до 22:00.' },
          },
          {
            '@type': 'Question',
            name: 'Как записаться в студию?',
            acceptedAnswer: { '@type': 'Answer', text: 'Запись онлайн через сайт, по телефону +7 (977) 107-50-05 или через мессенджер MAX/WhatsApp/Telegram.' },
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <StatementSection />
    <ServicesGrid />
    <WorkShowcase />
    <PriceList />
    <PromotionsSection />
    <AboutFounder />
    <StudioSpace />
    <TestimonialsSection />
    <FaqSection />
    <BookNow />
    <ContactInfo />
  </div>
</template>

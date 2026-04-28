<script setup lang="ts">
useHead({
  title: 'Камшук Бьюти — Студия красоты в Москве, Коммунарка',
  meta: [
    {
      name: 'description',
      content: 'Премиальная студия красоты Камшук Бьюти в Москве (Коммунарка). Маникюр от 1400₽, смарт педикюр, ресницы и брови, макияж, обучение. Запись онлайн. Скидка 15% на первый визит.',
    },
    {
      property: 'og:title',
      content: 'Камшук Бьюти — Студия красоты в Москве',
    },
    {
      property: 'og:description',
      content: 'Маникюр, педикюр, ресницы, брови, макияж в Москве. Записаться онлайн.',
    },
    {
      property: 'og:image',
      content: '/images/studio/1.jpg',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BeautySalon',
        name: 'Камшук Бьюти',
        description: 'Премиальная студия красоты в Москве. Маникюр, смарт педикюр, ресницы, брови, макияж, обучение.',
        url: 'https://kamshukbeauty.ru',
        telephone: '+79771075005',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Александры Монаховой д. 43/1, здание SoiSoul, 1 этаж',
          addressLocality: 'Москва',
          addressRegion: 'Москва',
          addressCountry: 'RU',
        },
        openingHours: 'Mo-Su 10:00-22:00',
        priceRange: '₽₽',
        image: 'https://kamshukbeauty.ru/images/studio/1.jpg',
        founder: {
          '@type': 'Person',
          name: 'Анастасия Камшук',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Услуги студии красоты',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Маникюр без покрытия' }, price: '1400', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Смарт педикюр' }, price: '3500', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Наращивание ресниц' }, price: '3300', priceCurrency: 'RUB' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Архитектура бровей' }, price: '1500', priceCurrency: 'RUB' },
          ],
        },
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
    <AboutFounder />
    <StudioSpace />
    <TestimonialsSection />
    <BookNow />
    <ContactInfo />
  </div>
</template>

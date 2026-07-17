<script setup lang="ts">
const services = [
  {
    title: 'Ногтевой сервис',
    description: 'Маникюр и педикюр гель-лак, наращивание. Покрытие держится до следующего визита — гарантируем качество',
    image: '/images/4_foto/manik.jpg',
    oldPrice: 'от 1 400 ₽',
    price: 'от 980 ₽',
    tag: 'Популярно',
    icon: '💅',
    iconClass: 'ios-pink',
    href: '/manikyur',
  },
  {
    title: 'Ресницы & Брови',
    description: 'Наращивание, ламинирование, коррекция бровей — выразительный взгляд без ежедневного макияжа',
    image: '/images/4_foto/resnici_i_brovi.jpg',
    oldPrice: 'от 1 500 ₽',
    price: 'от 1 050 ₽',
    tag: '',
    icon: '✨',
    iconClass: 'ios-rose',
    href: '/naraschivanie-resnic',
  },
  {
    title: 'Макияж',
    description: 'Дневной, вечерний, свадебный. Подчеркнём вашу красоту для любого события — от деловой встречи до торжества',
    image: '/images/4_foto/make.jpg',
    oldPrice: 'от 3 500 ₽',
    price: 'от 2 450 ₽',
    tag: '',
    icon: '💄',
    iconClass: 'ios-blush',
    href: '/makiyazh',
  },
  {
    title: 'Обучение',
    description: 'Освойте профессию с нуля или повысьте квалификацию. 9-лет опыта в бьюти сфере. Мастера передают реальные техники, а не теорию',
    image: '/images/4_foto/obychenie.jpg',
    oldPrice: '',
    price: 'Узнать стоимость',
    tag: 'Новые группы',
    icon: '🌸',
    iconClass: 'ios-gold',
    href: '/obuchenie',
  },
]
</script>

<template>
  <section id="services" class="py-28 bg-white">
    <div class="container">

      <!-- Заголовок секции -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
        <div class="max-w-xl">
          <div class="section-label mb-5">Радужное предложение</div>
          <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E] leading-tight">
            Что мы<br />предлагаем
          </h2>
        </div>
        <p class="body text-base text-[#B08898] max-w-sm lg:text-right">
          До конца июля действует скидка 30% на все услуги. Используем только
          премиальные материалы, авторские и проверенные техники
        </p>
      </div>

      <!-- Сетка услуг -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <NuxtLink
          v-for="(service, index) in services"
          :key="index"
          :to="service.href"
          :aria-label="`Услуга: ${service.title}`"
          class="group card-luxury overflow-hidden block focus:outline-none"
        >
          <!-- Фото -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width="600"
              height="450"
            />
            <!-- iOS иконка -->
            <div class="absolute top-4 left-4">
              <div :class="['ios-icon', service.iconClass]">
                {{ service.icon }}
              </div>
            </div>
            <!-- Оверлей розовый -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style="background: linear-gradient(to top, rgba(194,24,91,0.65) 0%, rgba(233,30,140,0.1) 60%, transparent 100%)"
            />
            <!-- Тег -->
            <div v-if="service.tag" class="absolute top-4 right-4">
              <span class="glass-pink px-3 py-1.5 rounded-full label text-[10px] text-[#C2185B]">
                {{ service.tag }}
              </span>
            </div>
            <!-- Кнопка "Подробнее" -->
            <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
              <span class="glass label text-[11px] text-white px-4 py-2 rounded-full inline-flex items-center gap-2">
                Подробнее
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>

          <!-- Контент -->
          <div class="p-6 lg:p-8">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-3">
              <h3 class="headline text-xl text-[#1A1A2E] group-hover:text-[#E91E8C] transition-colors duration-300">
                {{ service.title }}
              </h3>
              <PromoPrice
                v-if="service.oldPrice"
                class="shrink-0 sm:mt-1"
                :old-price="service.oldPrice"
                :new-price="service.price"
                size="sm"
              />
              <span v-else class="label text-[11px] text-[#E91E8C] shrink-0 sm:mt-1">{{ service.price }}</span>
            </div>
            <p class="body text-sm text-[#B08898]">{{ service.description }}</p>

            <!-- Розовый разделитель при наведении -->
            <div class="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
              style="background: linear-gradient(90deg, #E91E8C, #F48DB4)" />
          </div>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

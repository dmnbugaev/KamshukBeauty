<script setup lang="ts">
const services = [
  {
    title: 'Ногтевой сервис',
    description: 'Комплексный уход за ногтями с использованием премиальных материалов',
    image: '/images/4_foto/manik.jpg',
    price: 'от 1 400 ₽',
    tag: 'Популярно',
    href: '/#маникюр-педикюр',
  },
  {
    title: 'Ресницы & Брови',
    description: 'Наращивание, ламинирование и архитектура для выразительного взгляда',
    image: '/images/4_foto/resnici_i_brovi.jpg',
    price: 'от 1 500 ₽',
    tag: '',
    href: '/#ресницы-брови',
  },
  {
    title: 'Макияж',
    description: 'Дневной, вечерний и свадебный макияж от профессионального визажиста',
    image: '/images/4_foto/make.jpg',
    price: 'от 3 500 ₽',
    tag: '',
    href: '/#макияж',
  },
  {
    title: 'Обучение',
    description: 'Профессиональные курсы для начинающих и опытных мастеров',
    image: '/images/4_foto/obychenie.jpg',
    price: 'Узнать стоимость',
    tag: '',
    href: '/obuchenie',
  },
]
</script>

<template>
  <section id="services" class="py-28 bg-[#FFFCFA]">
    <div class="container px-6 lg:px-12">

      <!-- Заголовок секции -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
        <div class="max-w-xl">
          <div class="section-label mb-5">Услуги</div>
          <h2 class="display text-4xl lg:text-5xl text-[#1A100C] leading-tight">
            Что мы<br />предлагаем
          </h2>
        </div>
        <p class="body text-base text-[#8A7A74] max-w-sm lg:text-right">
          Каждая процедура — это искусство. Используем только
          премиальные материалы и проверенные техники
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
            />
            <!-- Оверлей -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style="background: linear-gradient(to top, rgba(26,13,46,0.7) 0%, rgba(200,164,65,0.1) 60%, transparent 100%)"
            />
            <!-- Тег -->
            <div v-if="service.tag" class="absolute top-4 left-4">
              <span class="glass-gold px-3 py-1.5 rounded-full label text-[10px] text-[#8B6914]">
                {{ service.tag }}
              </span>
            </div>
            <!-- Кнопка "Подробнее" -->
            <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
              <span class="glass label text-[11px] text-white px-4 py-2 rounded-lg inline-flex items-center gap-2">
                Подробнее
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>

          <!-- Контент -->
          <div class="p-6 lg:p-8">
            <div class="flex items-start justify-between gap-4 mb-3">
              <h3 class="headline text-xl text-[#1A100C] group-hover:text-[#C8A441] transition-colors duration-300">
                {{ service.title }}
              </h3>
              <span class="label text-[11px] text-[#C8A441] shrink-0 mt-1">{{ service.price }}</span>
            </div>
            <p class="body text-sm text-[#8A7A74]">{{ service.description }}</p>

            <!-- Золотой разделитель при наведении -->
            <div class="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
              style="background: linear-gradient(90deg, #C8A441, #7ECFDE)" />
          </div>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

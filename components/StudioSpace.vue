<script setup lang="ts">
const images = [
  { image: '/images/new_foto/20260511_234339.jpg', title: 'Рабочее место' },
  { image: '/images/new_foto/20260511_233301.jpg', title: 'Процедурная' },
  { image: '/images/new_foto/20260425_075215.jpg', title: 'Вход в студию' },
  { image: '/images/new_foto/20260511_233725.jpg', title: 'Зона отдыха' },
]
</script>

<template>
  <section class="py-28 bg-white">
    <div class="container px-6 lg:px-12">

      <!-- Заголовок -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <div class="section-label mb-5">Пространство</div>
          <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E]">Наша студия</h2>
        </div>
        <p class="body text-base text-[#B08898] max-w-xs lg:text-right">
          Уютное пространство с душой — здание SoiSoul, Коммунарка. Отмечены Яндекс Картами как «Хорошее место 2026»
        </p>
      </div>

      <!-- Главное фото -->
      <div class="relative aspect-[21/9] overflow-hidden rounded-3xl mb-4"
        style="box-shadow: 0 24px 80px rgba(233,30,140,0.12), 0 8px 32px rgba(0,0,0,0.08)">
        <img
          src="/images/new_foto/20260511_232100.jpg"
          alt="Студия красоты Камшук Бьюти — главный зал"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
        />
        <div
          class="absolute inset-0 rounded-3xl"
          style="background: linear-gradient(to right, rgba(194,24,91,0.25) 0%, transparent 50%)"
        />
        <div class="absolute bottom-8 left-8">
          <p class="label text-[11px] text-[#F9C5DA] mb-1">Камшук Бьюти</p>
          <p class="headline text-2xl text-white">Студия красоты</p>
        </div>
      </div>

      <!-- Галерея -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <div
          v-for="(item, idx) in images"
          :key="idx"
          class="aspect-square overflow-hidden group rounded-3xl relative cursor-pointer"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <!-- Розовый оверлей -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
            style="background: linear-gradient(to top, rgba(194,24,91,0.7) 0%, transparent 60%)"
          />
          <!-- Название -->
          <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span class="label text-[11px] text-[#F9C5DA] block mb-0.5">Студия</span>
            <span class="headline text-base text-white">{{ item.title }}</span>
          </div>
        </div>
      </div>

      <!-- Адрес — iOS glass card -->
      <div class="max-w-2xl mx-auto">
        <div
          class="rounded-3xl p-8 lg:p-12 text-center glass-pink"
        >
          <!-- iOS иконка адреса -->
          <div
            class="ios-icon mx-auto mb-6"
            style="background: linear-gradient(145deg, #F48DB4, #E91E8C); box-shadow: 0 6px 24px rgba(233,30,140,0.35), inset 0 1px 0 rgba(255,255,255,0.5)"
          >📍</div>
          <p class="headline text-xl text-[#1A1A2E] mb-3">Адрес студии</p>
          <p class="body text-base text-[#6B4F5A] mb-6 leading-relaxed">
            г. Москва, Коммунарка<br />
            ул. Александры Монаховой д. 43/1,<br />
            здание SoiSoul, 1 этаж
          </p>
          <div class="pink-divider mx-auto mb-5" />
          <p class="label text-[11px] text-[#E91E8C]">Ежедневно: 10:00 — 22:00</p>
        </div>
      </div>

    </div>
  </section>
</template>

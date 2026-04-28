<script setup lang="ts">
const prices = [
  {
    id: 'маникюр-педикюр',
    category: 'Маникюр & Педикюр',
    icon: '💅',
    items: [
      { name: 'Маникюр без покрытия', price: '1 400 ₽' },
      { name: 'Маникюр комплекс', price: '2 700 ₽' },
      { name: 'Наращивание ногтей', price: '4 000 ₽' },
      { name: 'Смарт педикюр', price: '3 500 ₽' },
    ],
  },
  {
    id: 'ресницы-брови',
    category: 'Ресницы & Брови',
    icon: '👁',
    items: [
      { name: 'Наращивание ресниц', price: '3 300 ₽' },
      { name: 'Ламинирование ресниц', price: '3 000 ₽' },
      { name: 'Архитектура бровей', price: '1 500 ₽' },
      { name: 'Долговременная укладка + оформление', price: '4 000 ₽' },
    ],
  },
  {
    id: 'макияж',
    category: 'Макияж',
    icon: '✨',
    items: [
      { name: 'Дневной', price: '3 500 ₽' },
      { name: 'Вечерний', price: '5 000 ₽' },
      { name: 'Свадебный', price: '8 000 ₽' },
      { name: 'Свадебный + причёска', price: '14 000 ₽' },
    ],
  },
  {
    id: 'перманентный-макияж',
    category: 'Перманентный макияж',
    icon: '🎨',
    items: [
      { name: 'Пудровые брови', price: '14 000 ₽' },
      { name: 'Напыление губ', price: '12 000 ₽' },
      { name: 'Стрелка', price: '11 000 ₽' },
      { name: 'Мушка', price: '5 000 ₽' },
    ],
  },
]
</script>

<template>
  <section id="price-list" class="py-28 relative overflow-hidden">
    <!-- Тёмный фон -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(160deg, #1A0D2E 0%, #0D1829 50%, #1A0D2E 100%)"
    />
    <!-- Декоративные блики -->
    <div class="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
      style="background: radial-gradient(circle, #7ECFDE, transparent)" />
    <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
      style="background: radial-gradient(circle, #C8A441, transparent)" />

    <div class="container px-6 lg:px-12 relative z-10">

      <!-- Заголовок -->
      <div class="max-w-xl mb-20">
        <div class="section-label mb-5" style="color: #C8A441">Цены</div>
        <h2 class="display text-4xl lg:text-5xl text-white mb-4">Прайс-лист</h2>
        <p class="body text-[#B4E4F0]">
          Прозрачное ценообразование без скрытых доплат
        </p>
      </div>

      <!-- Карточки цен -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="section in prices"
          :key="section.id"
          :id="section.id"
          class="rounded-2xl p-7 lg:p-9 transition-all duration-400 group"
          style="background: rgba(255,255,255,0.04); border: 1px solid rgba(200,164,65,0.15); backdrop-filter: blur(10px)"
        >
          <!-- Заголовок категории -->
          <div class="flex items-center gap-3 mb-8 pb-5"
            style="border-bottom: 1px solid rgba(200,164,65,0.15)">
            <span class="text-2xl">{{ section.icon }}</span>
            <h3 class="headline text-lg text-white">{{ section.category }}</h3>
          </div>

          <!-- Позиции -->
          <div class="space-y-5">
            <div
              v-for="(item, i) in section.items"
              :key="i"
              class="flex justify-between items-baseline group/item"
            >
              <span class="body text-sm text-[#B4E4F0]/80 group-hover/item:text-white transition-colors">
                {{ item.name }}
              </span>
              <span class="label text-sm text-gold ml-4 shrink-0">
                {{ item.price }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <a
          href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
          target="_blank"
          rel="noopener noreferrer"
          class="btn-gold inline-block"
        >
          Записаться онлайн
        </a>
        <p class="body text-xs text-[#7ECFDE]/60 mt-4">
          Скидка 15% при первом визите
        </p>
      </div>

    </div>
  </section>
</template>

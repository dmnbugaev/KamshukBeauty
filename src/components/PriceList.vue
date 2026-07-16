<script setup lang="ts">
const prices = [
  {
    id: 'маникюр-педикюр',
    category: 'Маникюр & Педикюр',
    icon: '💅',
    iconClass: 'ios-pink',
    items: [
      { name: 'Маникюр без покрытия', oldPrice: '1 400 ₽', price: '980 ₽' },
      { name: 'Маникюр комплекс', oldPrice: '2 700 ₽', price: '1 890 ₽' },
      { name: 'Наращивание ногтей', oldPrice: '4 000 ₽', price: '2 800 ₽' },
      { name: 'Умный педикюр', oldPrice: '3 100 ₽', price: '2 170 ₽' },
    ],
  },
  {
    id: 'ресницы-брови',
    category: 'Ресницы & Брови',
    icon: '👁',
    iconClass: 'ios-rose',
    items: [
      { name: 'Наращивание ресниц', oldPrice: '3 300 ₽', price: '2 310 ₽' },
      { name: 'Ламинирование ресниц', oldPrice: '3 000 ₽', price: '2 100 ₽' },
      { name: 'Архитектура бровей', oldPrice: '1 500 ₽', price: '1 050 ₽' },
      { name: 'Долговременная укладка + оформление', oldPrice: '4 000 ₽', price: '2 800 ₽' },
    ],
  },
  {
    id: 'макияж',
    category: 'Макияж',
    icon: '✨',
    iconClass: 'ios-blush',
    items: [
      { name: 'Дневной', oldPrice: '3 500 ₽', price: '2 450 ₽' },
      { name: 'Вечерний', oldPrice: '5 000 ₽', price: '3 500 ₽' },
      { name: 'Свадебный', oldPrice: '8 000 ₽', price: '5 600 ₽' },
      { name: 'Свадебный + причёска', oldPrice: '14 000 ₽', price: '9 800 ₽' },
    ],
  },
  {
    id: 'перманентный-макияж',
    category: 'Перманентный макияж',
    icon: '🎨',
    iconClass: 'ios-gold',
    items: [
      { name: 'Пудровые брови', oldPrice: '16 000 ₽', price: '11 200 ₽' },
      { name: 'Напыление губ', oldPrice: '16 000 ₽', price: '11 200 ₽' },
      { name: 'Стрелка', oldPrice: '16 000 ₽', price: '11 200 ₽' },
      { name: 'Межресничка', oldPrice: '12 000 ₽', price: '8 400 ₽' },
    ],
  },
]
</script>

<template>
  <section id="price-list" class="py-28 relative overflow-hidden">
    <!-- Нежный розовый фон -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 50%, #FFF0F5 100%)"
    />
    <!-- Декоративные пятна -->
    <div class="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
      style="background: radial-gradient(circle, rgba(244,141,180,0.5), transparent)" />
    <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
      style="background: radial-gradient(circle, rgba(233,30,140,0.2), transparent)" />

    <div class="container px-6 lg:px-12 relative z-10">

      <!-- Заголовок -->
      <div class="max-w-xl mb-20">
        <div class="section-label mb-5">Радужное предложение</div>
        <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-4">Прайс-лист</h2>
        <p class="body text-[#B08898]">
          До конца июля скидка 30% на все услуги. Прозрачное ценообразование без скрытых доплат
        </p>
      </div>

      <!-- Карточки цен — iOS glass стиль -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="section in prices"
          :key="section.id"
          :id="section.id"
          class="rounded-3xl p-7 lg:p-9 transition-all duration-400 group card-luxury"
        >
          <!-- Заголовок категории -->
          <div class="flex items-center gap-4 mb-8 pb-5 border-b border-[#E91E8C]/10">
            <div :class="['ios-icon', section.iconClass]" style="width:52px; height:52px; border-radius:16px; font-size:1.5rem">
              {{ section.icon }}
            </div>
            <h3 class="headline text-lg text-[#1A1A2E]">{{ section.category }}</h3>
          </div>

          <!-- Позиции -->
          <div class="space-y-5">
            <div
              v-for="(item, i) in section.items"
              :key="i"
              class="flex justify-between items-baseline group/item"
            >
              <span class="body text-sm text-[#6B4F5A] group-hover/item:text-[#1A1A2E] transition-colors">
                {{ item.name }}
              </span>
              <PromoPrice class="ml-4 shrink-0" :old-price="item.oldPrice" :new-price="item.price" />
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
          class="btn-pink inline-block"
        >
          Записаться онлайн
        </a>
        <p class="body text-xs text-[#B08898] mt-4">
          Радужное предложение действует до конца июля
        </p>
      </div>

    </div>
  </section>
</template>

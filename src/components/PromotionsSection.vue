<script setup lang="ts">
const offers = [
  { title: 'Первый визит', value: '−20%', text: 'Скидка 20% на услуги студии при первом посещении.' },
  { title: 'Студентам', value: '−20%', text: 'Скидка 20% студентам на услуги студии.' },
  { title: 'День рождения', value: '−20%', text: 'Действует в день рождения, за 3 дня до него и 3 дня после.' },
  { title: 'Приведи друга', value: '−20%', text: 'Приходите вместе — скидку 20% на услуги получит каждый из вас.' },
]
</script>

<template>
  <section id="offers" class="py-24 lg:py-28 bg-white">
    <div class="container">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div class="max-w-2xl">
          <p class="section-label mb-5">Выгодные предложения</p>
          <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-4">Акции для наших гостей</h2>
          <p class="body text-base text-[#6B4F5A]">Выберите подходящее предложение и сообщите о нём администратору при записи.</p>
        </div>
        <p class="body text-sm text-[#B08898] lg:text-right">Скидки и предложения не суммируются.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <article v-for="offer in offers" :key="offer.title" class="card-luxury rounded-3xl p-6">
          <p class="label text-[10px] text-[#B08898] mb-3">{{ offer.title }}</p>
          <p class="headline text-3xl text-[#E91E8C] mb-3">{{ offer.value }}</p>
          <p class="body text-sm leading-relaxed text-[#6B4F5A]">{{ offer.text }}</p>
        </article>
      </div>

      <div class="grid lg:grid-cols-3 gap-4">
        <article class="glass-pink rounded-3xl p-6 sm:p-8">
          <p class="section-label mb-3">Виртуальная карта</p>
          <h3 class="headline text-2xl text-[#1A1A2E] mb-3">10-й маникюр или педикюр-комплекс в подарок</h3>
          <p class="body text-sm leading-relaxed text-[#6B4F5A]">Карта привязывается к номеру телефона. Посещайте нас каждый месяц без пропусков, выбирая маникюр с любым комплексом или педикюр-комплекс, — десятая услуга будет полностью бесплатной. При пропуске месяца серия начинается заново.</p>
        </article>
        <article class="card-luxury rounded-3xl p-6 sm:p-8">
          <p class="section-label mb-3">Абонементы</p>
          <h3 class="headline text-2xl text-[#1A1A2E] mb-3">5 визитов со скидкой 20%</h3>
          <p class="body text-sm leading-relaxed text-[#6B4F5A]">Абонементы доступны на услуги маникюра и педикюра. Подробности и подбор удобного варианта — у администратора.</p>
        </article>
        <article class="card-luxury rounded-3xl p-6 sm:p-8">
          <p class="section-label mb-3">Подарочные сертификаты</p>
          <h3 class="headline text-2xl text-[#1A1A2E] mb-3">Красота в подарок</h3>
          <p class="body text-sm leading-relaxed text-[#6B4F5A]">Оформим подарочный сертификат с подходящим номиналом на услуги студии.</p>
        </article>
      </div>

      <p class="body text-xs text-[#B08898] mt-6">* Скидки действуют на услуги студии и не распространяются на обучение, абонементы и покупку подарочных сертификатов.</p>
    </div>
  </section>
</template>

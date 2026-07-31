<script setup lang="ts">
useHead({
  title: 'Блог о красоте — советы мастера | Камшук Бьюти Коммунарка',
  meta: [
    { name: 'description', content: 'Полезные статьи о маникюре, ресницах, бровях и макияже от мастера Анастасии Камшук. Советы по уходу, ответы на частые вопросы, тренды в мире красоты.' },
    { name: 'keywords', content: 'блог о красоте, советы мастера маникюра, уход за ногтями, наращивание ресниц советы, архитектура бровей' },
    { property: 'og:title', content: 'Блог о красоте — Камшук Бьюти' },
    { property: 'og:description', content: 'Советы мастера по маникюру, ресницам, бровям и макияжу.' },
    { property: 'og:url', content: 'https://kamshukbeauty.ru/blog' },
  ],
  link: [{ rel: 'canonical', href: 'https://kamshukbeauty.ru/blog' }],
})

const posts = [
  {
    slug: 'kak-podgotovitsya-k-vizitu-v-studiyu',
    title: 'Как подготовиться к визиту в студию красоты: чек-лист гостя',
    excerpt: 'Что сделать перед маникюром, бровями, ресницами или макияжем, чтобы процедура прошла спокойно, а результат держался дольше.',
    tag: 'Советы',
    date: '18 июля 2026',
    img: '/images/studio/1.jpg',
  },
  {
    slug: 'skolko-derzhitsya-gel-lak',
    title: 'Сколько держится гель-лак и от чего зависит результат',
    excerpt: 'Рассказываем, почему одним покрытие держится 4 недели, а другим — две, и как продлить срок носки.',
    tag: 'Маникюр',
    date: '12 мая 2026',
    img: '/images/4_foto/manik.jpg',
  },
  {
    slug: 'naraschivanie-resnic-vidy-i-uhod',
    title: 'Наращивание ресниц: виды техник и правила ухода',
    excerpt: 'Классика, 2D, объём — чем они отличаются и как выбрать подходящую технику. Советы по уходу после процедуры.',
    tag: 'Ресницы',
    date: '5 мая 2026',
    img: '/images/4_foto/resnici_i_brovi.jpg',
  },
  {
    slug: 'arkhitektura-brovej',
    title: 'Архитектура бровей: что это такое и кому подходит',
    excerpt: 'Объясняем разницу между коррекцией и архитектурой, и почему правильная форма меняет всё лицо.',
    tag: 'Брови',
    date: '28 апреля 2026',
    img: '/images/4_foto/resnici_i_brovi.jpg',
  },
  {
    slug: 'uhod-za-nogtami-doma',
    title: '7 правил ухода за ногтями дома — советы мастера',
    excerpt: 'Простые привычки, которые сохранят ногтевую пластину здоровой и продлят жизнь маникюру.',
    tag: 'Маникюр',
    date: '20 апреля 2026',
    img: '/images/new_foto/20260511_232100.jpg',
  },
  {
    slug: 'permanentnyj-makiyazh-brovej',
    title: 'Перманентный макияж бровей: всё, что нужно знать до процедуры',
    excerpt: 'Разбираемся, что такое пудровые брови, как проходит процедура, заживление и уход.',
    tag: 'Перманент',
    date: '14 апреля 2026',
    img: '/images/4_foto/make.jpg',
  },
]

const tagColors: Record<string, string> = {
  'Маникюр': 'rgba(233,30,140,0.08)',
  'Ресницы': 'rgba(126,207,222,0.15)',
  'Брови': 'rgba(200,164,65,0.12)',
  'Перманент': 'rgba(244,141,180,0.15)',
  'Советы': 'rgba(76,117,163,0.12)',
}
</script>

<template>
  <div class="pt-20">
    <section class="py-20 bg-white">
      <div class="container">
        <Breadcrumb :items="[{ label: 'Блог' }]" />

        <div class="max-w-xl mb-16">
          <div class="section-label mb-5">Советы мастера</div>
          <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-4">Блог о красоте</h1>
          <p class="body text-base text-[#B08898]">
            Полезные статьи от Анастасии Камшук — мастера с 9-летним опытом
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="post in posts" :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="group card-luxury rounded-3xl overflow-hidden block focus:outline-none"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <img
                :src="post.img" :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                width="400" height="300" loading="lazy"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="label text-[10px] px-3 py-1 rounded-full text-[#E91E8C]" :style="`background: ${tagColors[post.tag] || 'rgba(233,30,140,0.08)'}`">
                  {{ post.tag }}
                </span>
                <span class="body text-xs text-[#B08898]">{{ post.date }}</span>
              </div>
              <h2 class="headline text-base text-[#1A1A2E] mb-3 group-hover:text-[#E91E8C] transition-colors duration-300 leading-snug">
                {{ post.title }}
              </h2>
              <p class="body text-sm text-[#B08898] leading-relaxed">{{ post.excerpt }}</p>
              <div class="mt-4 h-px w-0 group-hover:w-full transition-all duration-500" style="background: linear-gradient(90deg, #E91E8C, #F48DB4)" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-16" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%)">
      <div class="container">
        <div class="max-w-2xl mx-auto text-center glass-pink rounded-3xl p-6 sm:p-10">
          <h2 class="display text-2xl text-[#1A1A2E] mb-4">Готовы к преображению?</h2>
          <p class="body text-sm text-[#6B4F5A] mb-6">Записывайтесь онлайн — новым гостям скидка 20% на первый визит</p>
          <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block">Записаться онлайн</a>
        </div>
      </div>
    </section>
  </div>
</template>

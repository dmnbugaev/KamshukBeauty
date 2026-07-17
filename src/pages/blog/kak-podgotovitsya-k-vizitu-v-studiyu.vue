<script setup lang="ts">
useHead({
  title: 'Как подготовиться к визиту в студию красоты — чек-лист | Камшук Бьюти',
  meta: [
    { name: 'description', content: 'Чек-лист подготовки к маникюру, педикюру, бровям, ресницам и макияжу. Что сделать перед визитом в студию Камшук Бьюти, чтобы процедура прошла комфортно.' },
    { name: 'keywords', content: 'как подготовиться к маникюру, подготовка к наращиванию ресниц, подготовка к бровям, подготовка к макияжу, студия красоты Коммунарка' },
    { property: 'og:title', content: 'Как подготовиться к визиту в студию красоты' },
    { property: 'og:description', content: 'Короткий чек-лист клиента перед процедурами в студии красоты.' },
    { property: 'og:url', content: 'https://kamshukbeauty.ru/blog/kak-podgotovitsya-k-vizitu-v-studiyu' },
    { property: 'og:type', content: 'article' },
  ],
  link: [{ rel: 'canonical', href: 'https://kamshukbeauty.ru/blog/kak-podgotovitsya-k-vizitu-v-studiyu' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Как подготовиться к визиту в студию красоты: чек-лист клиента',
      author: { '@type': 'Person', name: 'Анастасия Камшук' },
      publisher: { '@type': 'Organization', name: 'Камшук Бьюти', url: 'https://kamshukbeauty.ru' },
      datePublished: '2026-07-18',
      image: 'https://kamshukbeauty.ru/images/studio/1.jpg',
      mainEntityOfPage: 'https://kamshukbeauty.ru/blog/kak-podgotovitsya-k-vizitu-v-studiyu',
    }),
  }],
})

const checklist = [
  {
    title: 'Перед маникюром и педикюром',
    text: 'Не снимайте покрытие самостоятельно и не обрезайте кутикулу дома. Если есть трещина, скол или болезненные ощущения, предупредите мастера заранее.',
  },
  {
    title: 'Перед бровями',
    text: 'За сутки лучше не делать пилинги и не использовать агрессивные кислоты в зоне бровей. Если вы недавно окрашивали волосы или принимали препараты, скажите об этом мастеру.',
  },
  {
    title: 'Перед ресницами',
    text: 'Приходите без туши и жирного крема вокруг глаз. Так мастер быстрее подготовит ресницы, а сцепка материала будет стабильнее.',
  },
  {
    title: 'Перед макияжем',
    text: 'Накануне не экспериментируйте с новым уходом. Увлажните кожу привычным средством, выспитесь и возьмите референсы образа, который вам нравится.',
  },
]
</script>

<template>
  <div class="pt-20">
    <article class="py-20 bg-white">
      <div class="container">
        <div class="max-w-3xl mx-auto">
          <Breadcrumb :items="[{ label: 'Блог', href: '/blog' }, { label: 'Подготовка к визиту' }]" />

          <header class="mb-12">
            <div class="flex flex-wrap items-center gap-3 mb-6">
              <span class="label text-[10px] px-3 py-1 rounded-full text-[#E91E8C]" style="background: rgba(76,117,163,0.12)">Советы</span>
              <span class="body text-xs text-[#B08898]">18 июля 2026 · Анастасия Камшук</span>
            </div>
            <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-6 leading-tight">
              Как подготовиться к визиту в студию красоты
            </h1>
            <p class="body text-xl text-[#6B4F5A] leading-relaxed">
              Небольшая подготовка помогает мастеру работать точнее, а вам чувствовать себя спокойнее во время процедуры.
            </p>
          </header>

          <div class="aspect-[16/9] overflow-hidden rounded-3xl mb-12" style="box-shadow: 0 16px 60px rgba(233,30,140,0.1)">
            <img src="/images/studio/1.jpg" alt="Интерьер студии Камшук Бьюти" class="w-full h-full object-cover" width="900" height="506" loading="lazy" />
          </div>

          <div class="space-y-4">
            <section
              v-for="(item, idx) in checklist"
              :key="item.title"
              class="flex gap-5 p-6 rounded-2xl transition-all duration-300 hover:shadow-md"
              style="border: 1.5px solid rgba(233,30,140,0.1); background: #FFFFFF"
            >
              <div class="ios-icon ios-pink shrink-0" style="width:48px;height:48px;border-radius:14px;font-size:1.1rem;display:flex;align-items:center;justify-content:center">
                <span class="headline text-lg text-white">{{ idx + 1 }}</span>
              </div>
              <div>
                <h2 class="headline text-base text-[#1A1A2E] mb-2">{{ item.title }}</h2>
                <p class="body text-sm text-[#6B4F5A] leading-relaxed">{{ item.text }}</p>
              </div>
            </section>
          </div>

          <div class="mt-12 rounded-3xl p-6 sm:p-8" style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 100%); border: 1px solid rgba(233,30,140,0.12)">
            <h2 class="headline text-xl text-[#1A1A2E] mb-3">Что взять с собой</h2>
            <p class="body text-sm text-[#6B4F5A] leading-relaxed">
              Возьмите удобное время с запасом, примеры желаемого результата и хорошее настроение. Если есть аллергии, чувствительность кожи или важное событие после процедуры, скажите об этом до начала работы.
            </p>
          </div>

          <div class="mt-16 glass-pink rounded-3xl p-6 sm:p-8 text-center">
            <p class="headline text-xl text-[#1A1A2E] mb-2">Запланируйте визит заранее</p>
            <p class="body text-sm text-[#6B4F5A] mb-6">Онлайн-запись открыта ежедневно · Коммунарка, ул. Александры Монаховой 43/1</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
              <NuxtLink to="/blog" class="btn-outline-pink inline-block text-center">Все статьи блога</NuxtLink>
            </div>
          </div>

          <div class="mt-10 pt-8 border-t border-[#F5F5F5]">
            <NuxtLink to="/blog" class="body text-sm text-[#E91E8C] hover:underline">← Все статьи блога</NuxtLink>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

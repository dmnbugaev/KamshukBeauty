<script setup lang="ts">
useHead({
  title: 'Перманентный макияж бровей: всё, что нужно знать до процедуры | Камшук Бьюти',
  meta: [
    { name: 'description', content: 'Что такое пудровые брови и перманентный макияж, как проходит процедура, сколько длится заживление и как ухаживать после. Студия Камшук Бьюти, Коммунарка, Москва.' },
    { name: 'keywords', content: 'перманентный макияж бровей что это, пудровые брови, перманентный макияж противопоказания, заживление перманентного макияжа, перманентный макияж Коммунарка' },
    { property: 'og:title', content: 'Перманентный макияж бровей: что это и как подготовиться' },
    { property: 'og:description', content: 'Всё о пудровых бровях и перманентном макияже — от процедуры до заживления и ухода.' },
    { property: 'og:url', content: 'https://kamshukbeauty.ru/blog/permanentnyj-makiyazh-brovej' },
    { property: 'og:type', content: 'article' },
  ],
  link: [{ rel: 'canonical', href: 'https://kamshukbeauty.ru/blog/permanentnyj-makiyazh-brovej' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Перманентный макияж бровей: всё, что нужно знать до процедуры',
      author: { '@type': 'Person', name: 'Анастасия Камшук' },
      publisher: { '@type': 'Organization', name: 'Камшук Бьюти', url: 'https://kamshukbeauty.ru' },
      datePublished: '2026-04-14',
      image: 'https://kamshukbeauty.ru/images/4_foto/make.jpg',
      mainEntityOfPage: 'https://kamshukbeauty.ru/blog/permanentnyj-makiyazh-brovej',
    }),
  }],
})
</script>

<template>
  <div class="pt-20">
    <article class="py-20 bg-white">
      <div class="container px-6 lg:px-12">
        <div class="max-w-3xl mx-auto">
          <Breadcrumb :items="[{ label: 'Блог', href: '/blog' }, { label: 'Перманентный макияж бровей' }]" />

          <header class="mb-12">
            <div class="flex items-center gap-3 mb-6">
              <span class="label text-[10px] px-3 py-1 rounded-full text-[#E91E8C]" style="background: rgba(244,141,180,0.15)">Перманент</span>
              <span class="body text-xs text-[#B08898]">14 апреля 2026 · Анастасия Камшук</span>
            </div>
            <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-6 leading-tight">
              Перманентный макияж бровей: всё, что нужно знать до процедуры
            </h1>
            <p class="body text-xl text-[#6B4F5A] leading-relaxed">
              Пудровые брови, которые держатся 1–3 года. Разбираем, как проходит процедура, что ожидать от заживления и кому это подойдёт.
            </p>
          </header>

          <div class="aspect-[16/9] overflow-hidden rounded-3xl mb-12" style="box-shadow: 0 16px 60px rgba(233,30,140,0.1)">
            <img src="/images/4_foto/make.jpg" alt="Перманентный макияж — Камшук Бьюти" class="w-full h-full object-cover" width="900" height="506" loading="lazy" />
          </div>

          <div class="space-y-8 body text-base text-[#424242] leading-relaxed">
            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Что такое перманентный макияж бровей</h2>
              <p>Перманентный макияж (ПМ) — это введение пигмента в верхний слой кожи с помощью специального аппарата. Результат выглядит как аккуратный, постоянный макияж, который не смывается водой и не требует ежедневного нанесения. Держится <strong>1–3 года</strong> в зависимости от типа кожи и ухода.</p>
            </section>

            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Техники перманентного макияжа бровей</h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="t in [
                  { name: 'Пудровые брови', desc: 'Имитируют эффект растушёванной тени. Мягкие, естественные, подходят любому типу кожи. Самая популярная техника.', oldPrice: '16 000 ₽', price: '11 200 ₽' },
                  { name: 'Комбинированная техника', desc: 'Волосковые штрихи + пудровая растушёвка. Максимально натуральный и объёмный результат.', oldPrice: '', price: 'по запросу' },
                ]" :key="t.name" class="glass-pink rounded-2xl p-5">
                  <div class="flex justify-between mb-2">
                    <h3 class="headline text-base text-[#1A1A2E]">{{ t.name }}</h3>
                    <PromoPrice v-if="t.oldPrice" :old-price="t.oldPrice" :new-price="t.price" size="sm" />
                    <span v-else class="label text-[10px] text-[#E91E8C]">{{ t.price }}</span>
                  </div>
                  <p class="body text-sm text-[#6B4F5A]">{{ t.desc }}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Как проходит процедура</h2>
              <ol class="space-y-3 list-none">
                <li v-for="(s, i) in [
                  'Консультация: мастер обсуждает желаемый результат, цвет пигмента и форму.',
                  'Разметка: карандашом рисуется форма, которую вы одобряете.',
                  'Нанесение анестезирующего крема — процедура практически безболезненна.',
                  'Работа аппаратом: введение пигмента по контуру. Занимает 1,5–2 часа.',
                  'Первичная обработка и рекомендации по уходу.',
                ]" :key="i" class="flex gap-4 p-4 rounded-xl" style="background: rgba(233,30,140,0.04); border: 1px solid rgba(233,30,140,0.1)">
                  <span class="headline text-lg text-[#E91E8C] shrink-0">{{ i + 1 }}.</span>
                  <p class="body text-sm text-[#424242]">{{ s }}</p>
                </li>
              </ol>
            </section>

            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Заживление: чего ожидать</h2>
              <p>В первые 3–5 дней брови выглядят темнее и ярче — это норма. Затем начинается шелушение, под которым открывается более мягкий и естественный цвет. Полное заживление — 4–6 недель. Через месяц делается коррекция для выравнивания цвета и формы.</p>
            </section>

            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Противопоказания</h2>
              <ul class="space-y-1">
                <li v-for="c in ['Беременность и кормление грудью', 'Диабет', 'Склонность к келоидным рубцам', 'Приём разжижающих кровь препаратов', 'Обострение кожных заболеваний']" :key="c" class="flex gap-2 body text-sm text-[#424242]">
                  <span class="text-[#E91E8C]">—</span> {{ c }}
                </li>
              </ul>
              <p class="mt-4">При любых сомнениях проконсультируйтесь с врачом перед процедурой.</p>
            </section>
          </div>

          <div class="mt-16 glass-pink rounded-3xl p-8 text-center">
            <p class="headline text-xl text-[#1A1A2E] mb-2">Запишитесь на перманентный макияж</p>
            <p class="body text-sm text-[#6B4F5A] mb-6">
              Пудровые брови
              <span class="line-through text-[#B08898]">16 000 ₽</span>
              <span class="label text-[#E91E8C]">11 200 ₽</span>
              · Радужное предложение до конца июля
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
              <NuxtLink to="/#перманентный-макияж" class="btn-outline-pink inline-block text-center">Прайс-лист →</NuxtLink>
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

<script setup lang="ts">
useHead({
  title: 'Архитектура бровей: что это такое и чем отличается от коррекции | Камшук Бьюти',
  meta: [
    { name: 'description', content: 'Объясняем разницу между архитектурой и коррекцией бровей, как подбирается форма под тип лица и почему правильные брови меняют весь образ. Студия Камшук Бьюти, Коммунарка.' },
    { name: 'keywords', content: 'архитектура бровей что это, архитектура бровей отличие от коррекции, форма бровей под тип лица, как делают архитектуру бровей' },
    { property: 'og:title', content: 'Архитектура бровей: что это такое — объясняем просто' },
    { property: 'og:description', content: 'Чем архитектура бровей отличается от обычной коррекции и как подобрать идеальную форму.' },
    { property: 'og:url', content: 'https://kamshukbeauty.ru/blog/arkhitektura-brovej' },
    { property: 'og:type', content: 'article' },
  ],
  link: [{ rel: 'canonical', href: 'https://kamshukbeauty.ru/blog/arkhitektura-brovej' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Архитектура бровей: что это такое и чем отличается от коррекции',
      author: { '@type': 'Person', name: 'Анастасия Камшук' },
      publisher: { '@type': 'Organization', name: 'Камшук Бьюти', url: 'https://kamshukbeauty.ru' },
      datePublished: '2026-04-28',
      image: 'https://kamshukbeauty.ru/images/4_foto/resnici_i_brovi.jpg',
      mainEntityOfPage: 'https://kamshukbeauty.ru/blog/arkhitektura-brovej',
    }),
  }],
})
</script>

<template>
  <div class="pt-20">
    <article class="py-20 bg-white">
      <div class="container px-6 lg:px-12">
        <div class="max-w-3xl mx-auto">
          <Breadcrumb :items="[{ label: 'Блог', href: '/blog' }, { label: 'Архитектура бровей' }]" />

          <header class="mb-12">
            <div class="flex items-center gap-3 mb-6">
              <span class="label text-[10px] px-3 py-1 rounded-full text-[#E91E8C]" style="background: rgba(200,164,65,0.12)">Брови</span>
              <span class="body text-xs text-[#B08898]">28 апреля 2026 · Анастасия Камшук</span>
            </div>
            <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-6 leading-tight">
              Архитектура бровей: что это такое и чем отличается от коррекции
            </h1>
            <p class="body text-xl text-[#6B4F5A] leading-relaxed">
              Правильная форма бровей способна визуально изменить черты лица. Разбираемся, что входит в архитектуру и почему это не то же самое, что простая коррекция.
            </p>
          </header>

          <div class="aspect-[16/9] overflow-hidden rounded-3xl mb-12" style="box-shadow: 0 16px 60px rgba(233,30,140,0.1)">
            <img src="/images/4_foto/resnici_i_brovi.jpg" alt="Архитектура бровей — Камшук Бьюти" class="w-full h-full object-cover" width="900" height="506" loading="lazy" />
          </div>

          <div class="space-y-8 body text-base text-[#424242] leading-relaxed">
            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Что такое архитектура бровей</h2>
              <p>Архитектура бровей — это комплексная процедура, которая включает несколько этапов: определение идеальной формы под ваш тип лица и черты, разметку карандашом или ниткой, удаление лишних волосков (воском, пинцетом или нитью) и окрашивание хной или краской для придания цвета и акцента.</p>
              <p class="mt-4">Результат — чёткая, симметричная форма, которая гармонирует с вашим лицом и подчёркивает взгляд.</p>
            </section>

            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Чем архитектура отличается от коррекции</h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="glass-pink rounded-2xl p-5">
                  <h3 class="headline text-base text-[#E91E8C] mb-3">Коррекция бровей</h3>
                  <ul class="body text-sm text-[#6B4F5A] space-y-2">
                    <li>✓ Поддержание уже заданной формы</li>
                    <li>✓ Удаление отросших волосков</li>
                    <li>✓ Быстрее и дешевле</li>
                    <li>✓ Подходит как процедура обслуживания</li>
                  </ul>
                </div>
                <div class="rounded-2xl p-5" style="background: rgba(233,30,140,0.06); border: 1.5px solid rgba(233,30,140,0.2)">
                  <h3 class="headline text-base text-[#E91E8C] mb-3">Архитектура бровей</h3>
                  <ul class="body text-sm text-[#6B4F5A] space-y-2">
                    <li>✓ Создание новой формы с нуля</li>
                    <li>✓ Разметка и проработка симметрии</li>
                    <li>✓ Окрашивание в цвет</li>
                    <li>✓ Полное преображение образа</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Как подбирается форма под тип лица</h2>
              <p>Мастер ориентируется на пропорции лица: расстояние между глазами, высоту лба, форму скул и подбородка. Например:</p>
              <ul class="mt-4 space-y-2 list-none">
                <li v-for="t in [
                  { face: 'Овальное лицо', brow: 'Практически любая форма — природная слегка изогнутая бровь' },
                  { face: 'Круглое лицо', brow: 'Приподнятый изгиб — визуально вытягивает и добавляет чёткости' },
                  { face: 'Квадратное лицо', brow: 'Мягкая дуга смягчает угловатые черты' },
                  { face: 'Вытянутое лицо', brow: 'Прямая горизонтальная бровь — визуально расширяет' },
                ]" :key="t.face" class="flex gap-3 items-start">
                  <span class="text-[#E91E8C] shrink-0 mt-0.5">●</span>
                  <p class="body text-sm text-[#424242]"><strong>{{ t.face }}:</strong> {{ t.brow }}</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Сколько держится результат</h2>
              <p>Форма бровей сохраняется 4–6 недель — именно столько времени нужно, чтобы волоски отросли и нарушили силуэт. Окрашивание хной держится 2–3 недели. Рекомендуем регулярную коррекцию раз в месяц, чтобы поддерживать идеальный результат.</p>
            </section>
          </div>

          <div class="mt-16 glass-pink rounded-3xl p-8 text-center">
            <p class="headline text-xl text-[#1A1A2E] mb-2">Запишитесь на архитектуру бровей</p>
            <p class="body text-sm text-[#6B4F5A] mb-6">Коммунарка · Ежедневно 10:00–22:00 · Радужное предложение −30% до конца июля</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
              <NuxtLink to="/brovi" class="btn-outline-pink inline-block text-center">Брови в Коммунарке →</NuxtLink>
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

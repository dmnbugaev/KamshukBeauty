<script setup lang="ts">
useHead({
  title: 'Наращивание ресниц: виды техник и правила ухода | Камшук Бьюти',
  meta: [
    { name: 'description', content: 'Классика, 2D, объём — чем отличаются техники наращивания ресниц и как выбрать подходящую. Правила ухода после процедуры от мастера Камшук Бьюти, Коммунарка.' },
    { name: 'keywords', content: 'наращивание ресниц виды, какое наращивание ресниц лучше, классика объём наращивание, уход за наращёнными ресницами' },
    { property: 'og:title', content: 'Наращивание ресниц: виды и уход — советы мастера' },
    { property: 'og:description', content: 'Разбираемся в техниках наращивания ресниц и правилах ухода после процедуры.' },
    { property: 'og:image', content: 'https://kamshukbeauty.ru/images/4_foto/resnici_i_brovi.jpg' },
    { property: 'og:url', content: 'https://kamshukbeauty.ru/blog/naraschivanie-resnic-vidy-i-uhod' },
    { property: 'og:type', content: 'article' },
  ],
  link: [{ rel: 'canonical', href: 'https://kamshukbeauty.ru/blog/naraschivanie-resnic-vidy-i-uhod' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Наращивание ресниц: виды техник и правила ухода',
      author: { '@type': 'Person', name: 'Анастасия Камшук' },
      publisher: { '@type': 'Organization', name: 'Камшук Бьюти', url: 'https://kamshukbeauty.ru' },
      datePublished: '2026-05-05',
      image: 'https://kamshukbeauty.ru/images/4_foto/resnici_i_brovi.jpg',
      mainEntityOfPage: 'https://kamshukbeauty.ru/blog/naraschivanie-resnic-vidy-i-uhod',
    }),
  }],
})
</script>

<template>
  <div class="pt-20">
    <article class="py-20 bg-white">
      <div class="container">
        <div class="max-w-3xl mx-auto">
          <Breadcrumb :items="[{ label: 'Блог', href: '/blog' }, { label: 'Виды наращивания ресниц' }]" />

          <header class="mb-12">
            <div class="flex items-center gap-3 mb-6">
              <span class="label text-[10px] px-3 py-1 rounded-full text-[#E91E8C]" style="background: rgba(126,207,222,0.15)">Ресницы</span>
              <span class="body text-xs text-[#B08898]">5 мая 2026 · Анастасия Камшук</span>
            </div>
            <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-6 leading-tight">
              Наращивание ресниц: виды техник и правила ухода
            </h1>
            <p class="body text-xl text-[#6B4F5A] leading-relaxed">
              Классика, 2D или мега-объём — разбираемся, что подойдёт именно вам и как сохранить результат надолго.
            </p>
          </header>

          <div class="aspect-[16/9] overflow-hidden rounded-3xl mb-12" style="box-shadow: 0 16px 60px rgba(233,30,140,0.1)">
            <img src="/images/4_foto/resnici_i_brovi.jpg" alt="Наращивание ресниц — Камшук Бьюти" class="w-full h-full object-cover" width="900" height="506" loading="lazy" />
          </div>

          <div class="space-y-8 body text-base text-[#424242] leading-relaxed">
            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Основные техники наращивания</h2>
              <div class="grid md:grid-cols-3 gap-4">
                <div v-for="t in [
                  { name: 'Классика (1:1)', desc: 'На каждую натуральную ресницу крепится одна искусственная. Естественный результат, подходит для повседневного образа.', tag: 'Природность' },
                  { name: '2D / Лёгкий объём', desc: '2 искусственных ресницы на одну натуральную. Больше пышности при сохранении лёгкости. Универсальный вариант.', tag: 'Баланс' },
                  { name: 'Мега-объём (5D+)', desc: 'От 5 ресниц на одну натуральную. Эффектно, выразительно — для тех, кто хочет максимальную густоту.', tag: 'Максимум' },
                ]" :key="t.name" class="glass-pink rounded-2xl p-5">
                  <span class="label text-[10px] text-[#E91E8C] mb-2 block">{{ t.tag }}</span>
                  <h3 class="headline text-base text-[#1A1A2E] mb-2">{{ t.name }}</h3>
                  <p class="body text-sm text-[#6B4F5A]">{{ t.desc }}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Как выбрать технику</h2>
              <p>Если вы впервые наращиваете ресницы — начните с классики или лёгкого 2D. Это позволит понять, насколько комфортно вам с наращёнными ресницами, и не перегрузить натуральные.</p>
              <p class="mt-4">Мастер на консультации оценит состояние и густоту ваших натуральных ресниц, тип лица и желаемый результат — и предложит оптимальный вариант.</p>
            </section>

            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Сколько держится наращивание</h2>
              <p>В среднем 3–4 недели. За это время часть ресниц выпадает вместе с натуральными (естественный цикл обновления), и результат теряет пышность. Именно тогда нужна <strong>коррекция</strong> — заполнение пустых мест. Это быстрее и дешевле полного наращивания.</p>
            </section>

            <section>
              <h2 class="headline text-2xl text-[#1A1A2E] mb-4">Правила ухода после наращивания</h2>
              <ol class="space-y-3 list-none">
                <li v-for="(r, i) in [
                  'Не мочите ресницы первые 24 часа после процедуры — клей должен полностью полимеризоваться.',
                  'Не трите глаза руками. Промывайте аккуратно, промокая, а не растирая.',
                  'Спите на спине или боку, стараясь не мять ресницы о подушку.',
                  'Используйте масло для ресниц — наносите только на кончики натуральных ресниц, избегая зоны крепления.',
                  'Не используйте жирные средства для снятия макияжа — они разрушают клей.',
                  'Расчёсывайте ресницы щёточкой каждое утро — это сохраняет форму и опрятный вид.',
                ]" :key="i" class="flex gap-4 p-4 rounded-xl" style="background: rgba(233,30,140,0.04); border: 1px solid rgba(233,30,140,0.1)">
                  <span class="headline text-lg text-[#E91E8C] shrink-0">{{ i + 1 }}.</span>
                  <p class="body text-sm text-[#424242]">{{ r }}</p>
                </li>
              </ol>
            </section>
          </div>

          <div class="mt-16 glass-pink rounded-3xl p-6 sm:p-8 text-center">
            <p class="headline text-xl text-[#1A1A2E] mb-2">Запишитесь на наращивание ресниц</p>
            <p class="body text-sm text-[#6B4F5A] mb-6">Коммунарка, ул. Монаховой 43/1 · Ежедневно 10:00–22:00 · Радужное предложение −30% до конца июля</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
              <NuxtLink to="/naraschivanie-resnic" class="btn-outline-pink inline-block text-center">Наращивание ресниц →</NuxtLink>
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

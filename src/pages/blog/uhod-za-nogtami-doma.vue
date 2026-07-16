<script setup lang="ts">
useHead({
  title: '7 правил ухода за ногтями дома — советы мастера | Камшук Бьюти',
  meta: [
    { name: 'description', content: 'Простые привычки, которые сохранят ногтевую пластину здоровой и продлят жизнь маникюру до 4 недель. Советы от мастера Анастасии Камшук, студия Камшук Бьюти, Коммунарка.' },
    { name: 'keywords', content: 'уход за ногтями дома, как ухаживать за ногтями дома, уход за ногтями советы мастера, продлить маникюр, здоровые ногти советы' },
    { property: 'og:title', content: '7 правил ухода за ногтями дома — советы от мастера' },
    { property: 'og:description', content: 'Простые привычки для здоровых ногтей и долговечного маникюра — советы мастера Камшук Бьюти.' },
    { property: 'og:url', content: 'https://kamshukbeauty.ru/blog/uhod-za-nogtami-doma' },
    { property: 'og:type', content: 'article' },
  ],
  link: [{ rel: 'canonical', href: 'https://kamshukbeauty.ru/blog/uhod-za-nogtami-doma' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: '7 правил ухода за ногтями дома — советы мастера',
      author: { '@type': 'Person', name: 'Анастасия Камшук' },
      publisher: { '@type': 'Organization', name: 'Камшук Бьюти', url: 'https://kamshukbeauty.ru' },
      datePublished: '2026-04-20',
      image: 'https://kamshukbeauty.ru/images/new_foto/20260511_232100.jpg',
      mainEntityOfPage: 'https://kamshukbeauty.ru/blog/uhod-za-nogtami-doma',
    }),
  }],
})

const tips = [
  { n: 1, title: 'Увлажняйте кутикулу ежедневно', text: 'Масло для кутикулы — незаменимый помощник. Наносите несколько капель перед сном и массируйте вокруг ногтя. Это предотвращает заусенцы, питает кожу и дополнительно защищает краю покрытия.' },
  { n: 2, title: 'Работайте с химией в перчатках', text: 'Хлор, щёлочь и моющие средства разрушают ногтевую пластину и нарушают адгезию покрытия. Даже одно мытьё посуды без перчаток может подтолкнуть маникюр к преждевременному отслоению.' },
  { n: 3, title: 'Не используйте ногти как инструмент', text: 'Открывать банки, отдирать наклейки, скрести поверхности — всё это создаёт боковое давление на ноготь и провоцирует сколы. Используйте специальные предметы.' },
  { n: 4, title: 'Пейте достаточно воды', text: 'Обезвоживание организма моментально отражается на ногтях — они становятся хрупкими и слоящимися. 1,5–2 литра воды в день поддерживают пластину плотной.' },
  { n: 5, title: 'Принимайте витамины для ногтей', text: 'Биотин (В7), кремний, кальций и цинк особенно важны для здоровья ногтей. Проконсультируйтесь с врачом и при необходимости пропейте курс витаминов.' },
  { n: 6, title: 'Не обрезайте кутикулу дома самостоятельно', text: 'Неаккуратная обрезка кутикулы повреждает защитный барьер ногтя и открывает путь для инфекций. Доверьте эту задачу профессиональному мастеру.' },
  { n: 7, title: 'Приходите на маникюр вовремя', text: 'Не затягивайте визит дольше 4–5 недель. Отросший ноготь создаёт рычаговое воздействие на покрытие, что приводит к сколам и надломам пластины.' },
]
</script>

<template>
  <div class="pt-20">
    <article class="py-20 bg-white">
      <div class="container px-6 lg:px-12">
        <div class="max-w-3xl mx-auto">
          <Breadcrumb :items="[{ label: 'Блог', href: '/blog' }, { label: 'Уход за ногтями дома' }]" />

          <header class="mb-12">
            <div class="flex items-center gap-3 mb-6">
              <span class="label text-[10px] px-3 py-1 rounded-full text-[#E91E8C]" style="background: rgba(233,30,140,0.08)">Маникюр</span>
              <span class="body text-xs text-[#B08898]">20 апреля 2026 · Анастасия Камшук</span>
            </div>
            <h1 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-6 leading-tight">
              7 правил ухода за ногтями дома — советы мастера
            </h1>
            <p class="body text-xl text-[#6B4F5A] leading-relaxed">
              Маникюр держится дольше, а ногти выглядят здоровее, если соблюдать несколько простых привычек между визитами.
            </p>
          </header>

          <div class="aspect-[16/9] overflow-hidden rounded-3xl mb-12" style="box-shadow: 0 16px 60px rgba(233,30,140,0.1)">
            <img src="/images/new_foto/20260511_232100.jpg" alt="Студия Камшук Бьюти — уход за ногтями" class="w-full h-full object-cover" width="900" height="506" loading="lazy" />
          </div>

          <div class="space-y-4">
            <div
              v-for="tip in tips" :key="tip.n"
              class="flex gap-5 p-6 rounded-2xl transition-all duration-300 hover:shadow-md"
              style="border: 1.5px solid rgba(233,30,140,0.1); background: #FFFFFF"
            >
              <div class="ios-icon ios-pink shrink-0" style="width:48px;height:48px;border-radius:14px;font-size:1.1rem;display:flex;align-items:center;justify-content:center">
                <span class="headline text-lg text-white">{{ tip.n }}</span>
              </div>
              <div>
                <h2 class="headline text-base text-[#1A1A2E] mb-2">{{ tip.title }}</h2>
                <p class="body text-sm text-[#6B4F5A] leading-relaxed">{{ tip.text }}</p>
              </div>
            </div>
          </div>

          <div class="mt-16 glass-pink rounded-3xl p-8 text-center">
            <p class="headline text-xl text-[#1A1A2E] mb-2">Профессиональный маникюр в Коммунарке</p>
            <p class="body text-sm text-[#6B4F5A] mb-6">Мастер с 9-летним опытом · Радужное предложение −30% до конца июля</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://n1407035.yclients.com/company/1274992/personal/select-services?o=" target="_blank" rel="noopener noreferrer" class="btn-pink inline-block text-center">Записаться онлайн</a>
              <NuxtLink to="/manikyur" class="btn-outline-pink inline-block text-center">Маникюр в Коммунарке →</NuxtLink>
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

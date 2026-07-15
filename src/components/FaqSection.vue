<script setup lang="ts">
const faqs = [
  {
    q: 'Сколько держится маникюр гель-лак?',
    a: 'В среднем 3–4 недели. Многие гостьи приходят раз в месяц — покрытие держится от визита до визита без сколов и заусенец.',
  },
  {
    q: 'Больно ли наращивание ресниц?',
    a: 'Нет, процедура абсолютно безболезненна. Вы лежите с закрытыми глазами, а мастер аккуратно прикрепляет каждую ресничку. Многие гостьи засыпают во время сеанса.',
  },
  {
    q: 'Нужна ли предварительная запись?',
    a: 'Да, рекомендуем записываться заранее онлайн или по телефону — мастера заняты, и свободные слоты разбирают быстро. Запись онлайн занимает 2 минуты.',
  },
  {
    q: 'Есть ли скидка при первом визите?',
    a: 'Да! Скидка −15% на любую услугу при первом посещении студии. Просто упомяните при записи, что вы у нас впервые.',
  },
  {
    q: 'Работаете ли в выходные?',
    a: 'Работаем ежедневно без выходных, с 10:00 до 22:00 — удобно записаться в любой день, включая субботу и воскресенье.',
  },
  {
    q: 'Какие материалы используете?',
    a: 'Только сертифицированные профессиональные материалы: гель-лаки, клей для ресниц, краски для бровей — всё проверено и безопасно для кожи и ногтей.',
  },
  {
    q: 'Есть ли парковка рядом?',
    a: 'Да, рядом со зданием SoiSoul есть бесплатная парковка. Студия находится на 1 этаже — удобный вход прямо с улицы.',
  },
  {
    q: 'Можно ли прийти с ребёнком?',
    a: 'Конечно! В студии есть уютная зона ожидания с мягким диваном. Ребёнок может подождать рядом с мамой в комфортной атмосфере.',
  },
]

const open = ref<number | null>(null)

const toggle = (i: number) => {
  open.value = open.value === i ? null : i
}
</script>

<template>
  <section class="py-28 bg-white">
    <div class="container px-6 lg:px-12">

      <!-- Заголовок -->
      <div class="max-w-xl mb-16">
        <div class="section-label mb-5">FAQ</div>
        <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-4">
          Частые вопросы
        </h2>
        <p class="body text-base text-[#B08898]">
          Если не нашли ответ — напишите нам в мессенджер, ответим за несколько минут
        </p>
      </div>

      <!-- Аккордеон -->
      <div class="max-w-3xl space-y-3">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="rounded-2xl overflow-hidden transition-all duration-300"
          :style="open === i
            ? 'border: 1.5px solid rgba(233,30,140,0.25); background: linear-gradient(135deg, #FFF4F9 0%, #FFFFFF 100%)'
            : 'border: 1.5px solid rgba(233,30,140,0.1); background: #FFFFFF'"
        >
          <!-- Вопрос -->
          <button
            class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            :aria-expanded="open === i"
            @click="toggle(i)"
          >
            <span class="headline text-base text-[#1A1A2E]">{{ faq.q }}</span>
            <span
              class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              :style="open === i
                ? 'background: linear-gradient(135deg, #E91E8C, #C2185B); transform: rotate(45deg)'
                : 'background: rgba(233,30,140,0.08)'"
            >
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none"
                :stroke="open === i ? '#fff' : '#E91E8C'"
                stroke-width="2.5" stroke-linecap="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>

          <!-- Ответ -->
          <Transition name="faq">
            <div v-if="open === i" class="px-6 pb-5">
              <div class="pink-divider mb-4" />
              <p class="body text-sm text-[#6B4F5A] leading-relaxed">{{ faq.a }}</p>
            </div>
          </Transition>
        </div>
      </div>

      <!-- CTA под FAQ -->
      <div class="mt-12 flex flex-col sm:flex-row gap-4 items-start">
        <a
          href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
          target="_blank"
          rel="noopener noreferrer"
          class="btn-pink inline-block"
        >
          Записаться онлайн
        </a>
        <a
          href="https://max.ru/u/f9LHodD0cOJhZWcjFtzBOFNlcS0w2RVemO55MmCDgD_nHgsPEPAhlJp3i2M"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline-pink inline-block"
        >
          Задать вопрос в MAX
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  max-height: 0;
}
.faq-enter-to,
.faq-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>

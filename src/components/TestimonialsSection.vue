<script setup lang="ts">
const testimonials = [
  { text: 'Почти год хожу на маникюр и педикюр к Анастасии, ни на какого другого мастера её не променяю 🥰 Её работа — совершенство, блаженство, бальзам для души 🔥 Покрытие держится от визита до визита, отношение заботливое, внимательное, подход индивидуальный. Спасибо, Настя, за то, что ты есть, моя фея 🧚', author: 'Татьяна' },
  { text: 'Очень приятная атмосфера, чисто и уютно. Делаю маникюр, педикюр, уход и покрытие у Анастасии. Очень быстро и аккуратно. Профессиональный подход. Результатом очень довольна. Рекомендую!', author: 'Елена' },
  { text: 'Хожу в данную студию на маникюр с ноября 2024 к мастеру Анастасии. Качеством маникюра всегда довольна. Хватает на месяц носки. Во время маникюра не испытываю никакого дискомфорта — Анастасия очень бережно работает с руками и ногтями.', author: 'Полина' },
  { text: 'Замечательный салон! Ходила к мастеру Марие на экстрим-наращивание, всё на высшем уровне! Атмосфера в салоне замечательная, всё очень красиво, интерьер сделан с душой. Очень советую это место.', author: 'Стася' },
  { text: 'Была сегодня на полном комплексе маникюра и смарт-педикюре у мастера Анастасии! Я в полном восторге! Мастер работает очень аккуратно, учитывает все пожелания и помогает в выборе цвета.', author: 'Валерия' },
  { text: 'Спасибо, что вы есть 🤗 Сидишь в кабинете и прямо видишь и чувствуешь, что это пространство создано с огромной любовью и заботой 🥰 Заряжаешься позитивом на несколько дней.', author: 'Татьяна' },
  { text: 'Была сегодня у мастера Анастасии на смарт-педикюре и маникюре. Я очень довольна! Мастер работает очень аккуратно, большая палитра лаков. Однозначно приду ещё!', author: 'Олеся' },
  { text: 'Первый раз была в студии на реснички и ноготочки. Осталась в полном восторге от качества услуг и сервиса. Рекомендую!', author: 'Светлана' },
  { text: 'Хожу к Анастасии не первый раз и всегда замечательно, очень всё нравится. Работы безумно аккуратные и красивые!', author: 'Алина' },
  { text: 'Анастасия — замечательный мастер! Всегда внимательно выслушает и воплотит ваши мечты в жизнь по высшему разряду!', author: 'Елена' },
  { text: 'Хожу к Анастасии второй год, и сказать, что довольна своим мастером — ничего не сказать. Хотите знать, что такое клиентоориентированность — вам сюда!', author: 'Татьяна' },
  { text: 'Хожу к Анастасии не первый раз и каждый раз остаюсь в полном восторге от результата! Мастер очень милая и внимательная!', author: 'Ульяна' },
  { text: 'Хожу к Анастасии второй год. Забота, внимательность, бережное отношение, высокое качество работы — всё на высшем уровне.', author: 'Татьяна' },
]

const current = ref(0)
const paused = ref(false)
const reducedMotion = ref(false)
const interacting = ref(false)
let timer: ReturnType<typeof setInterval> | null = null
let motionQuery: MediaQueryList | null = null

const prev = () => { current.value = (current.value - 1 + testimonials.length) % testimonials.length }
const next = () => { current.value = (current.value + 1) % testimonials.length }

const resetTimer = () => {
  paused.value = true
}

const updateMotion = () => { reducedMotion.value = !!motionQuery?.matches }
onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  updateMotion()
  motionQuery.addEventListener('change', updateMotion)
  timer = setInterval(() => {
    if (!paused.value && !reducedMotion.value && !interacting.value && !document.hidden) next()
  }, 5500)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
  motionQuery?.removeEventListener('change', updateMotion)
})
</script>

<template>
  <section class="py-28 relative overflow-hidden bg-white">
    <!-- Лёгкие розовые пятна -->
    <div class="absolute top-20 left-10 w-40 h-40 rounded-full blur-3xl opacity-50"
      style="background: rgba(244,141,180,0.3)" />
    <div class="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-3xl opacity-35"
      style="background: rgba(233,30,140,0.12)" />

    <div class="container relative z-10">

      <!-- Заголовок -->
      <div class="text-center mb-16">
        <div class="section-label justify-center mb-5">Отзывы</div>
        <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E]">Говорят наши гости</h2>
      </div>

      <!-- Карточка отзыва -->
      <div class="max-w-3xl mx-auto" @mouseenter="interacting = true" @mouseleave="interacting = false" @focusin="paused = true">
        <!-- Навигация -->
        <div class="relative">
          <button
            class="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-pink flex items-center justify-center text-[#C2185B] hover:shadow-[0_4px_20px_rgba(233,30,140,0.25)] transition-all duration-300 hover:scale-105 z-10 lg:-translate-x-14"
            aria-label="Предыдущий отзыв"
            @click="prev(); resetTimer()"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            class="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-pink flex items-center justify-center text-[#C2185B] hover:shadow-[0_4px_20px_rgba(233,30,140,0.25)] transition-all duration-300 hover:scale-105 z-10 lg:translate-x-14"
            aria-label="Следующий отзыв"
            @click="next(); resetTimer()"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          <!-- Содержимое отзыва -->
          <div class="grid" :aria-live="paused || reducedMotion ? 'polite' : 'off'">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="col-start-1 row-start-1 text-center px-12 sm:px-14 lg:px-20 py-10 sm:py-12" :class="{ invisible: index !== current }" :aria-hidden="index !== current">
              <!-- Звёзды -->
              <div class="flex justify-center gap-1 mb-8">
                <span v-for="i in 5" :key="i" class="text-accent text-lg">★</span>
              </div>

              <blockquote class="quote-text text-xl lg:text-2xl text-[#1A1A2E] leading-relaxed mb-10">
                {{ testimonial.text }}
              </blockquote>

              <!-- Автор -->
              <div class="flex items-center justify-center gap-3">
                <div class="w-10 h-px bg-[#E91E8C]/35" />
                <p class="label text-[11px] text-accent">{{ testimonial.author }}</p>
                <div class="w-10 h-px bg-[#E91E8C]/35" />
              </div>
            </div>
          </div>
        </div>

        <!-- Точки -->
        <div class="flex justify-center gap-2 flex-wrap mt-4">
          <button
            v-for="(_, idx) in testimonials"
            :key="idx"
            :class="[
              'testimonial-dot transition-all duration-300 rounded-full',
              idx === current
                ? 'testimonial-dot--active'
                : '',
            ]"
            :aria-label="`Отзыв ${idx + 1}`"
            :aria-pressed="idx === current"
            @click="current = idx; resetTimer()"
          />
        </div>
        <button v-if="!reducedMotion" type="button" class="body block min-h-11 mx-auto mt-3 text-sm text-[#6B4F5A] underline underline-offset-4" :aria-pressed="paused" @focusin.stop @click="paused = !paused">
          {{ paused ? 'Продолжить смену отзывов' : 'Приостановить смену отзывов' }}
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
.testimonial-dot {
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
}
.testimonial-dot::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #e91e8c55;
}
.testimonial-dot--active::before {
  width: 24px;
  background: #c2185b;
}

</style>

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
let timer: ReturnType<typeof setInterval> | null = null

const prev = () => { current.value = (current.value - 1 + testimonials.length) % testimonials.length }
const next = () => { current.value = (current.value + 1) % testimonials.length }

const resetTimer = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(next, 5500)
}

onMounted(() => { timer = setInterval(next, 5500) })
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<template>
  <section class="py-28 relative overflow-hidden">
    <!-- Градиентный фон -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(135deg, #EEF9FC 0%, #FFFCFA 50%, #FFF4F9 100%)"
    />
    <!-- Декоративные пятна -->
    <div class="absolute top-20 left-10 w-40 h-40 rounded-full blur-3xl opacity-50"
      style="background: rgba(126,207,222,0.4)" />
    <div class="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-3xl opacity-40"
      style="background: rgba(200,164,65,0.2)" />

    <div class="container px-6 lg:px-12 relative z-10">

      <!-- Заголовок -->
      <div class="text-center mb-16">
        <div class="section-label justify-center mb-5">Отзывы</div>
        <h2 class="display text-4xl lg:text-5xl text-[#1A100C]">Говорят наши гости</h2>
      </div>

      <!-- Карточка отзыва -->
      <div class="max-w-3xl mx-auto">
        <!-- Навигация -->
        <div class="relative">
          <button
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-14 w-11 h-11 rounded-full glass-gold flex items-center justify-center text-[#8B6914] hover:shadow-gold transition-all duration-300 hover:scale-110 z-10"
            aria-label="Предыдущий отзыв"
            @click="prev(); resetTimer()"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-14 w-11 h-11 rounded-full glass-gold flex items-center justify-center text-[#8B6914] hover:shadow-gold transition-all duration-300 hover:scale-110 z-10"
            aria-label="Следующий отзыв"
            @click="next(); resetTimer()"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          <!-- Содержимое отзыва -->
          <Transition name="testimonial" mode="out-in">
            <div :key="current" class="text-center px-6 lg:px-20 py-12">
              <!-- Большие кавычки -->
              <div class="text-6xl leading-none text-[#C8A441] opacity-30 font-serif mb-6 select-none">"</div>

              <!-- Звёзды -->
              <div class="flex justify-center gap-1 mb-8">
                <span v-for="i in 5" :key="i" class="text-[#C8A441] text-lg">★</span>
              </div>

              <blockquote class="quote-text text-xl lg:text-2xl text-[#2E201C] leading-relaxed mb-10">
                {{ testimonials[current].text }}
              </blockquote>

              <!-- Автор -->
              <div class="flex items-center justify-center gap-3">
                <div class="w-10 h-px bg-[#C8A441]/40" />
                <p class="label text-[11px] text-[#C8A441]">{{ testimonials[current].author }}</p>
                <div class="w-10 h-px bg-[#C8A441]/40" />
              </div>
            </div>
          </Transition>
        </div>

        <!-- Точки -->
        <div class="flex justify-center gap-2 flex-wrap mt-4">
          <button
            v-for="(_, idx) in testimonials"
            :key="idx"
            :class="[
              'transition-all duration-300 rounded-full',
              idx === current
                ? 'w-8 h-2 bg-[#C8A441]'
                : 'w-2 h-2 bg-[#C8A441]/25 hover:bg-[#C8A441]/50',
            ]"
            :aria-label="`Отзыв ${idx + 1}`"
            @click="current = idx; resetTimer()"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.testimonial-enter-active,
.testimonial-leave-active {
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.testimonial-enter-from {
  opacity: 0;
  transform: translateX(24px);
}
.testimonial-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}
</style>

 <template>
  <section
    id="home"
    class="min-h-screen flex items-center pt-20 relative overflow-hidden"
    style="background: radial-gradient(ellipse at 80% 20%, rgba(233,30,140,0.1) 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(244,141,180,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(233,30,140,0.05) 0%, transparent 50%), #FFFFFF"
  >
    <!-- Декоративные орбиты -->
    <div
      class="absolute top-1/2 right-[8%] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
      style="border: 1px solid rgba(233,30,140,0.08)"
    />
    <div
      class="absolute top-1/2 right-[8%] -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
      style="border: 1px solid rgba(244,141,180,0.06)"
    />

    <!-- Плавающие розовые пятна -->
    <div class="absolute top-20 left-[5%] w-48 h-48 rounded-full blur-3xl pointer-events-none" style="background: rgba(233,30,140,0.08)" />
    <div class="absolute bottom-20 right-[10%] w-64 h-64 rounded-full blur-3xl pointer-events-none" style="background: rgba(244,141,180,0.1)" />

    <!-- Мерцающие точки -->
    <div class="absolute top-32 left-[12%] w-2 h-2 rounded-full bg-[#E91E8C] opacity-50 animate-pulse" />
    <div class="absolute top-56 left-[22%] w-1.5 h-1.5 rounded-full bg-[#F48DB4] opacity-40 animate-pulse" style="animation-delay:.9s" />
    <div class="absolute bottom-44 left-[18%] w-1 h-1 rounded-full bg-[#C2185B] opacity-30 animate-pulse" style="animation-delay:1.6s" />
    <div class="absolute top-44 right-[32%] w-1 h-1 rounded-full bg-[#E91E8C] opacity-40 animate-pulse" style="animation-delay:.4s" />

    <div class="container px-6 lg:px-12 py-16 lg:py-28 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1320px] mx-auto">

        <!-- Левая часть — текст -->
        <div class="animate-slide-up">
          <!-- Метка -->
          <div class="section-label mb-8">Студия красоты · Москва</div>

          <!-- Заголовок -->
          <h1 class="display mb-6" style="font-size: clamp(3rem, 7vw, 5.5rem)">
            <span class="block text-[#1A1A2E]">Камшук</span>
            <span class="block text-pink-shimmer" style="line-height:1.1">Бьюти</span>
          </h1>

          <p class="body text-lg lg:text-xl text-[#6B4F5A] mb-10 max-w-md leading-relaxed">
            Маникюр, брови, ресницы и макияж — результат, который
            держится. Работаем ежедневно с 10:00 до 22:00.
            Первый визит со скидкой&nbsp;<span class="text-[#E91E8C] font-semibold">−15%</span>
          </p>

          <!-- Кнопки -->
          <div class="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
              target="_blank"
              rel="noopener noreferrer"
              class="btn-pink inline-block text-center"
            >
              Записаться на процедуру
            </a>
            <NuxtLink
              to="/#services"
              class="btn-outline-pink inline-block text-center"
            >
              Наши услуги
            </NuxtLink>
          </div>

          <!-- Статистика -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div class="text-center sm:text-left">
              <div class="headline text-4xl text-pink-gradient mb-1">9+</div>
              <p class="body text-sm text-[#B08898]">лет опыта</p>
            </div>
            <div class="text-center sm:text-left">
              <div class="headline text-4xl text-pink-gradient mb-1">1000+</div>
              <p class="body text-sm text-[#B08898]">гостей</p>
            </div>
            <div class="text-center sm:text-left">
              <div class="headline text-4xl text-pink-gradient mb-1">−15%</div>
              <p class="body text-sm text-[#B08898]">при первом визите</p>
            </div>
            <div class="text-center sm:text-left">
              <div class="flex items-center justify-center sm:justify-start gap-1 mb-1">
                <span class="text-[#E91E8C] text-lg leading-none">★</span>
                <span class="headline text-xl text-pink-gradient">Яндекс</span>
              </div>
              <p class="body text-sm text-[#B08898]">Хорошее место 2026</p>
            </div>
          </div>
        </div>

        <!-- Правая часть — логотип крупно -->
        <div class="relative flex items-center justify-center animate-scale-in">
          <!-- Фон-ореол -->
          <div
            class="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse-pink"
            style="background: radial-gradient(ellipse, rgba(233,30,140,0.4) 0%, rgba(244,141,180,0.2) 50%, transparent 70%)"
          />

          <!-- Внешнее кольцо (вращается) -->
          <div
            class="absolute w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] rounded-full pointer-events-none"
            style="border: 1.5px dashed rgba(233,30,140,0.18); animation: rotateSlow 30s linear infinite"
          />

          <!-- Среднее кольцо -->
          <div
            class="absolute w-[360px] h-[360px] lg:w-[450px] lg:h-[450px] rounded-full pointer-events-none"
            style="border: 1px solid rgba(244,141,180,0.25)"
          />

          <!-- Сам логотип -->
          <div class="relative z-10">
            <div
              class="w-[300px] h-[300px] lg:w-[390px] lg:h-[390px] rounded-full overflow-hidden animate-float"
              style="box-shadow: 0 0 70px rgba(233,30,140,0.25), 0 0 30px rgba(244,141,180,0.2), 0 24px 80px rgba(0,0,0,0.1); ring: 3px solid rgba(233,30,140,0.2)"
            >
              <img
                src="/images/logo.jpg"
                alt="Камшук Бьюти — Студия красоты"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Бейдж скидки — iOS стиль -->
            <div
              class="absolute -bottom-4 -right-4 glass-pink rounded-2xl px-5 py-3"
              style="box-shadow: 0 8px 32px rgba(233,30,140,0.2)"
            >
              <p class="label text-[10px] text-[#C2185B] mb-0.5">Первый визит</p>
              <p class="headline text-2xl text-[#E91E8C]">−15%</p>
            </div>

            <!-- Бейдж звёзд — iOS стиль -->
            <div
              class="absolute -top-4 -left-4 glass-white rounded-2xl px-4 py-2.5"
              style="box-shadow: 0 8px 32px rgba(233,30,140,0.1)"
            >
              <div class="flex gap-0.5">
                <span
                  v-for="i in 5"
                  :key="i"
                  class="text-[#E91E8C] text-sm"
                >★</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Волна внизу -->
    <div class="absolute bottom-0 left-0 right-0 wave-divider" />
  </section>
</template>

<style scoped>
@keyframes rotateSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>

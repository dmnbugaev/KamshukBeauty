<template>
  <section
    id="home"
    class="min-h-screen flex items-center pt-20 relative overflow-hidden"
    style="background: radial-gradient(ellipse at 70% 40%, rgba(126,207,222,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(233,30,140,0.07) 0%, transparent 50%), linear-gradient(160deg, #F5FDFF 0%, #FFFCFA 50%, #FFF4F9 100%)"
  >
    <!-- Декоративные орбиты -->
    <div
      class="absolute top-1/2 right-[8%] -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
      style="border: 1px solid rgba(200,164,65,0.1)"
    />
    <div
      class="absolute top-1/2 right-[8%] -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none"
      style="border: 1px solid rgba(126,207,222,0.1)"
    />
    <!-- Мерцающие точки -->
    <div class="absolute top-32 left-[10%] w-2 h-2 rounded-full bg-[#C8A441] opacity-60 animate-pulse" />
    <div class="absolute top-60 left-[20%] w-1.5 h-1.5 rounded-full bg-[#7ECFDE] opacity-50 animate-pulse" style="animation-delay:.8s" />
    <div class="absolute bottom-40 left-[15%] w-1 h-1 rounded-full bg-[#E91E8C] opacity-40 animate-pulse" style="animation-delay:1.4s" />
    <div class="absolute top-40 right-[30%] w-1 h-1 rounded-full bg-[#C8A441] opacity-50 animate-pulse" style="animation-delay:.4s" />

    <div class="container px-6 lg:px-12 py-16 lg:py-28 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1320px] mx-auto">

        <!-- Левая часть — текст -->
        <div class="animate-slide-up">
          <!-- Метка -->
          <div class="section-label mb-8">Студия красоты · Москва</div>

          <!-- Заголовок -->
          <h1 class="display mb-6" style="font-size: clamp(3rem, 7vw, 5.5rem)">
            <span class="block text-[#1A100C]">Камшук</span>
            <span class="block text-gold-shimmer" style="line-height:1.1">Бьюти</span>
          </h1>

          <p class="body text-lg lg:text-xl text-[#5C4A44] mb-10 max-w-md leading-relaxed">
            Премиальная студия красоты — место, где каждый гость
            чувствует заботу и безупречный сервис
          </p>

          <!-- Кнопки -->
          <div class="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
              target="_blank"
              rel="noopener noreferrer"
              class="btn-gold inline-block text-center"
            >
              Записаться на процедуру
            </a>
            <NuxtLink
              to="/#services"
              class="btn-outline-gold inline-block text-center"
            >
              Наши услуги
            </NuxtLink>
          </div>

          <!-- Статистика -->
          <div class="grid grid-cols-3 gap-6">
            <div class="text-center sm:text-left">
              <div class="headline text-4xl text-gold mb-1">9+</div>
              <p class="body text-sm text-[#8A7A74]">лет опыта</p>
            </div>
            <div class="text-center sm:text-left">
              <div class="headline text-4xl text-gold mb-1">1000+</div>
              <p class="body text-sm text-[#8A7A74]">гостей</p>
            </div>
            <div class="text-center sm:text-left">
              <div class="headline text-4xl text-gold mb-1">−15%</div>
              <p class="body text-sm text-[#8A7A74]">при первом визите</p>
            </div>
          </div>
        </div>

        <!-- Правая часть — логотип крупно -->
        <div class="relative flex items-center justify-center animate-scale-in">
          <!-- Фон-ореол -->
          <div
            class="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse-gold"
            style="background: radial-gradient(ellipse, rgba(126,207,222,0.6) 0%, rgba(200,164,65,0.3) 50%, transparent 70%)"
          />

          <!-- Внешнее кольцо (вращается) -->
          <div
            class="absolute w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] rounded-full pointer-events-none"
            style="border: 1.5px dashed rgba(200,164,65,0.25); animation: rotateSlow 30s linear infinite"
          />

          <!-- Среднее кольцо -->
          <div
            class="absolute w-[360px] h-[360px] lg:w-[450px] lg:h-[450px] rounded-full pointer-events-none"
            style="border: 1px solid rgba(126,207,222,0.3)"
          />

          <!-- Сам логотип -->
          <div class="relative z-10">
            <div
              class="w-[300px] h-[300px] lg:w-[390px] lg:h-[390px] rounded-full overflow-hidden shadow-sky-lg ring-4 ring-[#7ECFDE]/30 animate-float"
              style="box-shadow: 0 0 60px rgba(126,207,222,0.3), 0 0 30px rgba(200,164,65,0.15), 0 24px 80px rgba(0,0,0,0.12)"
            >
              <img
                src="/images/logo.jpg"
                alt="Камшук Бьюти — Студия красоты"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Бейдж скидки -->
            <div
              class="absolute -bottom-4 -right-4 glass-gold rounded-2xl px-5 py-3 shadow-gold"
            >
              <p class="label text-[10px] text-[#8B6914] mb-0.5">Первый визит</p>
              <p class="headline text-2xl text-gold">−15%</p>
            </div>

            <!-- Бейдж звёзд -->
            <div
              class="absolute -top-4 -left-4 glass-white rounded-xl px-4 py-2.5 shadow-glass"
            >
              <div class="flex gap-0.5 mb-1">
                <span
                  v-for="i in 5"
                  :key="i"
                  class="text-[#C8A441] text-sm"
                >★</span>
              </div>
              <p class="body text-xs text-[#5C4A44]">1000+ отзывов</p>
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

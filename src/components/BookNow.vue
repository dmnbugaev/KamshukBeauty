<script setup lang="ts">
const socialChannels = useSocialLinks()
</script>

<template>
  <section id="book" class="py-28 bg-white">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1320px] mx-auto">

        <!-- Левая часть — форма -->
        <div class="booking-copy">
          <div class="section-label mb-6">Запись</div>
          <h2 class="booking-title display text-[#1A1A2E] mb-4">
            Готовы<br /><span class="text-pink-shimmer">преобразиться?</span>
          </h2>
          <p class="body text-lg text-muted mb-10">
            Онлайн-запись временно недоступна — салон закрыт на переезд.
            Новый адрес объявим совсем скоро, а пока пишите нам в мессенджеры —
            всегда на связи и ответим на любые вопросы
          </p>

          <!-- Акция — iOS glass стиль -->
          <div class="glass-pink rounded-2xl px-8 py-6 mb-8">
            <div class="flex items-center gap-3 mb-3">
              <div class="ios-icon ios-pink" style="width:48px; height:48px; border-radius:14px; font-size:1.375rem">🎀</div>
              <p class="label text-[11px] text-[#C2185B]">Специальное предложение</p>
            </div>
            <p class="headline text-4xl text-accent mb-2">−20%</p>
            <p class="body text-sm text-[#6B4F5A]">
              Скидка новым гостям на первый визит
            </p>
            <p class="body text-xs text-muted mt-3">
              * Скидки и предложения не суммируются.
            </p>
          </div>

          <!-- Кнопка онлайн-записи -->
          <BookingButton block class="mb-10" />

          <!-- Контакты -->
          <div class="flex flex-wrap gap-6 mb-10">
            <div>
              <p class="label text-[10px] text-muted mb-1">Телефон</p>
              <a href="tel:+79771075005" class="headline text-lg text-[#1A1A2E] hover:text-accent transition-colors">
                +7 (977) 107-50-05
              </a>
            </div>
            <div>
              <p class="label text-[10px] text-muted mb-1">Режим работы</p>
              <p class="headline text-lg text-[#1A1A2E]">Ежедневно: 10:00 — 22:00</p>
            </div>
          </div>

          <!-- Наши каналы -->
          <div
            class="rounded-3xl p-7 lg:p-8"
            style="border: 1.5px solid rgba(233,30,140,0.12); background: rgba(255,240,250,0.4)"
          >
            <h3 class="headline text-lg text-[#1A1A2E] mb-2">Наши каналы</h3>
            <p class="body text-sm text-muted mb-6">Акции, вдохновение и работы мастеров — подписывайтесь, чтобы не пропустить</p>
            <div class="booking-channels grid gap-3">
              <a
                v-for="channel in socialChannels"
                :key="channel.name"
                :href="channel.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 px-4 py-4 rounded-2xl text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                :style="`background: ${channel.gradient}; box-shadow: ${channel.shadow}`"
              >
                <span class="shrink-0" v-html="channel.icon" />
                <div class="min-w-0">
                  <p class="label text-[10px] opacity-80 mb-0.5">{{ channel.handle }}</p>
                  <p class="headline text-sm">{{ channel.action }}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto shrink-0 opacity-70">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Правая часть — фото -->
        <div class="hidden lg:block">
          <div class="relative">
            <!-- Декоративная рамка -->
            <div
              class="absolute -top-4 -right-4 bottom-10 left-10 rounded-3xl"
              style="border: 1.5px solid rgba(233,30,140,0.15)"
            />
            <div class="aspect-[3/4] overflow-hidden rounded-3xl"
              style="box-shadow: 0 24px 80px rgba(233,30,140,0.12), 0 8px 32px rgba(0,0,0,0.08)">
              <img
                src="/images/booking/appointment.jpg"
                alt="Запись в Камшук Бьюти"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.booking-copy {
  container-type: inline-size;
}

.booking-title {
  font-size: clamp(1.5rem, 8.9cqi, 3.1rem);
}

.booking-channels {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
}
</style>

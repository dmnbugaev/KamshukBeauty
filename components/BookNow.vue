<script setup lang="ts">
</script>

<template>
  <section id="book" class="py-28 bg-white">
    <div class="container px-6 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1320px] mx-auto">

        <!-- Левая часть — форма -->
        <div>
          <div class="section-label mb-6">Запись</div>
          <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-4">
            Готовы<br /><span class="text-pink-shimmer">преобразиться?</span>
          </h2>
          <p class="body text-lg text-[#B08898] mb-10">
            Запишитесь онлайн за 2 минуты или оставьте номер —
            мы перезвоним и подберём удобное время. Работаем ежедневно 10:00–22:00
          </p>

          <!-- Акция — iOS glass стиль -->
          <div class="glass-pink rounded-2xl px-8 py-6 mb-8">
            <div class="flex items-center gap-3 mb-3">
              <div class="ios-icon ios-pink" style="width:48px; height:48px; border-radius:14px; font-size:1.375rem">🎀</div>
              <p class="label text-[11px] text-[#C2185B]">Специальное предложение</p>
            </div>
            <p class="headline text-4xl text-[#E91E8C] mb-2">−15%</p>
            <p class="body text-sm text-[#6B4F5A]">
              Скидка на все услуги при первом визите
            </p>
          </div>

          <!-- Кнопка онлайн-записи -->
          <a
            href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
            target="_blank"
            rel="noopener noreferrer"
            class="btn-pink inline-block w-full text-center mb-10"
          >
            Записаться онлайн
          </a>

          <!-- Контакты -->
          <div class="flex flex-col sm:flex-row gap-6 mb-10">
            <div>
              <p class="label text-[10px] text-[#B08898] mb-1">Телефон</p>
              <a href="tel:+79771075005" class="headline text-lg text-[#1A1A2E] hover:text-[#E91E8C] transition-colors">
                +7 (977) 107-50-05
              </a>
            </div>
            <div>
              <p class="label text-[10px] text-[#B08898] mb-1">Режим работы</p>
              <p class="headline text-lg text-[#1A1A2E]">Ежедневно: 10:00 — 22:00</p>
            </div>
          </div>

          <!-- Наши каналы -->
          <div
            class="rounded-3xl p-7 lg:p-8"
            style="border: 1.5px solid rgba(233,30,140,0.12); background: rgba(255,240,250,0.4)"
          >
            <h3 class="headline text-lg text-[#1A1A2E] mb-2">Наши каналы</h3>
            <p class="body text-sm text-[#B08898] mb-6">Акции, вдохновение и работы мастеров — подписывайтесь, чтобы не пропустить</p>
            <div class="flex flex-col gap-3">
              <a
                href="https://t.me/offi_nesquik"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 px-5 py-4 rounded-2xl text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style="background: linear-gradient(135deg, #229ED9, #1A7FBF); box-shadow: 0 6px 20px rgba(34,158,217,0.3)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="shrink-0">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.56-.44.7-.9.44l-2.5-1.84-1.2 1.16c-.13.13-.25.25-.51.25l.18-2.56 4.65-4.2c.2-.18-.04-.28-.31-.1L7.16 14.6l-2.46-.77c-.53-.17-.54-.53.12-.78l9.62-3.71c.44-.16.83.1.2.46z"/>
                </svg>
                <div class="min-w-0">
                  <p class="label text-[10px] opacity-80 mb-0.5">Telegram-канал</p>
                  <p class="headline text-sm">Подписаться</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto shrink-0 opacity-70">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <a
                href="https://max.ru/u/f9LHodD0cOJhZWcjFtzBOFNlcS0w2RVemO55MmCDgD_nHgsPEPAhlJp3i2M"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 px-5 py-4 rounded-2xl text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style="background: linear-gradient(135deg, #E91E8C, #C2185B); box-shadow: 0 6px 20px rgba(233,30,140,0.3)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="shrink-0">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
                <div class="min-w-0">
                  <p class="label text-[10px] opacity-80 mb-0.5">MAX</p>
                  <p class="headline text-sm">Подписаться</p>
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
                src="/images/book.jpg"
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

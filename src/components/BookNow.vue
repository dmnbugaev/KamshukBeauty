<script setup lang="ts">
const socialChannels = [
  {
    label: 'ВКонтакте',
    href: 'https://vk.com/kamshuk_beauty',
    name: 'Подписаться',
    bg: 'linear-gradient(135deg, #4C75A3, #315D8A)',
    shadow: '0 6px 20px rgba(76,117,163,0.3)',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm2.92 13.68h-1.6c-.6 0-.79-.48-1.88-1.58-1-.93-1.43-.93-1.57-.93-.17 0-.22.05-.22.29v1.44c0 .2-.07.29-.72.29-1.05 0-2.2-.64-3.05-1.84-1.25-1.73-1.58-3.02-1.58-3.28 0-.14.05-.26.29-.26h1.6c.21 0 .29.1.37.33.41 1.17 1.09 2.19 1.37 2.19.1 0 .15-.05.15-.32V9.73c-.03-.79-.46-1.56-.46-1.56-.1-.14.07-.25.22-.25h2.52c.17 0 .24.09.24.26v3.29c0 .17.08.24.12.24.1 0 .19-.07.38-.26.59-.66 1.01-1.67 1.01-1.67.06-.12.17-.24.38-.24h1.6c.48 0 .59.24.48.57-.2.91-2.15 3.08-2.15 3.08-.17.27-.24.39 0 .67.17.22.74.72 1.12 1.15.69.74 1.22 1.37 1.36 1.79.12.41-.1.62-.53.62z"/></svg>`,
  },
  {
    label: 'Telegram-канал',
    href: 'https://t.me/offi_nesquik',
    name: 'Подписаться',
    bg: 'linear-gradient(135deg, #229ED9, #1A7FBF)',
    shadow: '0 6px 20px rgba(34,158,217,0.3)',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.56-.44.7-.9.44l-2.5-1.84-1.2 1.16c-.13.13-.25.25-.51.25l.18-2.56 4.65-4.2c.2-.18-.04-.28-.31-.1L7.16 14.6l-2.46-.77c-.53-.17-.54-.53.12-.78l9.62-3.71c.44-.16.83.1.2.46z"/></svg>`,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/message/GAZGRNJFGZWUC1',
    name: 'Написать',
    bg: 'linear-gradient(135deg, #25D366, #128C7E)',
    shadow: '0 6px 20px rgba(37,211,102,0.28)',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
  },
  {
    label: 'MAX',
    href: 'https://max.ru/u/f9LHodD0cOJhZWcjFtzBOFNlcS0w2RVemO55MmCDgD_nHgsPEPAhlJp3i2M',
    name: 'Написать',
    bg: 'linear-gradient(135deg, #E91E8C, #C2185B)',
    shadow: '0 6px 20px rgba(233,30,140,0.3)',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
  },
]
</script>

<template>
  <section id="book" class="py-28 bg-white">
    <div class="container">
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
            <p class="headline text-4xl text-[#E91E8C] mb-2">−20%</p>
            <p class="body text-sm text-[#6B4F5A]">
              Скидка новым гостям на первый визит
            </p>
            <p class="body text-xs text-[#B08898] mt-3">
              * Скидки и предложения не суммируются.
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
            <div class="grid sm:grid-cols-2 gap-3">
              <a
                v-for="channel in socialChannels"
                :key="channel.label"
                :href="channel.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 px-5 py-4 rounded-2xl text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                :style="`background: ${channel.bg}; box-shadow: ${channel.shadow}`"
              >
                <span class="shrink-0" v-html="channel.icon" />
                <div class="min-w-0">
                  <p class="label text-[10px] opacity-80 mb-0.5">{{ channel.label }}</p>
                  <p class="headline text-sm">{{ channel.name }}</p>
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

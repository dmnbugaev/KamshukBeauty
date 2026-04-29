<script setup lang="ts">
const contacts = [
  {
    label: 'Телефон',
    value: '+7 (977) 107-50-05',
    href: 'tel:+79771075005',
    external: false,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>`,
    color: '#E91E8C',
    bg: 'rgba(233,30,140,0.08)',
  },
  {
    label: 'WhatsApp',
    value: 'Написать сообщение',
    href: 'https://wa.me/message/GAZGRNJFGZWUC1',
    external: true,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
    color: '#25D366',
    bg: 'rgba(37,211,102,0.08)',
  },
  {
    label: 'Telegram',
    value: '@offi_nesquik',
    href: 'https://t.me/offi_nesquik',
    external: true,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.56-.44.7-.9.44l-2.5-1.84-1.2 1.16c-.13.13-.25.25-.51.25l.18-2.56 4.65-4.2c.2-.18-.04-.28-.31-.1L7.16 14.6l-2.46-.77c-.53-.17-.54-.53.12-.78l9.62-3.71c.44-.16.83.1.2.46z"/></svg>`,
    color: '#229ED9',
    bg: 'rgba(34,158,217,0.08)',
  },
  {
    label: 'ВКонтакте',
    value: 'vk.com/kamshuk_beauty',
    href: 'https://vk.com/kamshuk_beauty',
    external: true,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm2.92 13.68h-1.6c-.6 0-.79-.48-1.88-1.58-1-.93-1.43-.93-1.57-.93-.17 0-.22.05-.22.29v1.44c0 .2-.07.29-.72.29-1.05 0-2.2-.64-3.05-1.84-1.25-1.73-1.58-3.02-1.58-3.28 0-.14.05-.26.29-.26h1.6c.21 0 .29.1.37.33.41 1.17 1.09 2.19 1.37 2.19.1 0 .15-.05.15-.32V9.73c-.03-.79-.46-1.56-.46-1.56-.1-.14.07-.25.22-.25h2.52c.17 0 .24.09.24.26v3.29c0 .17.08.24.12.24.1 0 .19-.07.38-.26.59-.66 1.01-1.67 1.01-1.67.06-.12.17-.24.38-.24h1.6c.48 0 .59.24.48.57-.2.91-2.15 3.08-2.15 3.08-.17.27-.24.39 0 .67.17.22.74.72 1.12 1.15.69.74 1.22 1.37 1.36 1.79.12.41-.1.62-.53.62z"/></svg>`,
    color: '#4C75A3',
    bg: 'rgba(76,117,163,0.08)',
  },
]
</script>

<template>
  <section id="contact" class="py-28 bg-white">
    <div class="container px-6 lg:px-12">

      <!-- Заголовок -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <div class="section-label mb-5">Контакты</div>
          <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E]">Свяжитесь с нами</h2>
        </div>
        <p class="body text-base text-[#B08898] max-w-xs lg:text-right">
          Выберите удобный способ связи — ответим быстро
        </p>
      </div>

      <!-- Карта -->
      <div class="mb-10 overflow-hidden rounded-3xl"
        style="box-shadow: 0 8px 40px rgba(233,30,140,0.08), 0 2px 12px rgba(0,0,0,0.06)">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A701b24930bd2798acc29157ab7ea2570bde6b311b5ccc1fbcc8da97c7b4be9b4&amp;source=constructor"
          width="100%"
          height="460"
          frameborder="0"
          title="Карта проезда к студии Камшук Бьюти"
          loading="lazy"
          style="display: block"
        />
      </div>

      <!-- Сетка контактов — iOS стиль -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <a
          v-for="(contact, idx) in contacts"
          :key="idx"
          :href="contact.href"
          :target="contact.external ? '_blank' : undefined"
          :rel="contact.external ? 'noopener noreferrer' : undefined"
          class="flex flex-col items-center text-center p-7 bg-white rounded-3xl card-luxury group"
        >
          <!-- iOS иконка -->
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
            :style="`background: ${contact.bg}; color: ${contact.color}; box-shadow: 0 4px 16px ${contact.bg}`"
            v-html="contact.icon"
          />
          <p class="label text-[11px] text-[#1A1A2E] mb-1">{{ contact.label }}</p>
          <p class="body text-xs text-[#B08898]">{{ contact.value }}</p>
        </a>
      </div>

      <!-- Адрес -->
      <div class="text-center">
        <p class="body text-sm text-[#B08898]">
          г. Москва, Коммунарка, ул. Александры Монаховой д. 43/1 · Здание SoiSoul, 1 этаж
        </p>
      </div>

    </div>
  </section>
</template>

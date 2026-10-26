<script setup lang="ts">
const socialLinks = useSocialLinks()

const contacts = [
  {
    label: 'Телефон',
    value: '+7 (977) 107-50-05',
    href: 'tel:+79771075005',
    external: false,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>`,
    color: '#ffffff',
    gradient: 'linear-gradient(135deg, #F48DB4, #E91E8C)',
  },
  ...socialLinks.map((social) => ({
    label: social.name,
    value: social.handle,
    href: social.href,
    external: true,
    icon: social.icon,
    color: '#ffffff',
    gradient: social.gradient,
  })),
]
</script>

<template>
  <section id="contact" class="py-28 bg-white">
    <div class="container">

      <!-- Заголовок -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <div class="section-label mb-5">Контакты</div>
          <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E]">Свяжитесь с нами</h2>
        </div>
        <p class="body text-base text-muted max-w-xs lg:text-right">
          Выберите удобный способ связи — ответим быстро
        </p>
      </div>

      <!-- Карта -->
      <div class="mb-10 overflow-hidden rounded-3xl"
        style="box-shadow: 0 8px 40px rgba(233,30,140,0.08), 0 2px 12px rgba(0,0,0,0.06)">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=37.456494%2C55.632066&amp;z=17&amp;pt=37.456494,55.632066,pm2rdm"
          width="100%"
          height="460"
          frameborder="0"
          title="Карта проезда к студии Камшук Бьюти — ЖК «Тропарёво Парк»"
          loading="lazy"
          style="display: block"
        />
      </div>

      <!-- Сетка контактов -->
      <div class="grid sm:grid-cols-3 gap-4 mb-12">
        <a
          v-for="contact in contacts"
          :key="contact.label"
          :href="contact.href"
          :target="contact.external ? '_blank' : undefined"
          :rel="contact.external ? 'noopener noreferrer' : undefined"
          class="flex flex-col items-center text-center p-7 bg-white rounded-3xl card-luxury group"
        >
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
            :style="`background: ${contact.gradient}; color: ${contact.color}; box-shadow: 0 6px 18px rgba(233,30,140,0.12)`"
            v-html="contact.icon"
          />
          <p class="label text-[11px] text-[#1A1A2E] mb-1">{{ contact.label }}</p>
          <p class="body text-xs text-muted">{{ contact.value }}</p>
        </a>
      </div>

      <!-- Адрес -->
      <div class="text-center">
        <p class="body text-sm text-muted">
          г. Москва, Коммунарка, квартал 2, д. 5, стр. 6, к. 3 · м. Румянцево, ЖК «Тропарёво Парк» · Ежедневно 10:00–22:00
        </p>
      </div>

    </div>
  </section>
</template>


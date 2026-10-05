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

      <!-- Анонс переезда вместо карты -->
      <div class="mb-10 overflow-hidden rounded-3xl relocation-card"
        style="box-shadow: 0 8px 40px rgba(233,30,140,0.08), 0 2px 12px rgba(0,0,0,0.06)"
      >
        <div class="relocation-card__glow" aria-hidden="true" />
        <div class="relative flex flex-col items-center text-center px-6 py-14 sm:py-20">
          <div
            class="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl"
            style="background: linear-gradient(145deg, #F48DB4, #E91E8C); box-shadow: 0 10px 32px rgba(233,30,140,0.35)"
          >
            🚚
          </div>
          <p class="label text-[11px] text-accent mb-3">Важная новость</p>
          <h3 class="display text-3xl lg:text-4xl text-[#1A1A2E] mb-4">Салон переезжает</h3>
          <p class="body text-base text-[#6B4F5A] max-w-xl leading-relaxed mb-8">
            Совсем скоро мы откроем двери по новому адресу и станем ещё ближе к вам.
            Новый адрес объявим первыми в наших каналах — подписывайтесь,
            чтобы не пропустить новости и подарки к открытию.
          </p>
          <div class="flex flex-wrap justify-center gap-3 mb-6">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="label inline-flex min-h-11 items-center gap-2.5 rounded-2xl px-6 py-3 text-xs text-white transition-transform duration-300 hover:scale-[1.04]"
              :style="`background: ${social.gradient}; box-shadow: ${social.shadow}`"
            >
              <span class="leading-none" v-html="social.icon" />
              {{ social.cta }}
            </a>
          </div>
          <p class="body text-xs text-muted">
            А пока — запись онлайн открыта, отвечаем на звонки ежедневно 10:00–22:00
          </p>
        </div>
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

      <!-- Переезд -->
      <div class="text-center">
        <p class="body text-sm text-muted">
          🚚 Салон переезжает — скоро откроемся по новому адресу · Ежедневно 10:00–22:00
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.relocation-card {
  position: relative;
  background: linear-gradient(160deg, #FFF6FA 0%, #FFFFFF 45%, #FFF0F7 100%);
  border: 1px solid rgba(233, 30, 140, 0.1);
}

.relocation-card__glow {
  position: absolute;
  top: -80px;
  right: -80px;
  width: 260px;
  height: 260px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(233, 30, 140, 0.18), transparent 70%);
  filter: blur(48px);
  pointer-events: none;
}
</style>

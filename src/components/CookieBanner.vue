<script setup lang="ts">
const { decided, accept, reject } = useCookieConsent()
const menuOpen = useState('mobile-menu-open', () => false)
</script>

<template>
  <Transition name="cookie-banner">
    <div
      v-if="!decided"
      class="cookie-notice fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-[90]"
      :inert="menuOpen"
      role="dialog"
      aria-label="Уведомление об использовании файлов cookie"
    >
      <div
        class="max-w-3xl mx-auto rounded-3xl p-4 sm:p-6"
        style="background: linear-gradient(145deg, #FFFFFF 0%, #FFF0F7 100%); box-shadow: 0 24px 80px rgba(233,30,140,0.18), 0 8px 32px rgba(0,0,0,0.08); border: 1px solid rgba(233,30,140,0.15)"
      >
        <div class="flex flex-col lg:flex-row gap-4 items-start lg:items-center">

          <!-- Иконка -->
          <div
            class="hidden sm:flex w-12 h-12 rounded-2xl items-center justify-center shrink-0 text-xl"
            style="background: linear-gradient(145deg, #FDE4EF 0%, #F48DB4 100%); box-shadow: 0 6px 24px rgba(244,141,180,0.45), inset 0 1px 0 rgba(255,255,255,0.7)"
          >
            🍪
          </div>

          <!-- Текст -->
          <div class="flex-1">
            <h3 class="headline text-sm text-[#1A1A2E] mb-1.5">
              Мы используем файлы cookie
            </h3>
            <p class="body text-xs text-[#6B4F5A] leading-relaxed">
              Этот сайт использует cookie для улучшения работы и аналитики (Яндекс Метрика).
              При отказе аналитика не собирается.
              <NuxtLink to="/privacy" class="text-accent hover:underline">Подробнее</NuxtLink>
            </p>
          </div>

          <!-- Кнопки -->
          <div class="flex flex-wrap gap-3 shrink-0 w-full lg:w-auto">
            <button
              type="button"
              class="flex-1 lg:flex-none btn-pink"
              style="padding: 0.625rem 1.25rem"
              @click="accept"
            >
              Принять все
            </button>
            <button
              type="button"
              class="flex-1 lg:flex-none min-h-11 label text-[11px] text-[#6B4F5A] hover:text-accent px-5 py-2.5 rounded-full transition-all duration-300"
              style="border: 1.5px solid rgba(233,30,140,0.25); background: #FFFFFF"
              @click="reject"
            >
              Отклонить
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-notice {
  max-height: calc(100dvh - var(--header-height) - 32px);
  overflow-y: auto;
  overscroll-behavior: contain;
  bottom: max(16px, env(safe-area-inset-bottom));
}

.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.cookie-banner-enter-from,
.cookie-banner-leave-to {
  opacity: 0;
  transform: translateY(24px);
}
</style>

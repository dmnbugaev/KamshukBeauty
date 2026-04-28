<script setup lang="ts">
const { decided, accept, reject } = useCookieConsent()
</script>

<template>
  <Transition name="cookie-banner">
    <div
      v-if="!decided"
      class="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-[9999]"
      role="dialog"
      aria-label="Уведомление об использовании файлов cookie"
    >
      <div
        class="max-w-3xl mx-auto rounded-2xl p-6 md:p-8 shadow-luxury"
        style="background: rgba(26,13,46,0.88); backdrop-filter: blur(24px); border: 1px solid rgba(200,164,65,0.2)"
      >
        <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">

          <!-- Иконка -->
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl"
            style="background: rgba(200,164,65,0.15); border: 1px solid rgba(200,164,65,0.25)"
          >
            🍪
          </div>

          <!-- Текст -->
          <div class="flex-1">
            <h3 class="headline text-sm text-white mb-1.5">
              Мы используем файлы cookie
            </h3>
            <p class="body text-xs text-white/55 leading-relaxed">
              Этот сайт использует cookie для улучшения работы и аналитики (Яндекс Метрика).
              При отказе аналитика не собирается.
              <NuxtLink to="/privacy" class="text-[#C8A441] hover:underline">Подробнее</NuxtLink>
            </p>
          </div>

          <!-- Кнопки -->
          <div class="flex gap-3 shrink-0 w-full md:w-auto">
            <button
              class="flex-1 md:flex-none btn-gold py-2.5 px-5 text-[11px]"
              style="padding: 0.625rem 1.25rem"
              @click="accept"
            >
              Принять все
            </button>
            <button
              class="flex-1 md:flex-none label text-[11px] text-white/50 hover:text-white px-5 py-2.5 rounded-lg transition-all duration-300"
              style="border: 1px solid rgba(255,255,255,0.1); background: transparent"
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

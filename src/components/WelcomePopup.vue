<script setup lang="ts">
const show = ref(false)

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && show.value) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)

  if (!sessionStorage.getItem('welcome_popup_shown')) {
    setTimeout(() => { show.value = true }, 10000)
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

const close = () => {
  show.value = false
  sessionStorage.setItem('welcome_popup_shown', '1')
}

watch(show, (value) => {
  if (import.meta.client) {
    document.body.style.overflow = value ? 'hidden' : ''
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="popup">
      <div
        v-if="show"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style="background: rgba(26,26,46,0.55); backdrop-filter: blur(6px)"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-popup-title"
        @click.self="close"
      >
        <div
          class="relative w-full max-w-md rounded-3xl overflow-hidden"
          style="box-shadow: 0 32px 80px rgba(233,30,140,0.25), 0 8px 32px rgba(0,0,0,0.15)"
        >
          <!-- Фон карточки -->
          <div class="absolute inset-0" style="background: linear-gradient(145deg, #FFFFFF 0%, #FFF0F7 100%)" />

          <!-- Декоративное пятно -->
          <div
            class="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-40 pointer-events-none"
            style="background: radial-gradient(circle, rgba(233,30,140,0.5), transparent)"
          />

          <!-- Кнопка закрыть -->
          <button
            type="button"
            class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-[#B08898] hover:text-[#E91E8C] hover:bg-[#FDE8F2] transition-all duration-200"
            aria-label="Закрыть"
            @click.stop="close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <!-- Контент -->
          <div class="relative z-10 p-8 pt-10 text-center">
            <!-- Иконка -->
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl"
              style="background: linear-gradient(145deg, #F48DB4, #E91E8C); box-shadow: 0 8px 24px rgba(233,30,140,0.35)"
            >
              🎀
            </div>

            <!-- Заголовок -->
            <p class="label text-[11px] text-[#E91E8C] mb-2">Радужное предложение</p>
            <h2 id="welcome-popup-title" class="headline text-3xl text-[#1A1A2E] mb-2">
              Скидка <span class="text-pink-shimmer">−30%</span>
            </h2>
            <p class="headline text-base text-[#B08898] mb-6">на все услуги до конца июля</p>

            <div class="pink-divider mx-auto mb-6" />

            <p class="body text-sm text-[#6B4F5A] mb-4 leading-relaxed">
              Маникюр, ресницы, брови, макияж — любая услуга
              по сниженной цене весь июль.
              Работаем ежедневно&nbsp;10:00–22:00.
            </p>
            <p class="body text-xs text-[#B08898] mb-8 opacity-70">
              * Предложение действует до конца июля только на первый визит. Скидки и акции не суммируются.
            </p>

            <!-- CTA -->
            <a
              href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
              target="_blank"
              rel="noopener noreferrer"
              class="btn-pink block text-center mb-4"
              @click="close"
            >
              Записаться со скидкой
            </a>

            <button
              type="button"
              class="body text-xs text-[#B08898] hover:text-[#E91E8C] transition-colors duration-200"
              @click.stop="close"
            >
              Нет, спасибо
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.popup-enter-active,
.popup-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: scale(0.93) translateY(12px);
}
</style>

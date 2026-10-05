<script setup lang="ts">
const expanded = ref(false)
const root = ref<HTMLElement | null>(null)
const toggleRef = ref<HTMLButtonElement | null>(null)
const { decided } = useCookieConsent()
const menuOpen = useState('mobile-menu-open', () => false)

const messengers = useSocialLinks().map((social) => ({
  ...social,
  label: social.cta,
}))

const close = () => {
  expanded.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && expanded.value) {
    close()
    toggleRef.value?.focus()
  }
}

const handlePointerDown = (event: PointerEvent) => {
  if (expanded.value && root.value && !root.value.contains(event.target as Node)) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('pointerdown', handlePointerDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('pointerdown', handlePointerDown)
})
</script>

<template>
  <div v-if="decided && !menuOpen" ref="root" class="messenger-float fixed bottom-4 right-4 sm:bottom-6 sm:right-5 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3">

    <!-- Дополнительные мессенджеры (раскрываются вверх) -->
    <TransitionGroup id="messenger-links" name="messenger-list" tag="div" class="flex flex-col items-end gap-3">
      <a
        v-for="m in expanded ? messengers : []"
        :key="m.name"
        :href="m.href"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 pr-3 pl-4 h-12 rounded-full label text-[11px] text-white shadow-lg transition-transform duration-200 hover:scale-105"
        :style="`background: ${m.gradient}; box-shadow: 0 6px 20px rgba(0,0,0,0.18)`"
        :aria-label="m.label"
      >
        <span class="leading-none" v-html="m.icon" />
        <span>{{ m.label }}</span>
      </a>
    </TransitionGroup>

    <!-- Главная кнопка -->
    <div class="flex items-center gap-3">
      <!-- Метка -->
      <Transition name="label-fade">
        <span
          v-if="!expanded"
          class="hidden sm:block label text-[11px] text-white px-3 py-1.5 rounded-full pointer-events-none"
          style="background: rgba(26,26,46,0.7); backdrop-filter: blur(8px)"
        >
          Написать нам
        </span>
      </Transition>

      <button
        ref="toggleRef"
        type="button"
        aria-controls="messenger-links"
        class="w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
        style="background: linear-gradient(135deg, #E91E8C, #C2185B); box-shadow: 0 8px 28px rgba(233,30,140,0.45)"
        :aria-label="expanded ? 'Закрыть' : 'Написать нам'"
        :aria-expanded="expanded"
        @click="expanded = !expanded"
      >
        <Transition name="icon-switch" mode="out-in">
          <svg v-if="!expanded" key="msg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
          <svg v-else key="close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </Transition>
      </button>
    </div>

  </div>
</template>

<style scoped>
.messenger-float {
  bottom: max(16px, env(safe-area-inset-bottom));
  max-height: calc(100dvh - var(--header-height) - 32px);
  overflow-y: auto;
  padding: 8px;
  margin: -8px;
  overscroll-behavior: contain;
}

.messenger-list-enter-active,
.messenger-list-leave-active {
  transition: all 0.25s ease;
}
.messenger-list-enter-from,
.messenger-list-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

.label-fade-enter-active,
.label-fade-leave-active {
  transition: all 0.2s ease;
}
.label-fade-enter-from,
.label-fade-leave-to {
  opacity: 0;
  transform: translateX(8px);
}

.icon-switch-enter-active,
.icon-switch-leave-active {
  transition: all 0.18s ease;
}
.icon-switch-enter-from,
.icon-switch-leave-to {
  opacity: 0;
  transform: scale(0.7) rotate(45deg);
}
</style>

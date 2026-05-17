<script setup lang="ts">
const expanded = ref(false)

const messengers = [
  {
    name: 'MAX',
    href: 'https://max.ru/u/f9LHodD0cOJhZWcjFtzBOFNlcS0w2RVemO55MmCDgD_nHgsPEPAhlJp3i2M',
    label: 'Написать в MAX',
    color: '#E91E8C',
    bg: 'linear-gradient(135deg, #E91E8C, #C2185B)',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/message/GAZGRNJFGZWUC1',
    label: 'WhatsApp',
    color: '#25D366',
    bg: 'linear-gradient(135deg, #25D366, #128C7E)',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/offi_nesquik',
    label: 'Telegram',
    color: '#229ED9',
    bg: 'linear-gradient(135deg, #229ED9, #1A7FBF)',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.56-.44.7-.9.44l-2.5-1.84-1.2 1.16c-.13.13-.25.25-.51.25l.18-2.56 4.65-4.2c.2-.18-.04-.28-.31-.1L7.16 14.6l-2.46-.77c-.53-.17-.54-.53.12-.78l9.62-3.71c.44-.16.83.1.2.46z"/></svg>`,
  },
]
</script>

<template>
  <div class="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

    <!-- Дополнительные мессенджеры (раскрываются вверх) -->
    <TransitionGroup name="messenger-list" tag="div" class="flex flex-col items-end gap-3">
      <a
        v-for="m in expanded ? messengers.slice(1) : []"
        :key="m.name"
        :href="m.href"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 pr-3 pl-4 h-12 rounded-full label text-[11px] text-white shadow-lg transition-transform duration-200 hover:scale-105"
        :style="`background: ${m.bg}; box-shadow: 0 6px 20px rgba(0,0,0,0.18)`"
        :aria-label="m.label"
      >
        <span class="leading-none" v-html="m.icon" />
        <span>{{ m.label }}</span>
      </a>
    </TransitionGroup>

    <!-- Главная кнопка MAX -->
    <div class="flex items-center gap-3">
      <!-- Метка -->
      <Transition name="label-fade">
        <span
          v-if="!expanded"
          class="label text-[11px] text-white px-3 py-1.5 rounded-full pointer-events-none"
          style="background: rgba(26,26,46,0.7); backdrop-filter: blur(8px)"
        >
          Написать нам
        </span>
      </Transition>

      <button
        class="w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
        style="background: linear-gradient(135deg, #E91E8C, #C2185B); box-shadow: 0 8px 28px rgba(233,30,140,0.45)"
        :aria-label="expanded ? 'Закрыть' : 'Написать нам'"
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

<script setup lang="ts">
const dialogRef = ref<HTMLDialogElement | null>(null)
const ready = ref(false)
const dismissed = ref(false)
const menuOpen = useState('mobile-menu-open', () => false)
const { enabled: bookingEnabled, url: bookingUrl } = useBookingStatus()
let timer: ReturnType<typeof setTimeout> | undefined
let previousOverflow = ''

onMounted(() => {
  dismissed.value = !!sessionStorage.getItem('welcome_popup_shown')
  if (!dismissed.value) {
    timer = setTimeout(() => { ready.value = true }, 700)
  }
})

onBeforeUnmount(() => {
  clearTimeout(timer)
  if (dialogRef.value?.open) {
    dialogRef.value.close()
    document.body.style.overflow = previousOverflow
  }
})

const close = () => {
  dismissed.value = true
  dialogRef.value?.close()
  document.body.style.overflow = previousOverflow
  sessionStorage.setItem('welcome_popup_shown', '1')
}

const trapFocus = (event: KeyboardEvent) => {
  const controls = dialogRef.value?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
  if (!controls?.length) return
  const first = controls[0]
  const last = controls[controls.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

watch([ready, menuOpen], async () => {
  if (!import.meta.client || !ready.value || menuOpen.value || dismissed.value) return
  await nextTick()
  if (!dialogRef.value || dialogRef.value.open) return
  previousOverflow = document.body.style.overflow
  dialogRef.value.showModal()
  document.body.style.overflow = 'hidden'
})
</script>

<template>
  <Teleport to="body">
      <dialog
        ref="dialogRef"
        class="welcome-dialog"
        aria-labelledby="welcome-popup-title"
        @cancel.prevent="close"
        @keydown.tab="trapFocus"
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
            class="absolute top-3 right-3 z-20 w-11 h-11 rounded-full flex items-center justify-center text-[#6B4F5A] hover:text-accent hover:bg-[#FDE8F2] transition-all duration-200"
            autofocus
            aria-label="Закрыть"
            @click.stop="close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <!-- Контент -->
          <div class="relative z-10 p-5 pt-12 text-center">
            <!-- Иконка -->
            <div
              class="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl"
              style="background: linear-gradient(145deg, #F48DB4, #E91E8C); box-shadow: 0 8px 24px rgba(233,30,140,0.35)"
            >
              📍
            </div>

            <!-- Заголовок -->
            <p class="label text-[11px] text-accent mb-1.5">Важная новость</p>
            <h2 id="welcome-popup-title" class="headline text-2xl text-[#1A1A2E] mb-1">
              Мы <span class="text-pink-shimmer">переехали!</span>
            </h2>
            <p class="headline text-sm text-muted mb-4">новый адрес — м. Румянцево</p>

            <p class="body text-sm text-[#6B4F5A] mb-4 leading-relaxed">
              Дорогие гости, теперь ждём вас по новому адресу:
              Москва, Коммунарка, квартал 2, дом 5, стр. 6 —
              ЖК «Тропарёво Парк», метро Румянцево.
            </p>

            <a
              v-if="bookingEnabled"
              :href="bookingUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-pink block text-center mb-2"
              @click="close"
            >
              Записаться онлайн
            </a>

            <button
              type="button"
              class="body block min-h-11 mx-auto mt-1 text-xs text-[#6B4F5A] hover:text-accent transition-colors duration-200"
              @click.stop="close"
            >
              Понятно, увидимся!
            </button>
          </div>
        </div>
      </dialog>
  </Teleport>
</template>

<style scoped>
.welcome-dialog {
  width: calc(100% - 32px);
  max-width: 28rem;
  max-height: calc(100dvh - 32px);
  margin: auto;
  padding: 0;
  border: 0;
  border-radius: 24px;
  background: #fff4f9;
  overflow-y: auto;
  overscroll-behavior: contain;
}
.welcome-dialog::backdrop {
  background: rgba(26, 26, 46, 0.55);
  backdrop-filter: blur(6px);
}
</style>

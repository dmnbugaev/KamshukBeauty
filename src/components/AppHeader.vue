<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { label: 'Услуги', href: '/#services', note: 'Маникюр, брови, ресницы, макияж' },
  { label: 'Работы', href: '/#work', note: 'Портфолио мастеров' },
  { label: 'О нас', href: '/#about', note: 'Студия и команда' },
  { label: 'Обучение', href: '/obuchenie', note: 'Курсы для мастеров' },
  { label: 'Блог', href: '/blog' },
  { label: 'Контакты', href: '/#contact', note: 'Адрес и связь' },
]

const handleScroll = () => { scrolled.value = window.scrollY > 30 }
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

watch(menuOpen, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled
        ? 'glass-white shadow-[0_2px_24px_rgba(233,30,140,0.08)]'
        : 'bg-transparent',
    ]"
  >
    <div class="container">
      <nav class="flex items-center justify-between h-16 sm:h-20 lg:h-24">

        <!-- Логотип -->
        <NuxtLink
          to="/"
          class="flex items-center gap-3 group"
          aria-label="Камшук Бьюти — Главная"
        >
          <div class="relative">
            <img
              src="/images/logo.jpg"
              alt="Логотип Камшук Бьюти"
              class="h-11 w-11 sm:h-14 sm:w-14 rounded-full object-cover shadow-[0_4px_20px_rgba(233,30,140,0.25)] ring-2 ring-[#E91E8C]/25 group-hover:ring-[#E91E8C]/50 transition-all duration-300"
            />
            <div class="absolute inset-0 rounded-full bg-[#E91E8C]/0 group-hover:bg-[#E91E8C]/5 transition-all duration-300" />
          </div>
          <div class="hidden sm:block">
            <p class="headline text-base text-pink-gradient leading-none">Камшук Бьюти</p>
            <p class="body text-[10px] text-[#B08898] tracking-widest mt-0.5">Студия красоты · Москва</p>
          </div>
        </NuxtLink>

        <!-- Десктопная навигация -->
        <div class="hidden lg:flex items-center gap-10">
          <template v-for="link in links" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="label text-[11px] text-[#6B4F5A] hover:text-[#E91E8C] transition-colors duration-300 relative group"
            >
              {{ link.label }}
              <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#E91E8C] to-[#F48DB4] group-hover:w-full transition-all duration-300" />
            </NuxtLink>
          </template>
        </div>

        <!-- CTA -->
        <a
          href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
          target="_blank"
          rel="noopener noreferrer"
          class="hidden lg:block btn-pink"
        >
          Записаться
        </a>

        <!-- Бургер -->
        <button
          class="lg:hidden relative w-11 h-11 flex items-center justify-center text-[#E91E8C] rounded-full bg-white/80 shadow-[0_4px_18px_rgba(233,30,140,0.12)] ring-1 ring-[#E91E8C]/10"
          :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="sr-only">{{ menuOpen ? 'Закрыть' : 'Меню' }}</span>
          <svg
            v-if="!menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            fill="none" stroke="currentColor"
            stroke-width="1.8" stroke-linecap="round"
            viewBox="0 0 24 24"
          >
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="17" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="22" height="22"
            fill="none" stroke="currentColor"
            stroke-width="1.8" stroke-linecap="round"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </nav>
    </div>

    <!-- Мобильное меню -->
    <Transition name="mobile-menu">
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="lg:hidden fixed inset-0 z-40 flex flex-col px-4 py-4"
        style="background: rgba(26, 26, 46, 0.35); backdrop-filter: blur(10px)"
        role="dialog"
        aria-modal="true"
        aria-label="Мобильное меню"
        @click.self="closeMenu"
      >
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(26,26,46,0.22)]">
          <!-- Шапка мобильного меню -->
          <div class="flex items-center justify-between px-5 py-4 border-b border-[#E91E8C]/10">
            <NuxtLink to="/" class="flex min-w-0 items-center gap-3" @click="closeMenu">
              <img src="/images/logo.jpg" alt="Логотип" class="h-11 w-11 rounded-full object-cover ring-2 ring-[#E91E8C]/25" />
              <span class="headline text-sm text-pink-gradient truncate">Камшук Бьюти</span>
            </NuxtLink>
            <button
              class="w-10 h-10 flex items-center justify-center text-[#E91E8C] rounded-full bg-[#FDE8F2] transition-colors"
              aria-label="Закрыть меню"
              @click="closeMenu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <!-- Ссылки -->
          <div class="flex-1 overflow-y-auto px-5 py-5">
            <div class="space-y-2">
              <NuxtLink
                v-for="link in links"
                :key="link.href"
                :to="link.href"
                class="flex items-center justify-between gap-4 rounded-2xl border border-[#E91E8C]/10 bg-[#FFF8FC] px-4 py-3 transition-colors active:bg-[#FDE8F2]"
                @click="closeMenu"
              >
                <span class="min-w-0">
                  <span class="headline block text-base text-[#1A1A2E]">{{ link.label }}</span>
                  <span v-if="link.note" class="body block text-xs leading-snug text-[#B08898]">{{ link.note }}</span>
                </span>
                <svg class="shrink-0 text-[#E91E8C]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </NuxtLink>
            </div>

            <div class="mt-6 rounded-2xl border border-[#E91E8C]/10 bg-white px-4 py-4">
              <p class="label text-[10px] text-[#E91E8C] mb-2">Адрес и время</p>
              <p class="body text-sm leading-relaxed text-[#6B4F5A]">
                Москва, Коммунарка<br />
                Ежедневно 10:00–22:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateX(24px);
}
</style>

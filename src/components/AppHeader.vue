<script setup lang="ts">
type HeaderLink = {
  label: string
  href: string
  note?: string
}

const scrolled = ref(false)
const menuOpen = ref(false)
const menuButtonRef = ref<HTMLButtonElement | null>(null)
const menuPanelRef = ref<HTMLElement | null>(null)
const route = useRoute()

let previousBodyOverflow = ''
let desktopQuery: MediaQueryList | null = null

const links: HeaderLink[] = [
  { label: 'Услуги', href: '/#services', note: 'Маникюр, брови, ресницы, макияж' },
  { label: 'Работы', href: '/#work', note: 'Портфолио мастеров' },
  { label: 'О нас', href: '/#about', note: 'Студия и команда' },
  { label: 'Обучение', href: '/obuchenie', note: 'Курсы для мастеров' },
  { label: 'Блог', href: '/blog' },
  { label: 'Контакты', href: '/#contact', note: 'Адрес и связь' },
]

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

const handleScroll = () => {
  scrolled.value = window.scrollY > 24
}

const getFocusableItems = () => {
  if (!menuPanelRef.value) return []

  return Array.from(menuPanelRef.value.querySelectorAll<HTMLElement>(focusableSelector))
    .filter((element) => !element.hasAttribute('disabled') && element.offsetParent !== null)
}

const closeMenu = (returnFocus = true) => {
  if (!menuOpen.value) return

  menuOpen.value = false

  if (returnFocus) {
    nextTick(() => menuButtonRef.value?.focus())
  }
}

const toggleMenu = () => {
  if (menuOpen.value) {
    closeMenu()
    return
  }

  menuOpen.value = true
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!menuOpen.value) return

  if (event.key === 'Escape') {
    event.preventDefault()
    closeMenu()
    return
  }

  if (event.key !== 'Tab') return

  const focusableItems = getFocusableItems()
  if (!focusableItems.length) {
    event.preventDefault()
    return
  }

  const firstItem = focusableItems[0]
  const lastItem = focusableItems[focusableItems.length - 1]

  if (event.shiftKey && document.activeElement === firstItem) {
    event.preventDefault()
    lastItem.focus()
  } else if (!event.shiftKey && document.activeElement === lastItem) {
    event.preventDefault()
    firstItem.focus()
  }
}

const handleDesktopChange = (event: MediaQueryListEvent | MediaQueryList) => {
  if (event.matches) {
    closeMenu(false)
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)

  desktopQuery = window.matchMedia('(min-width: 1024px)')
  desktopQuery.addEventListener('change', handleDesktopChange)
  handleDesktopChange(desktopQuery)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  desktopQuery?.removeEventListener('change', handleDesktopChange)
  document.body.style.overflow = previousBodyOverflow
})

watch(menuOpen, async (isOpen) => {
  if (!import.meta.client) return

  if (isOpen) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    await nextTick()
    getFocusableItems()[0]?.focus()
    return
  }

  document.body.style.overflow = previousBodyOverflow
})

watch(
  () => route.fullPath,
  () => closeMenu(false),
)
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-[80] transition-all duration-300',
      scrolled || menuOpen
        ? 'glass-white shadow-[0_2px_24px_rgba(233,30,140,0.08)]'
        : 'bg-white/75 backdrop-blur-md',
    ]"
  >
    <div class="container">
      <nav class="flex h-16 items-center justify-between gap-4 lg:h-20" aria-label="Основная навигация">
        <NuxtLink
          to="/"
          class="group flex min-w-0 items-center gap-3"
          aria-label="Камшук Бьюти — главная"
          @click="closeMenu(false)"
        >
          <span class="relative shrink-0">
            <img
              src="/images/logo.jpg"
              alt="Логотип Камшук Бьюти"
              class="h-11 w-11 rounded-full object-cover shadow-[0_4px_20px_rgba(233,30,140,0.22)] ring-2 ring-[#E91E8C]/25 transition-all duration-300 group-hover:ring-[#E91E8C]/50 sm:h-12 sm:w-12"
              width="56"
              height="56"
            />
          </span>
          <span class="hidden min-w-0 sm:block">
            <span class="headline block truncate text-sm leading-none text-pink-gradient md:text-base">Камшук Бьюти</span>
            <span class="body mt-1 block truncate text-[10px] text-[#B08898]">Студия красоты · Москва</span>
          </span>
        </NuxtLink>

        <div class="hidden min-w-0 items-center justify-center gap-4 lg:flex xl:gap-7">
          <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            class="label group relative max-w-28 truncate text-[11px] text-[#6B4F5A] transition-colors duration-300 hover:text-[#E91E8C] xl:max-w-none"
          >
            {{ link.label }}
            <span class="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#E91E8C] to-[#F48DB4] transition-all duration-300 group-hover:w-full" />
          </NuxtLink>
        </div>

        <a
          href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
          target="_blank"
          rel="noopener noreferrer"
          class="btn-pink !hidden shrink-0 xl:!inline-flex"
        >
          Записаться
        </a>

        <button
          ref="menuButtonRef"
          type="button"
          class="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#E91E8C] shadow-[0_4px_18px_rgba(233,30,140,0.12)] ring-1 ring-[#E91E8C]/10 transition-colors hover:bg-[#FFF4F9] lg:hidden"
          :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="mobile-menu"
          @click="toggleMenu"
        >
          <span class="sr-only">{{ menuOpen ? 'Закрыть меню' : 'Открыть меню' }}</span>
          <svg
            v-if="!menuOpen"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="18" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
          <svg
            v-else
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </nav>
    </div>

    <Teleport to="body">
      <Transition name="mobile-menu">
        <div
          v-if="menuOpen"
          id="mobile-menu"
          class="fixed inset-x-0 bottom-0 top-[var(--header-height)] z-[70] flex flex-col bg-[#1A1A2E]/35 px-4 pb-4 pt-2 backdrop-blur-md lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню"
          @click.self="() => closeMenu()"
        >
          <section
            ref="menuPanelRef"
            class="mx-auto flex max-h-full w-full max-w-md flex-1 flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_24px_80px_rgba(26,26,46,0.22)]"
          >
          <div class="flex items-center justify-between gap-4 border-b border-[#E91E8C]/10 px-5 py-4">
            <NuxtLink to="/" class="flex min-w-0 items-center gap-3" @click="closeMenu(false)">
              <img
                src="/images/logo.jpg"
                alt="Логотип Камшук Бьюти"
                class="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-[#E91E8C]/25"
                width="44"
                height="44"
              />
              <span class="headline min-w-0 truncate text-sm text-pink-gradient">Камшук Бьюти</span>
            </NuxtLink>
            <button
              type="button"
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDE8F2] text-[#E91E8C] transition-colors hover:bg-[#F9C5DA]/40"
              aria-label="Закрыть меню"
              @click="() => closeMenu()"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto px-5 py-5">
            <div class="space-y-2">
              <NuxtLink
                v-for="link in links"
                :key="link.href"
                :to="link.href"
                class="flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-[#E91E8C]/10 bg-[#FFF8FC] px-4 py-3 transition-colors hover:bg-[#FFF4F9] active:bg-[#FDE8F2]"
                @click="closeMenu(false)"
              >
                <span class="min-w-0">
                  <span class="headline block text-base text-[#1A1A2E]">{{ link.label }}</span>
                  <span v-if="link.note" class="body block text-xs leading-snug text-[#B08898]">{{ link.note }}</span>
                </span>
                <svg class="shrink-0 text-[#E91E8C]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </NuxtLink>
            </div>

            <div class="mt-6 rounded-2xl border border-[#E91E8C]/10 bg-white px-4 py-4">
              <p class="label mb-2 text-[10px] text-[#E91E8C]">Адрес и время</p>
              <p class="body text-sm leading-relaxed text-[#6B4F5A]">
                Москва, Коммунарка<br />
                Ежедневно 10:00-22:00
              </p>
            </div>
          </div>
          </section>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.22s ease;
}

.mobile-menu-enter-active section,
.mobile-menu-leave-active section {
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from section,
.mobile-menu-leave-to section {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active,
  .mobile-menu-enter-active section,
  .mobile-menu-leave-active section {
    transition: none;
  }
}
</style>

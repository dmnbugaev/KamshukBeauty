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
          class="burger-button lg:hidden"
          :class="{ 'burger-button--open': menuOpen }"
          :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="mobile-menu"
          @click="toggleMenu"
        >
          <span class="sr-only">{{ menuOpen ? 'Закрыть меню' : 'Открыть меню' }}</span>
          <span class="burger-button__glow" aria-hidden="true" />
          <span class="burger-button__lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </nav>
    </div>

    <Teleport to="body">
      <Transition name="mobile-menu">
        <div
          v-if="menuOpen"
          id="mobile-menu"
          class="mobile-menu-backdrop fixed inset-x-0 bottom-0 top-[var(--header-height)] z-[10000] flex flex-col lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню"
          @click.self="() => closeMenu()"
        >
          <section
            ref="menuPanelRef"
            class="mobile-menu-panel mx-auto flex max-h-full w-full max-w-md flex-1 flex-col overflow-hidden bg-white"
          >
          <div class="mobile-menu-panel__header flex items-center justify-between gap-4 px-5 py-4">
            <NuxtLink to="/" class="flex min-w-0 items-center gap-3" @click="closeMenu(false)">
              <img
                src="/images/logo.jpg"
                alt="Логотип Камшук Бьюти"
                class="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-[#E91E8C]/25"
                width="44"
                height="44"
              />
              <span class="min-w-0">
                <span class="headline block truncate text-sm text-pink-gradient">Камшук Бьюти</span>
                <span class="label mt-1 block truncate text-[10px] text-[#B08898]">Меню и запись</span>
              </span>
            </NuxtLink>
            <button
              type="button"
              class="mobile-menu-close"
              aria-label="Закрыть меню"
              @click="() => closeMenu()"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div class="mobile-menu-panel__body flex-1 overflow-y-auto px-5 py-5">
            <p class="mobile-menu-kicker label mb-3 text-[10px] text-[#C2185B]">Навигация</p>
            <div class="space-y-2">
              <NuxtLink
                v-for="link in links"
                :key="link.href"
                :to="link.href"
                class="mobile-menu-link flex min-h-[56px] items-center justify-between gap-4 px-4 py-2.5"
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

            <div class="mobile-menu-card mt-6 rounded-2xl px-4 py-4">
              <p class="label mb-2 text-[10px] text-[#E91E8C]">Адрес и время</p>
              <p class="body text-sm leading-relaxed text-[#6B4F5A]">
                Москва, Коммунарка<br />
                Ежедневно 10:00-22:00
              </p>
            </div>
          </div>

          <div class="mobile-menu-panel__footer px-5 pb-5 pt-4">
            <a
              href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
              target="_blank"
              rel="noopener noreferrer"
              class="mobile-menu-cta"
            >
              <span>Записаться онлайн</span>
              <span class="mobile-menu-cta__badge">−30%</span>
            </a>
            <a href="tel:+79771075005" class="mobile-menu-phone">
              +7 (977) 107-50-05
            </a>
          </div>
          </section>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.burger-button {
  position: relative;
  display: flex;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(233, 30, 140, 0.16);
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(253, 232, 242, 0.92)),
    radial-gradient(circle at 70% 20%, rgba(244, 141, 180, 0.36), transparent 45%);
  box-shadow: 0 10px 28px rgba(233, 30, 140, 0.16);
  color: #c2185b;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease;
}

.burger-button:hover {
  border-color: rgba(233, 30, 140, 0.28);
  box-shadow: 0 14px 34px rgba(233, 30, 140, 0.22);
  transform: translateY(-1px);
}

.burger-button:active {
  transform: translateY(0);
}

.burger-button--open {
  border-color: rgba(233, 30, 140, 0.34);
  background:
    linear-gradient(135deg, rgba(253, 232, 242, 0.98), rgba(255, 255, 255, 0.95)),
    radial-gradient(circle at 30% 20%, rgba(233, 30, 140, 0.32), transparent 46%);
}

.burger-button__glow {
  position: absolute;
  inset: 8px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(233, 30, 140, 0.14), rgba(244, 141, 180, 0.06));
  opacity: 0;
  transition: opacity 0.2s ease;
}

.burger-button--open .burger-button__glow {
  opacity: 1;
}

.burger-button__lines {
  position: relative;
  display: grid;
  width: 22px;
  gap: 5px;
}

.burger-button__lines span {
  display: block;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    width 0.2s ease;
}

.burger-button__lines span:nth-child(1),
.burger-button__lines span:nth-child(3) {
  width: 22px;
}

.burger-button__lines span:nth-child(2) {
  width: 16px;
  justify-self: end;
}

.burger-button--open .burger-button__lines span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger-button--open .burger-button__lines span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0.4);
}

.burger-button--open .burger-button__lines span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-menu-backdrop {
  padding: 10px max(16px, env(safe-area-inset-right)) max(16px, env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left));
  background:
    radial-gradient(circle at 50% 0%, rgba(244, 141, 180, 0.24), transparent 34%),
    rgba(26, 26, 46, 0.58);
  backdrop-filter: blur(22px);
}

.mobile-menu-panel {
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 26px;
  background:
    linear-gradient(180deg, #fff8fc 0%, #ffffff 28%, #ffffff 100%);
  box-shadow: 0 26px 90px rgba(26, 26, 46, 0.28);
  isolation: isolate;
}

.mobile-menu-panel__header {
  border-bottom: 1px solid rgba(233, 30, 140, 0.1);
  background:
    linear-gradient(135deg, rgba(255, 248, 252, 0.98), rgba(255, 255, 255, 0.98)),
    radial-gradient(circle at 12% 0%, rgba(233, 30, 140, 0.14), transparent 38%);
}

.mobile-menu-panel__body {
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
  background: #ffffff;
}

.mobile-menu-kicker {
  color: #c2185b;
}

.mobile-menu-close {
  display: flex;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(233, 30, 140, 0.12);
  border-radius: 16px;
  background: #fde8f2;
  color: #c2185b;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.mobile-menu-close:hover {
  border-color: rgba(233, 30, 140, 0.22);
  background: #fff4f9;
}

.mobile-menu-close:active {
  transform: scale(0.98);
}

.mobile-menu-link {
  border: 1px solid rgba(233, 30, 140, 0.1);
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(255, 248, 252, 0.98), rgba(255, 255, 255, 0.98));
  box-shadow: 0 8px 22px rgba(233, 30, 140, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease;
}

.mobile-menu-link:hover {
  border-color: rgba(233, 30, 140, 0.22);
  background: linear-gradient(135deg, #fff4f9, #ffffff);
  box-shadow: 0 12px 28px rgba(233, 30, 140, 0.1);
  transform: translateY(-1px);
}

.mobile-menu-link:active {
  transform: translateY(0);
}

.mobile-menu-card {
  border: 1px solid rgba(233, 30, 140, 0.1);
  background:
    linear-gradient(135deg, rgba(253, 232, 242, 0.74), rgba(255, 255, 255, 0.96));
}

.mobile-menu-panel__footer {
  display: grid;
  gap: 8px;
  border-top: 1px solid rgba(233, 30, 140, 0.1);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 248, 252, 0.98));
}

.mobile-menu-cta,
.mobile-menu-phone {
  display: flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  text-align: center;
}

.mobile-menu-cta {
  gap: 10px;
  background: linear-gradient(135deg, #c2185b 0%, #e91e8c 62%, #f06292 100%);
  box-shadow: 0 14px 32px rgba(233, 30, 140, 0.24);
  color: #ffffff;
  font-family: var(--font-family-heading);
  font-size: 0.78rem;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.mobile-menu-cta:hover {
  box-shadow: 0 16px 38px rgba(233, 30, 140, 0.3);
  transform: translateY(-1px);
}

.mobile-menu-cta:active {
  transform: translateY(0);
}

.mobile-menu-cta__badge {
  display: inline-flex;
  min-height: 26px;
  align-items: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  padding: 0 9px;
  font-size: 0.76rem;
}

.mobile-menu-phone {
  border: 1px solid rgba(233, 30, 140, 0.14);
  background: #ffffff;
  color: #6b4f5a;
  font-family: var(--font-family-heading);
  font-size: 0.9rem;
  font-weight: var(--font-weight-medium);
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background 0.2s ease;
}

.mobile-menu-phone:hover {
  border-color: rgba(233, 30, 140, 0.26);
  background: #fff8fc;
  color: #c2185b;
}

@media (min-width: 1024px) {
  .burger-button {
    display: none;
  }
}

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
  transform: translateY(14px) scale(0.98);
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active,
  .mobile-menu-enter-active section,
  .mobile-menu-leave-active section {
    transition: none;
  }

  .burger-button,
  .burger-button__glow,
  .burger-button__lines span,
  .mobile-menu-close,
  .mobile-menu-link,
  .mobile-menu-cta,
  .mobile-menu-phone {
    transition: none;
  }
}
</style>

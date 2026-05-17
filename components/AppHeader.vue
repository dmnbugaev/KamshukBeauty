<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { label: 'Услуги', href: '/#services' },
  { label: 'Работы', href: '/#work' },
  { label: 'О нас', href: '/#about' },
  { label: 'Блог', href: '/blog' },
  { label: 'Контакты', href: '/#contact' },
]

onMounted(() => {
  const handleScroll = () => { scrolled.value = window.scrollY > 30 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
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
    <div class="container px-6 lg:px-12">
      <nav class="flex items-center justify-between h-20 lg:h-24">

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
              class="h-14 w-14 rounded-full object-cover shadow-[0_4px_20px_rgba(233,30,140,0.25)] ring-2 ring-[#E91E8C]/25 group-hover:ring-[#E91E8C]/50 transition-all duration-300"
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
          <NuxtLink
            to="/obuchenie"
            class="label text-[11px] text-[#6B4F5A] hover:text-[#E91E8C] transition-colors duration-300 relative group"
          >
            Обучение
            <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#E91E8C] to-[#F48DB4] group-hover:w-full transition-all duration-300" />
          </NuxtLink>
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
          class="lg:hidden relative w-10 h-10 flex items-center justify-center text-[#E91E8C]"
          :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
          :aria-expanded="menuOpen"
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
        class="lg:hidden fixed inset-0 z-40 flex flex-col"
        style="background: linear-gradient(160deg, #FFFFFF 0%, #FFF4F9 100%)"
      >
        <!-- Шапка мобильного меню -->
        <div class="flex items-center justify-between h-20 px-6 border-b border-[#E91E8C]/10">
          <NuxtLink to="/" class="flex items-center gap-3" @click="closeMenu">
            <img src="/images/logo.jpg" alt="Логотип" class="h-12 w-12 rounded-full object-cover ring-2 ring-[#E91E8C]/25" />
            <span class="headline text-base text-pink-gradient">Камшук Бьюти</span>
          </NuxtLink>
          <button
            class="w-10 h-10 flex items-center justify-center text-[#E91E8C] rounded-full hover:bg-[#FDE8F2] transition-colors"
            aria-label="Закрыть меню"
            @click="closeMenu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <!-- Ссылки -->
        <div class="flex-1 px-6 py-10 overflow-y-auto">
          <div class="space-y-1 mb-12">
            <NuxtLink
              v-for="link in links"
              :key="link.href"
              :to="link.href"
              class="flex items-center gap-4 py-4 border-b border-[#E91E8C]/10 group"
              @click="closeMenu"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#E91E8C] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span class="headline text-xl text-[#1A1A2E] group-hover:text-[#E91E8C] transition-colors">
                {{ link.label }}
              </span>
            </NuxtLink>
            <NuxtLink
              to="/obuchenie"
              class="flex items-center gap-4 py-4 border-b border-[#E91E8C]/10 group"
              @click="closeMenu"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#E91E8C] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span class="headline text-xl text-[#1A1A2E] group-hover:text-[#E91E8C] transition-colors">Обучение</span>
            </NuxtLink>
          </div>

          <a
            href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
            target="_blank"
            rel="noopener noreferrer"
            class="block btn-pink text-center"
            @click="closeMenu"
          >
            Записаться онлайн
          </a>

          <p class="body text-xs text-[#B08898] text-center mt-8">
            г. Москва, Коммунарка · Ежедневно 10:00–22:00
          </p>
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

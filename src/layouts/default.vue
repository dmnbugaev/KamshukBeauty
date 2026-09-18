<script setup lang="ts">
const menuOpen = useState('mobile-menu-open', () => false)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main id="main-content" class="site-main flex-1" :inert="menuOpen">
      <slot />
    </main>
    <AppFooter :inert="menuOpen" />
    <ClientOnly>
      <CookieBanner />
      <WelcomePopup />
      <MessengerFloat />
    </ClientOnly>
  </div>
</template>

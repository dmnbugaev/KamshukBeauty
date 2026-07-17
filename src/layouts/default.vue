<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="site-main flex-1">
      <slot />
    </main>
    <AppFooter />
    <ClientOnly>
      <CookieBanner />
      <WelcomePopup />
      <MessengerFloat />
    </ClientOnly>
  </div>
</template>

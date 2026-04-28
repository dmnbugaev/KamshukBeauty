<template>
  <section class="py-28 relative overflow-hidden">
    <!-- Фон -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(135deg, #1A0D2E 0%, #0D1829 100%)"
    />
    <!-- Декоративные пятна -->
    <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
      style="background: radial-gradient(circle, #7ECFDE, transparent)" />
    <div class="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
      style="background: radial-gradient(circle, #C8A441, transparent)" />

    <div class="container px-6 lg:px-12 relative z-10">
      <div class="max-w-4xl mx-auto text-center">

        <!-- Декоративная деталь -->
        <div class="flex items-center justify-center gap-4 mb-10">
          <div class="w-12 h-px bg-gradient-to-r from-transparent to-[#C8A441]" />
          <span class="text-[#C8A441] text-xl">✦</span>
          <div class="w-12 h-px bg-gradient-to-l from-transparent to-[#C8A441]" />
        </div>

        <!-- Цитата -->
        <blockquote class="quote-text text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-10">
          «Быть элегантной не значит
          <br class="hidden lg:block" />
          бросаться в глаза —
          <br />
          это значит
          <span class="text-gold-shimmer not-italic">&nbsp;врезаться в память»</span>
        </blockquote>

        <!-- Автор -->
        <div class="flex items-center justify-center gap-3">
          <div class="w-8 h-px bg-[#C8A441]/40" />
          <p class="label text-[11px] text-[#8A7A74]">Анастасия Камшук</p>
          <div class="w-8 h-px bg-[#C8A441]/40" />
        </div>

      </div>
    </div>
  </section>
</template>

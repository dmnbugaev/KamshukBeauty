<template>
  <section class="py-28 relative overflow-hidden">
    <!-- Нежный розовый фон вместо тёмного -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(135deg, #FFF0F7 0%, #FDE8F2 40%, #FFF4F9 100%)"
    />
    <!-- Мягкие декоративные пятна -->
    <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-50"
      style="background: radial-gradient(circle, rgba(244,141,180,0.4), transparent)" />
    <div class="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-40"
      style="background: radial-gradient(circle, rgba(233,30,140,0.15), transparent)" />

    <div class="container relative z-10">
      <div class="max-w-4xl mx-auto text-center">

        <!-- Декоративная деталь -->
        <div class="flex items-center justify-center gap-4 mb-10">
          <div class="w-12 h-px" style="background: linear-gradient(to right, transparent, #E91E8C)" />
          <span class="text-[#E91E8C] text-xl">✦</span>
          <div class="w-12 h-px" style="background: linear-gradient(to left, transparent, #E91E8C)" />
        </div>

        <!-- Большая кавычка — iOS glass -->
        <div
          class="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
          style="background: linear-gradient(145deg, #F48DB4, #E91E8C); box-shadow: 0 6px 24px rgba(233,30,140,0.3), inset 0 1px 0 rgba(255,255,255,0.4)"
        >
          <span class="text-white text-2xl font-serif leading-none" style="margin-top:-4px">"</span>
        </div>

        <!-- Цитата -->
        <blockquote class="quote-text text-3xl lg:text-4xl xl:text-5xl text-[#1A1A2E] leading-tight mb-10">
          «Быть элегантной не значит
          <br class="hidden lg:block" />
          бросаться в глаза —
          <br />
          это значит
          <span class="text-pink-shimmer not-italic">&nbsp;врезаться в память»</span>
        </blockquote>

        <!-- Автор -->
        <div class="flex items-center justify-center gap-3">
          <div class="w-8 h-px bg-[#E91E8C]/40" />
          <p class="label text-[11px] text-[#B08898]">Анастасия Камшук</p>
          <div class="w-8 h-px bg-[#E91E8C]/40" />
        </div>

      </div>
    </div>
  </section>
</template>

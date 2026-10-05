<script setup lang="ts">
const socialLinks = useSocialLinks()
</script>

<template>
  <footer
    class="relative overflow-hidden"
    style="background: linear-gradient(160deg, #FFF4F9 0%, #FFFFFF 50%, #FFF0F5 100%)"
  >
    <!-- Декоративные розовые пятна -->
    <div class="absolute top-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
      style="background: radial-gradient(circle, rgba(244,141,180,0.5), transparent)" />
    <div class="absolute bottom-0 left-1/4 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
      style="background: radial-gradient(circle, rgba(233,30,140,0.25), transparent)" />

    <div class="container relative z-10">

      <!-- Волновой разделитель -->
      <div class="wave-divider opacity-50" />

      <!-- Верхний блок -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16 border-b border-[#E91E8C]/10">

        <!-- О студии + логотип -->
        <div>
          <NuxtLink to="/" class="flex items-center gap-4 mb-6 group">
            <img
              src="/images/brand/logo.jpg"
              alt="Логотип Камшук Бьюти"
              class="h-16 w-16 rounded-full object-cover ring-2 ring-[#E91E8C]/20 group-hover:ring-[#E91E8C]/45 transition-all duration-300"
              style="box-shadow: 0 4px 20px rgba(233,30,140,0.15)"
            />
            <div>
              <p class="headline text-lg text-pink-gradient leading-none mb-1">Камшук Бьюти</p>
              <p class="body text-xs text-muted">Студия красоты · Москва</p>
            </div>
          </NuxtLink>
          <p class="body text-sm text-[#6B4F5A] leading-relaxed mb-6">
            Премиальная студия красоты в Москве. Индивидуальный подход и безупречное качество.
          </p>
          <!-- Иконки соцсетей — фирменные стили -->
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="flex w-11 h-11 items-center justify-center rounded-xl text-white transition-all duration-300 hover:scale-110"
              :style="`background: ${social.gradient}; box-shadow: ${social.shadow}`"
            >
              <span class="leading-none" v-html="social.icon" />
            </a>
          </div>
        </div>

        <!-- Навигация -->
        <div>
          <h4 class="label text-[10px] text-accent mb-5">Услуги</h4>
          <div class="space-y-2">
            <NuxtLink to="/manikyur" class="body text-sm text-[#6B4F5A] hover:text-accent transition-colors block">Маникюр</NuxtLink>
            <NuxtLink to="/pedikyur" class="body text-sm text-[#6B4F5A] hover:text-accent transition-colors block">Педикюр</NuxtLink>
            <NuxtLink to="/naraschivanie-resnic" class="body text-sm text-[#6B4F5A] hover:text-accent transition-colors block">Наращивание ресниц</NuxtLink>
            <NuxtLink to="/brovi" class="body text-sm text-[#6B4F5A] hover:text-accent transition-colors block">Брови</NuxtLink>
            <NuxtLink to="/makiyazh" class="body text-sm text-[#6B4F5A] hover:text-accent transition-colors block">Макияж</NuxtLink>
            <NuxtLink to="/obuchenie" class="body text-sm text-[#6B4F5A] hover:text-accent transition-colors block">Обучение</NuxtLink>
          </div>
          <h4 class="label text-[10px] text-accent mt-6 mb-3">Статьи</h4>
          <NuxtLink to="/blog" class="body text-sm text-[#6B4F5A] hover:text-accent transition-colors block">Блог о красоте</NuxtLink>
        </div>

        <!-- Контакты -->
        <div>
          <h4 class="label text-[10px] text-accent mb-5">Контакты</h4>
          <div class="space-y-3">
            <a href="tel:+79771075005"
              class="body text-sm text-[#6B4F5A] hover:text-accent transition-colors block">
              +7 (977) 107-50-05
            </a>
            <a v-for="social in socialLinks" :key="social.name"
              :href="social.href"
              target="_blank" rel="noopener noreferrer"
              class="body text-sm text-[#6B4F5A] hover:text-accent transition-colors block"
            >
              {{ social.name }}<template v-if="social.handle.startsWith('@')"> {{ social.handle }}</template>
            </a>
          </div>
          <div class="mt-5 rounded-2xl px-4 py-3.5" style="background: rgba(233,30,140,0.06); border: 1px dashed rgba(233,30,140,0.35)">
            <p class="label text-[10px] text-accent mb-1.5">🚚 Мы переезжаем</p>
            <p class="body text-xs leading-relaxed text-[#6B4F5A]">
              Салон переезжает — скоро откроемся по новому адресу
              и первыми расскажем о нём в наших каналах.
            </p>
          </div>
        </div>

        <!-- Режим работы + соцсети -->
        <div>
          <h4 class="label text-[10px] text-accent mb-5">Режим работы</h4>
          <p class="body text-sm text-[#6B4F5A] mb-2">Ежедневно</p>
          <p class="headline text-2xl text-[#1A1A2E] mb-8">10:00 — 22:00</p>

          <!-- Кнопки соцсетей — фирменные стили -->
          <div class="flex flex-col gap-2.5">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="label inline-flex items-center gap-2.5 rounded-xl px-4 py-3 text-xs text-white transition-transform duration-300 hover:scale-[1.03]"
              :style="`background: ${social.gradient}; box-shadow: ${social.shadow}`"
            >
              <span class="leading-none" v-html="social.icon" />
              {{ social.cta }}
            </a>
          </div>
        </div>
      </div>

      <!-- QR-коды -->
      <div class="py-12 border-b border-[#E91E8C]/10">
        <h4 class="label text-[10px] text-accent text-center mb-8">Мы в социальных сетях</h4>
        <div class="flex flex-wrap justify-center gap-10">
          <div
            v-for="social in socialLinks"
            :key="social.name"
            class="text-center"
          >
            <a :href="social.href" target="_blank" rel="noopener noreferrer" class="block group">
              <div
                class="w-24 h-24 bg-white p-1.5 rounded-2xl mb-3 mx-auto transition-all duration-300 group-hover:shadow-[0_8px_32px_rgba(233,30,140,0.2)]"
                style="box-shadow: 0 4px 20px rgba(233,30,140,0.1); border: 1px solid rgba(233,30,140,0.1)"
              >
                <ClientOnly>
                  <QRCodeImage :url="social.href" :size="86" />
                  <template #fallback>
                    <div class="w-full h-full bg-gray-100 animate-pulse rounded-lg" />
                  </template>
                </ClientOnly>
              </div>
              <p class="label text-[10px] text-muted group-hover:text-accent transition-colors">
                {{ social.name }}
              </p>
            </a>
          </div>
        </div>
      </div>

      <!-- Нижний блок -->
      <div class="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="body text-xs text-muted text-center md:text-left">
          © {{ new Date().getFullYear() }} Камшук Бьюти. Все права защищены
        </p>
        <div class="flex flex-wrap gap-5 justify-center">
          <NuxtLink to="/privacy" class="body text-xs text-muted hover:text-accent transition-colors">
            Политика конфиденциальности
          </NuxtLink>
          <NuxtLink to="/terms" class="body text-xs text-muted hover:text-accent transition-colors">
            Согласие на обработку ПД
          </NuxtLink>
        </div>
      </div>

      <div class="pb-24 space-y-1 text-center">
        <p class="body text-[11px] text-muted">
          ИП Камшук Анастасия Сергеевна · ИНН 234106350800 · ОГРНИП 324237500477725
        </p>
        <p class="body text-[10px] text-muted">
          Реклама. Рекламодатель: ИП Камшук Анастасия Сергеевна (ОГРНИП 324237500477725).
          Ссылки на социальные сети являются рекламными материалами.
        </p>
      </div>

    </div>
  </footer>
</template>

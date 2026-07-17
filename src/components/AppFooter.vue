<script setup lang="ts">
const socialLinks = [
  {
    name: 'ВКонтакте',
    href: 'https://vk.com/kamshuk_beauty',
    icon: 'vk',
    qr: 'https://vk.com/kamshuk_beauty',
  },
  {
    name: 'Telegram',
    href: 'https://t.me/offi_nesquik',
    icon: 'telegram',
    qr: 'https://t.me/offi_nesquik',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/message/GAZGRNJFGZWUC1',
    icon: 'whatsapp',
    qr: 'https://wa.me/message/GAZGRNJFGZWUC1',
  },
  {
    name: 'MAX',
    href: 'https://max.ru/u/f9LHodD0cOJhZWcjFtzBOFNlcS0w2RVemO55MmCDgD_nHgsPEPAhlJp3i2M',
    icon: 'max',
    qr: 'https://max.ru/u/f9LHodD0cOJhZWcjFtzBOFNlcS0w2RVemO55MmCDgD_nHgsPEPAhlJp3i2M',
  },
]
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
              src="/images/logo.jpg"
              alt="Логотип Камшук Бьюти"
              class="h-16 w-16 rounded-full object-cover ring-2 ring-[#E91E8C]/20 group-hover:ring-[#E91E8C]/45 transition-all duration-300"
              style="box-shadow: 0 4px 20px rgba(233,30,140,0.15)"
            />
            <div>
              <p class="headline text-lg text-pink-gradient leading-none mb-1">Камшук Бьюти</p>
              <p class="body text-xs text-[#B08898]">Студия красоты · Москва</p>
            </div>
          </NuxtLink>
          <p class="body text-sm text-[#6B4F5A] leading-relaxed mb-6">
            Премиальная студия красоты в Москве. Индивидуальный подход и безупречное качество.
          </p>
          <!-- Иконки соцсетей — iOS стиль -->
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              style="background: rgba(233,30,140,0.08); border: 1px solid rgba(233,30,140,0.15)"
            >
              <!-- ВКонтакте -->
              <svg v-if="social.icon === 'vk'" class="text-[#E91E8C]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm2.92 13.68h-1.6c-.6 0-.79-.48-1.88-1.58-1-.93-1.43-.93-1.57-.93-.17 0-.22.05-.22.29v1.44c0 .2-.07.29-.72.29-1.05 0-2.2-.64-3.05-1.84-1.25-1.73-1.58-3.02-1.58-3.28 0-.14.05-.26.29-.26h1.6c.21 0 .29.1.37.33.41 1.17 1.09 2.19 1.37 2.19.1 0 .15-.05.15-.32V9.73c-.03-.79-.46-1.56-.46-1.56-.1-.14.07-.25.22-.25h2.52c.17 0 .24.09.24.26v3.29c0 .17.08.24.12.24.1 0 .19-.07.38-.26.59-.66 1.01-1.67 1.01-1.67.06-.12.17-.24.38-.24h1.6c.48 0 .59.24.48.57-.2.91-2.15 3.08-2.15 3.08-.17.27-.24.39 0 .67.17.22.74.72 1.12 1.15.69.74 1.22 1.37 1.36 1.79.12.41-.1.62-.53.62z"/>
              </svg>
              <!-- Telegram -->
              <svg v-if="social.icon === 'telegram'" class="text-[#E91E8C]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.56-.44.7-.9.44l-2.5-1.84-1.2 1.16c-.13.13-.25.25-.51.25l.18-2.56 4.65-4.2c.2-.18-.04-.28-.31-.1L7.16 14.6l-2.46-.77c-.53-.17-.54-.53.12-.78l9.62-3.71c.44-.16.83.1.2.46z"/>
              </svg>
              <!-- WhatsApp -->
              <svg v-if="social.icon === 'whatsapp'" class="text-[#E91E8C]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              <!-- MAX -->
              <svg v-if="social.icon === 'max'" class="text-[#E91E8C]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Навигация -->
        <div>
          <h4 class="label text-[10px] text-[#E91E8C] mb-5">Услуги</h4>
          <div class="space-y-2">
            <NuxtLink to="/manikyur" class="body text-sm text-[#6B4F5A] hover:text-[#E91E8C] transition-colors block">Маникюр</NuxtLink>
            <NuxtLink to="/pedikyur" class="body text-sm text-[#6B4F5A] hover:text-[#E91E8C] transition-colors block">Педикюр</NuxtLink>
            <NuxtLink to="/naraschivanie-resnic" class="body text-sm text-[#6B4F5A] hover:text-[#E91E8C] transition-colors block">Наращивание ресниц</NuxtLink>
            <NuxtLink to="/brovi" class="body text-sm text-[#6B4F5A] hover:text-[#E91E8C] transition-colors block">Брови</NuxtLink>
            <NuxtLink to="/makiyazh" class="body text-sm text-[#6B4F5A] hover:text-[#E91E8C] transition-colors block">Макияж</NuxtLink>
            <NuxtLink to="/obuchenie" class="body text-sm text-[#6B4F5A] hover:text-[#E91E8C] transition-colors block">Обучение</NuxtLink>
          </div>
          <h4 class="label text-[10px] text-[#E91E8C] mt-6 mb-3">Статьи</h4>
          <NuxtLink to="/blog" class="body text-sm text-[#6B4F5A] hover:text-[#E91E8C] transition-colors block">Блог о красоте</NuxtLink>
        </div>

        <!-- Контакты -->
        <div>
          <h4 class="label text-[10px] text-[#E91E8C] mb-5">Контакты</h4>
          <div class="space-y-3">
            <a href="tel:+79771075005"
              class="body text-sm text-[#6B4F5A] hover:text-[#E91E8C] transition-colors block">
              +7 (977) 107-50-05
            </a>
            <a href="https://wa.me/message/GAZGRNJFGZWUC1"
              target="_blank" rel="noopener noreferrer"
              class="body text-sm text-[#6B4F5A] hover:text-[#E91E8C] transition-colors block">
              WhatsApp
            </a>
            <a href="https://t.me/offi_nesquik"
              target="_blank" rel="noopener noreferrer"
              class="body text-sm text-[#6B4F5A] hover:text-[#E91E8C] transition-colors block">
              Telegram @offi_nesquik
            </a>
            <p class="body text-sm text-[#B08898] pt-2">
              г. Москва, Коммунарка<br />
              ул. Александры Монаховой 43/1<br />
              Здание SoiSoul, 1 этаж
            </p>
          </div>
        </div>

        <!-- Режим работы + MAX -->
        <div>
          <h4 class="label text-[10px] text-[#E91E8C] mb-5">Режим работы</h4>
          <p class="body text-sm text-[#6B4F5A] mb-2">Ежедневно</p>
          <p class="headline text-2xl text-[#1A1A2E] mb-8">10:00 — 22:00</p>

          <!-- Ссылка на MAX — iOS стиль -->
          <a
            href="https://max.ru/u/f9LHodD0cOJhZWcjFtzBOFNlcS0w2RVemO55MmCDgD_nHgsPEPAhlJp3i2M"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl body text-xs text-[#E91E8C] transition-all duration-300 hover:scale-105"
            style="background: rgba(233,30,140,0.06); border: 1px solid rgba(233,30,140,0.15)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
            Написать нам в MAX
          </a>
        </div>
      </div>

      <!-- QR-коды -->
      <div class="py-12 border-b border-[#E91E8C]/10">
        <h4 class="label text-[10px] text-[#E91E8C] text-center mb-8">Мы в социальных сетях</h4>
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
                  <QRCodeImage :url="social.qr" :size="86" />
                  <template #fallback>
                    <div class="w-full h-full bg-gray-100 animate-pulse rounded-lg" />
                  </template>
                </ClientOnly>
              </div>
              <p class="label text-[10px] text-[#B08898] group-hover:text-[#E91E8C] transition-colors">
                {{ social.name }}
              </p>
            </a>
          </div>
        </div>
      </div>

      <!-- Нижний блок -->
      <div class="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="body text-xs text-[#B08898] text-center md:text-left">
          © {{ new Date().getFullYear() }} Камшук Бьюти. Все права защищены
        </p>
        <div class="flex flex-wrap gap-5 justify-center">
          <NuxtLink to="/privacy" class="body text-xs text-[#B08898] hover:text-[#E91E8C] transition-colors">
            Политика конфиденциальности
          </NuxtLink>
          <NuxtLink to="/terms" class="body text-xs text-[#B08898] hover:text-[#E91E8C] transition-colors">
            Согласие на обработку ПД
          </NuxtLink>
        </div>
      </div>

      <div class="pb-8 space-y-1 text-center">
        <p class="body text-[11px] text-[#B08898]/70">
          ИП Камшук Анастасия Сергеевна · ИНН 234106350800 · ОГРНИП 324237500477725
        </p>
        <p class="body text-[10px] text-[#B08898]/50">
          Реклама. Рекламодатель: ИП Камшук Анастасия Сергеевна (ОГРНИП 324237500477725).
          Ссылки на социальные сети являются рекламными материалами.
        </p>
      </div>

    </div>
  </footer>
</template>

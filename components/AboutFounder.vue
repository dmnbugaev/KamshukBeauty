<template>
  <section id="about" class="py-28 bg-white">
    <div class="container px-6 lg:px-12">

      <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-[1320px] mx-auto">

        <!-- Фото -->
        <div class="lg:col-span-5">
          <div class="relative">
            <!-- Декоративная рамка -->
            <div
              class="absolute -top-5 -left-5 right-10 bottom-10 rounded-3xl"
              style="border: 1.5px solid rgba(233,30,140,0.15)"
            />
            <!-- Декоративный блок позади фото -->
            <div
              class="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl"
              style="background: linear-gradient(135deg, rgba(233,30,140,0.2), rgba(244,141,180,0.15))"
            />
            <!-- Само фото -->
            <div class="relative aspect-[3/4] overflow-hidden rounded-3xl"
              style="box-shadow: 0 24px 80px rgba(233,30,140,0.15), 0 8px 32px rgba(0,0,0,0.08)">
              <img
                src="/images/anastasiya.jpg"
                alt="Анастасия Камшук — основатель студии Камшук Бьюти"
                class="w-full h-full object-cover"
              />
              <!-- Градиент снизу -->
              <div
                class="absolute bottom-0 left-0 right-0 h-1/3"
                style="background: linear-gradient(to top, rgba(194,24,91,0.55), transparent)"
              />
              <!-- Имя на фото -->
              <div class="absolute bottom-6 left-6 right-6">
                <p class="label text-[11px] text-[#F9C5DA] mb-1">Основатель</p>
                <p class="headline text-xl text-white">Анастасия Камшук</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Контент -->
        <div class="lg:col-span-7">
          <div class="section-label mb-6">Наш мастер</div>

          <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E] mb-4">
            Анастасия<br /><span class="text-pink-shimmer">Камшук</span>
          </h2>
          <p class="headline text-base text-[#B08898] mb-8">
            Мастер высшей категории, преподаватель и основатель Камшук Бьюти
          </p>

          <!-- Розовый разделитель -->
          <div class="pink-divider mb-8" />

          <div class="space-y-5 body text-base text-[#6B4F5A] mb-12 max-w-lg leading-loose">
            <p>
              С 2016 года я помогаю женщинам чувствовать себя уверенно и красиво. За
              9 лет — более 1000 довольных гостей, которые возвращаются снова и снова.
              Студия Камшук Бьюти отмечена Яндекс Картами как «Хорошее место 2026».
            </p>
            <p>
              Я убеждена: красота — это не маска, а состояние. Моя задача — раскрыть
              вашу индивидуальность и сделать каждый визит маленьким праздником ✨
            </p>
          </div>

          <!-- Статистика — iOS glass карточки -->
          <div class="grid grid-cols-2 gap-6 mb-14 max-w-sm">
            <div class="glass-pink rounded-2xl p-5">
              <div class="headline text-4xl text-[#E91E8C] mb-1">9+</div>
              <p class="body text-xs text-[#B08898]">Лет в индустрии красоты</p>
            </div>
            <div class="glass-pink rounded-2xl p-5">
              <div class="headline text-4xl text-[#C2185B] mb-1">1000+</div>
              <p class="body text-xs text-[#B08898]">Довольных гостей</p>
            </div>
          </div>

          <!-- Философия — iOS иконки -->
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="item in [
                { title: 'Качество', icon: '💎', iconClass: 'ios-pink', text: 'Только премиальные материалы' },
                { title: 'Подход', icon: '✨', iconClass: 'ios-blush', text: 'Индивидуально к каждому' },
                { title: 'Забота', icon: '🌸', iconClass: 'ios-rose', text: 'Комфорт и уют в студии' },
              ]"
              :key="item.title"
              class="text-center p-4 rounded-2xl card-pink"
            >
              <div :class="['ios-icon mx-auto mb-3', item.iconClass]" style="width:52px; height:52px; border-radius:16px; font-size:1.5rem">
                {{ item.icon }}
              </div>
              <p class="headline text-sm text-[#E91E8C] mb-1">{{ item.title }}</p>
              <p class="body text-xs text-[#B08898]">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<template>
  <section id="about" class="py-28 bg-[#FFFCFA]">
    <div class="container px-6 lg:px-12">

      <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-[1320px] mx-auto">

        <!-- Фото -->
        <div class="lg:col-span-5">
          <div class="relative">
            <!-- Декоративная рамка -->
            <div
              class="absolute -top-5 -left-5 right-10 bottom-10 rounded-3xl"
              style="border: 1.5px solid rgba(200,164,65,0.2)"
            />
            <!-- Декоративный блок позади фото -->
            <div
              class="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl"
              style="background: linear-gradient(135deg, rgba(126,207,222,0.3), rgba(200,164,65,0.2))"
            />
            <!-- Само фото -->
            <div class="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-luxury">
              <img
                src="/images/anastasiya.jpg"
                alt="Анастасия Камшук — основатель студии Камшук Бьюти"
                class="w-full h-full object-cover"
              />
              <!-- Градиент снизу -->
              <div
                class="absolute bottom-0 left-0 right-0 h-1/3"
                style="background: linear-gradient(to top, rgba(26,13,46,0.6), transparent)"
              />
              <!-- Имя на фото -->
              <div class="absolute bottom-6 left-6 right-6">
                <p class="label text-[11px] text-[#C8A441] mb-1">Основатель</p>
                <p class="headline text-xl text-white">Анастасия Камшук</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Контент -->
        <div class="lg:col-span-7">
          <div class="section-label mb-6">Наш мастер</div>

          <h2 class="display text-4xl lg:text-5xl text-[#1A100C] mb-4">
            Анастасия<br /><span class="text-gold">Камшук</span>
          </h2>
          <p class="headline text-base text-[#8A7A74] mb-8">
            Мастер высшей категории, преподаватель и основатель Камшук Бьюти
          </p>

          <!-- Золотой разделитель -->
          <div class="gold-divider mb-8" />

          <div class="space-y-5 body text-base text-[#5C4A44] mb-12 max-w-lg leading-loose">
            <p>
              С 2016 года я посвятила свою жизнь искусству красоты. Камшук Бьюти —
              это воплощение моей мечты создать пространство, где каждый гость
              чувствует заботу, внимание и безупречный сервис.
            </p>
            <p>
              Я верю, что истинная красота начинается с уверенности в себе. Она идёт
              от сердца, когда человек светится изнутри — «сияет». Тогда-то и
              происходят чудеса ✨
            </p>
          </div>

          <!-- Статистика -->
          <div class="grid grid-cols-2 gap-6 mb-14 max-w-sm">
            <div class="glass-gold rounded-2xl p-5">
              <div class="headline text-4xl text-gold mb-1">9+</div>
              <p class="body text-xs text-[#8A7A74]">Лет в индустрии красоты</p>
            </div>
            <div class="glass-sky rounded-2xl p-5">
              <div class="headline text-4xl text-[#4BACC8] mb-1">1000+</div>
              <p class="body text-xs text-[#8A7A74]">Довольных гостей</p>
            </div>
          </div>

          <!-- Философия -->
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="item in [
                { title: 'Качество', icon: '💎', text: 'Только премиальные материалы' },
                { title: 'Подход', icon: '✨', text: 'Индивидуально к каждому' },
                { title: 'Забота', icon: '🌸', text: 'Комфорт и уют в студии' },
              ]"
              :key="item.title"
              class="text-center p-4 rounded-2xl card-luxury"
            >
              <div class="text-2xl mb-2">{{ item.icon }}</div>
              <p class="headline text-sm text-[#C8A441] mb-1">{{ item.title }}</p>
              <p class="body text-xs text-[#8A7A74]">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

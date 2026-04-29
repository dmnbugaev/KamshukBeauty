<script setup lang="ts">
const categories = ['Все', 'Маникюр', 'Ресницы', 'Макияж', 'Брови']

const works = [
  { id: 1, category: 'Маникюр', image: '/images/portfolio/nail_1.jpg' },
  { id: 2, category: 'Ресницы', image: '/images/portfolio/r_1.jpg' },
  { id: 3, category: 'Макияж', image: '/images/portfolio/make_2.jpg' },
  { id: 4, category: 'Брови', image: '/images/portfolio/b_1.jpg' },
  { id: 5, category: 'Маникюр', image: '/images/portfolio/nail_2.jpg' },
  { id: 6, category: 'Макияж', image: '/images/portfolio/make_1.jpg' },
  { id: 7, category: 'Маникюр', image: '/images/portfolio/nail_5.jpg' },
  { id: 8, category: 'Маникюр', image: '/images/portfolio/nail_4.jpg' },
]

const active = ref('Все')
const filtered = computed(() =>
  active.value === 'Все' ? works : works.filter((w) => w.category === active.value)
)
</script>

<template>
  <section id="work" class="py-28" style="background: linear-gradient(180deg, #FFFFFF 0%, #FFF4F9 100%)">
    <div class="container px-6 lg:px-12">

      <!-- Заголовок -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <div class="section-label mb-5">Портфолио</div>
          <h2 class="display text-4xl lg:text-5xl text-[#1A1A2E]">Наши работы</h2>
        </div>
        <!-- Фильтры — iOS pill style -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="[
              'label text-[11px] px-5 py-2.5 rounded-full transition-all duration-300',
              active === cat
                ? 'text-white shadow-[0_4px_20px_rgba(233,30,140,0.3)]'
                : 'bg-white text-[#6B4F5A] hover:border-[#E91E8C] border border-[#F9C5DA] hover:text-[#E91E8C]',
            ]"
            :style="active === cat ? 'background: linear-gradient(135deg, #C2185B, #E91E8C)' : ''"
            @click="active = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Сетка работ -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        <TransitionGroup name="portfolio" tag="div" class="contents">
          <div
            v-for="work in filtered"
            :key="work.id"
            class="aspect-square overflow-hidden group cursor-pointer rounded-3xl relative"
          >
            <img
              :src="work.image"
              :alt="`Работа: ${work.category}`"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <!-- Розовый оверлей -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl"
              style="background: linear-gradient(to bottom, transparent 30%, rgba(194,24,91,0.55) 100%)"
            />
            <!-- Категория — iOS стиль -->
            <div class="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
              <span class="label text-[10px] text-white glass-pink px-3 py-1.5 rounded-full" style="border-color: rgba(255,255,255,0.3)">
                {{ work.category }}
              </span>
            </div>
          </div>
        </TransitionGroup>
      </div>

    </div>
  </section>
</template>

<style scoped>
.portfolio-move,
.portfolio-enter-active,
.portfolio-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.portfolio-enter-from,
.portfolio-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.portfolio-leave-active {
  position: absolute;
}
</style>

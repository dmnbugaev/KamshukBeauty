<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <section
      class="min-h-[70vh] pt-28 pb-20 flex items-center"
      style="background: radial-gradient(ellipse at 80% 20%, rgba(233,30,140,0.08) 0%, transparent 55%), #FFFFFF"
    >
      <div class="container px-6 lg:px-12">
        <div class="max-w-2xl mx-auto text-center">
          <p class="label text-[12px] text-[#E91E8C] mb-4">
            {{ error.statusCode || 500 }}
          </p>
          <h1 class="display text-4xl sm:text-5xl text-[#1A1A2E] mb-6">
            Страница не найдена
          </h1>
          <p class="body text-base sm:text-lg text-[#6B4F5A] mb-10">
            Возможно, ссылка устарела или адрес был введён с ошибкой. Вернитесь на главную страницу и выберите нужную услугу.
          </p>
          <button type="button" class="btn-pink inline-block text-center" @click="handleError">
            На главную
          </button>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

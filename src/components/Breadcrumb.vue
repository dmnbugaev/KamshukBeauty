<script setup lang="ts">
defineProps<{
  items: { label: string; href?: string }[]
}>()
</script>

<template>
  <nav aria-label="Breadcrumb" class="mb-8">
    <ol class="flex items-center flex-wrap gap-2 body text-xs text-[#B08898]">
      <li>
        <NuxtLink to="/" class="hover:text-[#E91E8C] transition-colors">Главная</NuxtLink>
      </li>
      <li v-for="item in items" :key="item.href || item.label" class="flex items-center gap-2">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
        <NuxtLink v-if="item.href" :to="item.href" class="hover:text-[#E91E8C] transition-colors">{{ item.label }}</NuxtLink>
        <span v-else class="text-[#6B4F5A]">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

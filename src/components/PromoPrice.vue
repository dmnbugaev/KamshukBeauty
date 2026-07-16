<script setup lang="ts">
withDefaults(defineProps<{
  oldPrice: string
  newPrice: string
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'right'
  note?: string
}>(), {
  size: 'md',
  align: 'right',
  note: '',
})
</script>

<template>
  <span
    :class="[
      'inline-flex flex-col gap-0.5 leading-none',
      align === 'right' ? 'items-end text-right' : 'items-start text-left',
    ]"
  >
    <span
      :class="[
        'label text-[#B08898] line-through decoration-[#E91E8C]/70',
        size === 'lg' ? 'text-sm' : 'text-[11px]',
      ]"
    >
      {{ oldPrice }}
    </span>
    <span
      :class="[
        'label text-[#E91E8C]',
        size === 'lg' ? 'text-3xl headline text-pink-gradient' : size === 'sm' ? 'text-xs' : 'text-sm',
      ]"
    >
      {{ newPrice }}
    </span>
    <span v-if="note" class="body text-[10px] text-[#B08898] leading-tight">
      {{ note }}
    </span>
  </span>
</template>

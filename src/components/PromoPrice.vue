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

const keepTogether = (value: string) => value.replace(/\s+/g, '\u00A0')
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
        'label text-muted line-through decoration-[#E91E8C]/70',
        size === 'lg' ? 'text-sm' : 'text-[11px]',
      ]"
    >
      {{ keepTogether(oldPrice) }}
    </span>
    <span
      :class="[
        'label text-accent',
        size === 'lg' ? 'text-3xl headline text-pink-gradient' : size === 'sm' ? 'text-xs' : 'text-sm',
      ]"
    >
      {{ keepTogether(newPrice) }}
    </span>
    <span v-if="note" class="body text-[10px] text-muted leading-tight">
      {{ note }}
    </span>
  </span>
</template>

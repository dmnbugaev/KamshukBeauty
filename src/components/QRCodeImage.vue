<script setup lang="ts">
import QRCode from 'qrcode'

const props = defineProps<{
  url: string
  size?: number
}>()

const svgContent = ref('')

onMounted(async () => {
  svgContent.value = await QRCode.toString(props.url, {
    type: 'svg',
    width: props.size || 150,
    margin: 1,
    color: { dark: '#1A1A1A', light: '#FFFFFF' },
  })
})
</script>

<template>
  <div
    v-if="svgContent"
    class="qr-code-wrapper w-full h-full"
    v-html="svgContent"
  />
  <div
    v-else
    class="w-full h-full bg-gray-100 animate-pulse rounded"
  />
</template>

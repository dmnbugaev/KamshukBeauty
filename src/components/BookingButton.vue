<script setup lang="ts">
// Кнопка онлайн-записи. Пока BOOKING_ENABLED = false, вместо ссылки
// на YClients показывает подпись, что запись временно недоступна.
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    variant?: 'pink' | 'outline'
    block?: boolean
  }>(),
  { variant: 'pink', block: false },
)

const { enabled, url, closedTitle, closedNote } = useBookingStatus()
</script>

<template>
  <a
    v-if="enabled"
    v-bind="$attrs"
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    :class="[
      variant === 'pink' ? 'btn-pink' : 'btn-outline-pink',
      block ? 'w-full text-center' : 'inline-block text-center',
    ]"
  >
    <slot>Записаться онлайн</slot>
  </a>

  <div
    v-else
    v-bind="$attrs"
    class="booking-disabled"
    :class="block ? 'w-full' : 'inline-block'"
  >
    <p class="booking-disabled__pill">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        class="shrink-0"
      >
        <rect x="4" y="11" width="16" height="10" rx="2.5" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
      {{ closedTitle }}
    </p>
    <p class="booking-disabled__note">{{ closedNote }}</p>
  </div>
</template>

<style scoped>
.booking-disabled {
  max-width: 100%;
}

.booking-disabled__pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: 100%;
  min-height: 44px;
  padding: 0.9rem 1.6rem;
  border-radius: 100px;
  border: 1.5px dashed rgba(233, 30, 140, 0.32);
  background: rgba(233, 30, 140, 0.06);
  color: #80616f;
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-bold);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.3;
}

.booking-disabled__note {
  margin-top: 0.65rem;
  color: #80616f;
  font-family: var(--font-family-body);
  font-size: 0.8rem;
  line-height: 1.45;
  text-align: center;
}
</style>

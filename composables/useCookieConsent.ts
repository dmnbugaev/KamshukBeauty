export const useCookieConsent = () => {
  const consent = useCookie<string | null>('cookie_consent', {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    default: () => null,
  })

  const accepted = computed(() => consent.value === 'accepted')
  const rejected = computed(() => consent.value === 'rejected')
  const decided = computed(() => consent.value !== null && consent.value !== undefined)

  const accept = () => {
    consent.value = 'accepted'
    if (import.meta.client) {
      localStorage.setItem('cookie_consent', 'accepted')
    }
  }

  const reject = () => {
    consent.value = 'rejected'
    if (import.meta.client) {
      localStorage.setItem('cookie_consent', 'rejected')
    }
  }

  return { consent, accepted, rejected, decided, accept, reject }
}

export interface SocialLink {
  name: string
  /** Что написано на кнопке-действии */
  action: string
  /** Готовая подпись для широкой кнопки */
  cta: string
  /** Короткая подпись-идентификатор, например @offi_nesquik */
  handle: string
  href: string
  /** Основной фирменный цвет соцсети */
  color: string
  /** Фирменный градиент соцсети */
  gradient: string
  /** Мягкая подложка под иконку на светлых фонах */
  softBg: string
  shadow: string
  icon: string
}

export const MAX_URL = 'https://max.ru/join/OqwFZ6CLctjBV93r4HJEsQ8v28Kxw_67U3eqSrwDRdg'
export const TELEGRAM_URL = 'https://t.me/offi_nesquik'

const telegramIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.94 4.35 19.2 17.14c-.2.92-.76 1.13-1.54.71l-4.26-3.14-2.06 1.98c-.23.23-.42.42-.86.42l.3-4.34 7.9-7.14c.34-.3-.08-.47-.53-.17L6.99 11.53 2.8 10.22c-.9-.29-.92-.9.19-1.34l16.9-6.52c.75-.28 1.41.18 1.05 1.99z"/></svg>`

const maxIcon = `<svg width="22" height="22" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M50.76 0c27.53 0 49.12 22.34 49.12 49.89S77.61 99.23 51.02 99.23c-9.43 0-14.01-1.33-21.37-6.54-.5-.36-1.2-.26-1.63.19-5.66 6.04-20.17 10.28-20.83 2.03C7.19 80.53 0 71.18 0 49.61 0 21.3 23.22 0 50.76 0m.77 24.55c-13.07-.68-23.26 8.39-25.51 22.58-1.86 11.75 1.44 26.07 4.26 26.8 1.2.3 4.08-1.9 6.18-3.88.4-.37.99-.44 1.45-.15 3.27 2 6.97 3.5 11.05 3.71 13.42.7 25.3-9.8 26-23.21.71-13.42-10.01-25.14-23.43-25.85"/></svg>`

export const useSocialLinks = (): SocialLink[] => [
  {
    name: 'Telegram',
    action: 'Подписаться',
    cta: 'Telegram — наш канал',
    handle: '@offi_nesquik',
    href: TELEGRAM_URL,
    color: '#229ED9',
    gradient: 'linear-gradient(135deg, #2AABEE 0%, #229ED9 60%, #1B8AC4 100%)',
    softBg: 'rgba(42,171,238,0.10)',
    shadow: '0 6px 20px rgba(34,158,217,0.35)',
    icon: telegramIcon,
  },
  {
    name: 'MAX',
    action: 'Присоединиться',
    cta: 'MAX — написать нам',
    handle: 'Мессенджер MAX',
    href: MAX_URL,
    color: '#7C42FA',
    gradient: 'linear-gradient(135deg, #8D28C8 0%, #7C42FA 45%, #007AFF 100%)',
    softBg: 'rgba(124,66,250,0.10)',
    shadow: '0 6px 20px rgba(124,66,250,0.35)',
    icon: maxIcon,
  },
]

// Онлайн-запись через YClients.
// Салон временно закрыт на переезд — запись отключена по всему сайту.
// Когда салон откроется, верни BOOKING_ENABLED в true: все кнопки
// записи снова станут активными ссылками на YClients.
export const BOOKING_ENABLED = false

export const BOOKING_URL = 'https://n1407035.yclients.com/company/1274992/personal/select-services?o='

export const BOOKING_CLOSED_TITLE = 'Онлайн-запись временно недоступна'

export const BOOKING_CLOSED_NOTE = 'Салон временно закрыт — мы переезжаем. О начале записи расскажем первыми в наших каналах'

export function useBookingStatus() {
  return {
    enabled: BOOKING_ENABLED,
    url: BOOKING_URL,
    closedTitle: BOOKING_CLOSED_TITLE,
    closedNote: BOOKING_CLOSED_NOTE,
  }
}

// Онлайн-запись через YClients.
// Салон открыт по новому адресу (м. Румянцево, ЖК «Тропарёво Парк») — запись включена.
// Чтобы временно отключить запись по всему сайту, поставь BOOKING_ENABLED = false:
// все кнопки записи покажут подпись «Онлайн-запись временно недоступна».
export const BOOKING_ENABLED = true

export const BOOKING_URL = 'https://n1407035.yclients.com/company/1274992/personal/select-services?o='

export const BOOKING_CLOSED_TITLE = 'Онлайн-запись временно недоступна'

export const BOOKING_CLOSED_NOTE = 'Онлайн-запись временно недоступна — позвоните нам или напишите в мессенджер'

export function useBookingStatus() {
  return {
    enabled: BOOKING_ENABLED,
    url: BOOKING_URL,
    closedTitle: BOOKING_CLOSED_TITLE,
    closedNote: BOOKING_CLOSED_NOTE,
  }
}

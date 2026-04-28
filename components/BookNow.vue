<script setup lang="ts">
const form = reactive({
  name: '',
  phone: '',
  pdConsent: false,
})

const submitted = ref(false)
const error = ref('')

const handleSubmit = () => {
  if (!form.pdConsent) {
    error.value = 'Необходимо дать согласие на обработку персональных данных'
    return
  }
  error.value = ''
  submitted.value = true
}
</script>

<template>
  <section id="book" class="py-28 bg-[#FFFCFA]">
    <div class="container px-6 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1320px] mx-auto">

        <!-- Левая часть — форма -->
        <div>
          <div class="section-label mb-6">Запись</div>
          <h2 class="display text-4xl lg:text-5xl text-[#1A100C] mb-4">
            Готовы<br /><span class="text-gold">преобразиться?</span>
          </h2>
          <p class="body text-lg text-[#8A7A74] mb-10">
            Запишитесь на процедуру онлайн или оставьте заявку
            на обратный звонок
          </p>

          <!-- Акция -->
          <div
            class="rounded-2xl px-8 py-6 mb-8"
            style="background: linear-gradient(135deg, rgba(200,164,65,0.1), rgba(126,207,222,0.1)); border: 1.5px solid rgba(200,164,65,0.2)"
          >
            <p class="label text-[11px] text-[#8B6914] mb-2">Специальное предложение</p>
            <p class="headline text-4xl text-gold mb-2">−15%</p>
            <p class="body text-sm text-[#5C4A44]">
              Скидка на все услуги при первом визите
            </p>
          </div>

          <!-- Кнопка онлайн-записи -->
          <a
            href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
            target="_blank"
            rel="noopener noreferrer"
            class="btn-gold inline-block w-full text-center mb-10"
          >
            Записаться онлайн
          </a>

          <!-- Контакты -->
          <div class="flex flex-col sm:flex-row gap-6 mb-10">
            <div>
              <p class="label text-[10px] text-[#8A7A74] mb-1">Телефон</p>
              <a href="tel:+79771075005" class="headline text-lg text-[#1A100C] hover:text-[#C8A441] transition-colors">
                +7 (977) 107-50-05
              </a>
            </div>
            <div>
              <p class="label text-[10px] text-[#8A7A74] mb-1">Режим работы</p>
              <p class="headline text-lg text-[#1A100C]">Ежедневно: 10:00 — 22:00</p>
            </div>
          </div>

          <!-- Форма обратного звонка -->
          <div
            class="rounded-3xl p-7 lg:p-8"
            style="border: 1.5px solid rgba(200,164,65,0.2); background: rgba(251,243,217,0.15)"
          >
            <h3 class="headline text-lg text-[#1A100C] mb-6">Заказать обратный звонок</h3>

            <!-- Успех -->
            <div v-if="submitted" class="glass-gold rounded-2xl p-8 text-center">
              <div class="text-4xl mb-3">✓</div>
              <p class="headline text-base text-[#8B6914] mb-2">Заявка принята!</p>
              <p class="body text-sm text-[#5C4A44]">Мы свяжемся с вами в ближайшее время.</p>
            </div>

            <!-- Форма -->
            <form v-else class="space-y-4" novalidate @submit.prevent="handleSubmit">
              <div>
                <label for="callback-name" class="label text-[10px] text-[#8A7A74] mb-2 block">
                  Ваше имя
                </label>
                <input
                  id="callback-name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Анастасия"
                  class="w-full px-5 py-3.5 rounded-xl body text-sm text-[#1A100C] bg-white transition-all duration-300"
                  style="border: 1.5px solid rgba(200,164,65,0.2); outline: none"
                  @focus="($event.target as HTMLInputElement).style.borderColor = '#C8A441'"
                  @blur="($event.target as HTMLInputElement).style.borderColor = 'rgba(200,164,65,0.2)'"
                />
              </div>
              <div>
                <label for="callback-phone" class="label text-[10px] text-[#8A7A74] mb-2 block">
                  Номер телефона
                </label>
                <input
                  id="callback-phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  class="w-full px-5 py-3.5 rounded-xl body text-sm text-[#1A100C] bg-white transition-all duration-300"
                  style="border: 1.5px solid rgba(200,164,65,0.2); outline: none"
                  @focus="($event.target as HTMLInputElement).style.borderColor = '#C8A441'"
                  @blur="($event.target as HTMLInputElement).style.borderColor = 'rgba(200,164,65,0.2)'"
                />
              </div>

              <!-- Согласие на ПД -->
              <div class="flex items-start gap-3 pt-1">
                <input
                  id="pd-consent"
                  v-model="form.pdConsent"
                  type="checkbox"
                  class="mt-1 w-4 h-4 shrink-0 cursor-pointer rounded"
                  style="accent-color: #C8A441"
                />
                <label for="pd-consent" class="body text-xs text-[#8A7A74] cursor-pointer leading-relaxed">
                  Я даю согласие на обработку моих персональных данных
                  в соответствии с Федеральным законом № 152‑ФЗ «О персональных данных».
                  <NuxtLink to="/privacy" class="text-[#C8A441] hover:underline">
                    Политика конфиденциальности
                  </NuxtLink>
                </label>
              </div>

              <p v-if="error" class="body text-xs text-red-500 pt-1">{{ error }}</p>

              <button
                type="submit"
                class="w-full btn-gold mt-2"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>

        <!-- Правая часть — фото -->
        <div class="hidden lg:block">
          <div class="relative">
            <!-- Декоративная рамка -->
            <div
              class="absolute -top-4 -right-4 bottom-10 left-10 rounded-3xl"
              style="border: 1.5px solid rgba(126,207,222,0.25)"
            />
            <div class="aspect-[3/4] overflow-hidden rounded-3xl shadow-luxury">
              <img
                src="/images/book.jpg"
                alt="Запись в Камшук Бьюти"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

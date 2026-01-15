import React from "react";
import {
  Award,
  BookOpen,
  Gift,
  TrendingUp,
  Users,
  Check,
} from "lucide-react@0.487.0";

const mainCourses = [
  {
    title: "Мастер маникюра",
    duration: "3 дня",
    price: "35 000 ₽",
    description:
      "Авторская техника создания быстрого и качественного маникюра",
  },
  {
    title: "Мастер педикюра",
    duration: "2 дня",
    price: "28 000 ₽",
    description: "Аппаратный, COMBI и SMART-педикюр",
  },
];

const packages = [
  {
    title: "Эксперт",
    subtitle: "Мастер ногтевого сервиса",
    duration: "5 дней",
    price: "50 000 ₽",
    includes: "3 дня маникюр + 2 дня педикюр",
  },
  {
    title: "Топ",
    subtitle: "Ногтевого сервиса",
    duration: "7 дней",
    price: "60 000 ₽",
    includes:
      "3 дня маникюр + 2 дня педикюр + 2 дня моделирование",
    popular: true,
  },
  {
    title: "VIP",
    subtitle: "Ногтевого сервиса",
    duration: "9 дней",
    price: "70 000 ₽",
    includes:
      "3 дня маникюр + 2 дня педикюр + 2 дня моделирование + 2 дня верхние формы",
  },
];

const manikurProgram = [
  "Постановка руки на работу с аппаратом",
  "Постановка руки на работу с режущими инструментами",
  "Классический (обрезной) маникюр",
  "Аппаратный маникюр",
  "Комбинированный маникюр",
  "Европейский маникюр, японский маникюр, бразильский маникюр",
  "Мужской маникюр, детский маникюр",
  "SPA-маникюр, парафинотерапия и массаж рук",
  "Основы дезинфекции и стерилизации",
  "Деловая культура и этика общения с гостями студии",
  "Изучение анатомии и физиологии кожи, ногтей",
  "Материаловедение",
  "Обзор и подбор фрез под различные типы кутикулы",
  "Снятие старого материала",
  "Ремонт ногтей",
  "Выравнивание и укрепление ногтевой пластины",
  "Покрытие под кутикулу гель-лаком",
  "Дизайн ногтей",
  "Идеальные блики",
];

const pedikurProgram = [
  "Аппаратный / COMBI-педикюр",
  "SMART-педикюр",
];

const benefits = [
  {
    icon: Users,
    title: "Профессионального инструктора",
    text: "Обучение от мастера с 6+ летним опытом",
  },
  {
    icon: BookOpen,
    title: "Рабочие тетради",
    text: "Готовые тетради с иллюстрациями и пояснениями",
  },
  {
    icon: TrendingUp,
    title: "Максимум практики",
    text: "Работа на моделях под контролем преподавателя",
  },
  {
    icon: Gift,
    title: "Набор мастера в подарок",
    text: "Стартовый набор мастера стоимостью 5000 ₽ в подарок",
  },
  {
    icon: Award,
    title: "Портфолио работ",
    text: "В процессе обучения мы показываем, как фотографировать работы для успешного портфолио",
  },
  {
    icon: Check,
    title: "Материалы",
    text: "Все материалы, расходники и оборудование выдаются школой",
  },
];

const afterTraining = [
  "Сертификаты",
  "Трудоустройство",
  "Высокий доход",
  "Удовольствие от работы",
];

export default function Training() {
  return (
    <section id="training" className="py-32">
      <div className="container px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <p className="label text-xs text-[#D81B60] mb-4">
            Обучение
          </p>
          <h2 className="display text-5xl lg:text-6xl text-[#1A1A1A] mb-8">
            Школа-студия красоты Анастасии Камшук
          </h2>
          <div className="space-y-6 body text-lg text-[#424242]">
            <p>
              Мастер маникюра всегда востребован. А суперский
              мастер всегда популярен и в ресурсе. Спрос на
              данные услуги стремительно растёт. По статистике,
              около 95% женщин считают, что маникюр необходим.
              Всё чаще к специалистам данного профиля обращаются
              мужчины.
            </p>
            <p>
              За время обучения вы узнаете о современной и
              авторской технике создания быстрого и
              качественного маникюра от Анастасии Камшук и
              сможете применять полученные знания на практике.
              Здесь всё чётко и по делу (реальность, без воды и
              прочего).
            </p>
            <p className="headline text-xl text-[#D81B60] italic">
              Знания + опыт + желание + трудолюбие = успех
            </p>
            <p className="headline text-2xl text-[#1A1A1A]">
              Наша цель — ваш успех в профессии
            </p>
          </div>
        </div>

        {/* Image - Простая замена */}
        <div className="aspect-[9/16] md:aspect-[21/9] bg-[#F5F5F5] overflow-hidden mb-32">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-pink-50 to-rose-50">
            <div className="text-center w-full h-full">
              <picture className="w-full h-full flex items-center justify-center">
                {/* Для мобильных устройств (вертикальное фото) */}
                <source 
                  media="(max-width: 767px)"
                  srcSet="/images/obuch1.jpg"
                />
                {/* Для планшетов и десктопов (горизонтальное фото) */}
                <source 
                  media="(min-width: 768px)"
                  srcSet="/images/obuch.png"
                />
                {/* Фолбэк изображение (десктопная версия) */}
                <img 
                  src="/images/obuch.png"
                  alt="Обучение маникюру"
                  className="w-full h-full object-cover md:object-contain"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Программа курса "Мастер маникюра" */}
        <div className="mb-32">
          <h3 className="headline text-4xl text-[#1A1A1A] mb-6">
            Программа курса "Мастер маникюра"
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="headline text-2xl text-[#D81B60]">
                    3 дня - 35 000 ₽
                  </h4>
                </div>
                <p className="body text-lg text-[#424242] mb-6">
                  На курсе вы научитесь работать
                  профессиональными инструментами, выполнять
                  авторский "ровный срез" кутикулы, работать
                  аппаратом, разберётесь, что такое выравнивание
                  ногтевой пластины (почему его не стоит
                  бояться), которое будет вас слушаться, потому
                  что мастер - это вы. Легко будете создавать
                  идеальные блики, выполнять покрытие гель-лаком
                  "под кутикулу".
                </p>
                <p className="body text-lg text-[#424242]">
                  Уже после окончания курса вы сможете
                  приступить к работе в салоне красоты или
                  работать на себя.
                </p>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {manikurProgram.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="label text-xs text-[#D81B60] flex-shrink-0">
                      {idx + 1}.
                    </span>
                    <p className="body text-base text-[#424242]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Программа курса "Мастер Педикюра" */}
        <div className="mb-32">
          <h3 className="headline text-4xl text-[#1A1A1A] mb-6">
            Программа курса "Мастер Педикюра"
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="headline text-2xl text-[#D81B60]">
                    2 дня - 28 000 ₽
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {pedikurProgram.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="label text-xs text-[#D81B60] flex-shrink-0">
                      {idx + 1}.
                    </span>
                    <p className="body text-base text-[#424242]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Пакетные предложения */}
        <div className="mb-32">
          <h3 className="headline text-4xl text-[#1A1A1A] mb-12">
            Пакетное предложение
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`border-2 p-8 relative ${
                  pkg.popular
                    ? "border-[#D81B60]"
                    : "border-[#F5F5F5]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D81B60] text-white px-4 py-1">
                    <span className="label text-xs">
                      Популярный
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h4 className="headline text-2xl text-[#D81B60] mb-1">
                    "Эксперт, {pkg.title}-мастер ногтевого
                    сервиса"
                  </h4>
                </div>
                <p className="label text-xs text-[#757575] mb-2">
                  {pkg.duration}
                </p>
                <p className="headline text-4xl text-[#1A1A1A] mb-6">
                  {pkg.price}
                </p>
                <p className="body text-sm text-[#424242]">
                  Базовый курс {pkg.duration} ({pkg.includes})
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Обучаясь у нас, вы получаете */}
        <div className="mb-32 bg-[#FAFAFA] px-8 lg:px-16 py-16">
          <h3 className="headline text-4xl text-[#1A1A1A] mb-12 text-center">
            Обучаясь у нас, вы получаете:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                  <benefit.icon
                    className="text-[#D81B60]"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="headline text-lg text-[#1A1A1A] mb-2">
                    {idx + 1}. {benefit.title}
                  </h4>
                  <p className="body text-sm text-[#424242]">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* После обучения вас ждёт */}
        <div className="mb-20">
          <h3 className="headline text-4xl text-[#1A1A1A] mb-12 text-center">
            После обучения вас ждёт
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {afterTraining.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white border border-[#F5F5F5] px-6 py-4"
              >
                <Check
                  className="text-[#D81B60] flex-shrink-0"
                  size={24}
                />
                <span className="body text-base text-[#1A1A1A]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center bg-[#FCE4EC] px-12 py-16">
          <h3 className="headline text-3xl text-[#1A1A1A] mb-6">
            Готовы начать обучение?
          </h3>
          <p className="body text-base text-[#424242] mb-8">
            Свяжитесь с нами для уточнения деталей, расписания и
            записи на курс
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79771075005"
              className="inline-block px-10 py-4 bg-[#D81B60] text-white label text-xs hover:bg-[#AD1457] transition-all text-center"
            >
              Позвонить: <br> +7 (977) 107-50-05
            </a>
            <a
              href="https://wa.me/message/GAZGRNJFGZWUC1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border border-[#D81B60] text-[#D81B60] label text-xs hover:bg-white transition-all text-center"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

const prices = [
  {
    category: 'Маникюр & Педикюр',
    items: [
      { name: 'Маникюр без покрытия', price: '1400₽' },
      { name: 'Маникюр комплекс', price: '2700₽' },
      { name: 'Наращивание ногтей', price: '4000₽' },
      { name: 'Смарт педикюр', price: '3500₽' },
    ],
  },
  {
    category: 'Ресницы & Брови',
    items: [
      { name: 'Наращивание ресниц', price: '3300₽' },
      { name: 'Ламинирование ресниц', price: '3000₽' },
      { name: 'Архитектура бровей', price: '1500₽' },
      { name: 'Долговременная укладка + оформление', price: '4000₽' },
    ],
  },
  {
    category: 'Макияж',
    items: [
      { name: 'Дневной', price: '3500₽' },
      { name: 'Вечерний', price: '5000₽' },
      { name: 'Свадебный', price: '8000₽' },
      { name: 'Свадебный + причёска', price: '14000₽' },
    ],
  },
  {
    category: 'Перманентный макияж',
    items: [
      { name: 'Пудровые брови', price: '14000₽' },
      { name: 'Напыление губ', price: '12000₽' },
      { name: 'Стрелка', price: '11000₽' },
      { name: 'Мушка', price: '5000₽' },
    ],
  },
];

export default function PriceList() {
  return (
    <section className="py-32">
      <div className="container px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="label text-xs text-[#D81B60] mb-4">Цены</p>
          <h2 className="display text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
            Прайс-лист
          </h2>
          <p className="body text-lg text-[#424242]">
            Прозрачное ценообразование без скрытых доплат
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {prices.map((section, idx) => (
            <div key={idx}>
              <h3 className="headline text-2xl text-[#1A1A1A] mb-8 pb-4 border-b border-[#F5F5F5]">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline">
                    <span className="body text-base text-[#2E2E2E]">{item.name}</span>
                    <span className="label text-xs text-[#D81B60] ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-[#D81B60] text-[#D81B60] label text-xs hover:bg-[#FCE4EC] transition-all"
          >
            Полный прайс-лист
          </a>
        </div>
      </div>
    </section>
  );
}

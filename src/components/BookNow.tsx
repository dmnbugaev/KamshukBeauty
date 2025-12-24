import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function BookNow() {
  return (
    <section id="book" className="py-32">
      <div className="container px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
          {/* Left */}
          <div>
            <p className="label text-xs text-[#D81B60] mb-4">Запись</p>
            <h2 className="display text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
              Готовы преобразиться?
            </h2>
            <p className="body text-lg text-[#424242] mb-8">
              Запишитесь на процедуру онлайн или свяжитесь с нами любым удобным способом
            </p>

            {/* Promo */}
            <div className="bg-[#FCE4EC] px-8 py-6 mb-8">
              <p className="label text-xs text-[#D81B60] mb-2">Специальное предложение</p>
              <p className="headline text-3xl text-[#D81B60] mb-2">-15%</p>
              <p className="body text-sm text-[#424242]">
                Скидка на все услуги при первом визите
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://n1407035.yclients.com/company/1274992/personal/select-services?o="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-10 py-4 bg-[#D81B60] text-white label text-xs hover:bg-[#AD1457] transition-all text-center mb-8"
            >
              Записаться онлайн
            </a>

            {/* Contact */}
            <div className="space-y-4">
              <div>
                <p className="label text-xs text-[#757575] mb-1">Телефон</p>
                <a href="tel:+79771075005" className="body text-lg text-[#1A1A1A] hover:text-[#D81B60] transition-colors">
                  +7 (977) 107-50-05
                </a>
              </div>
              <div>
                <p className="label text-xs text-[#757575] mb-1">Режим работы</p>
                <p className="body text-base text-[#1A1A1A]">Ежедневно: 10:00 - 22:00</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="aspect-[3/4] bg-[#F5F5F5] overflow-hidden">
            <ImageWithFallback
              src="./images/book.jpg"
              alt="Запись в Kamshuk Beauty"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

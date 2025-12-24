import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
          {/* Left Content */}
          <div className="animate-slide-up">
            <p className="label text-xs text-[#D81B60] mb-6">Студия красоты</p>
            <h1 className="display text-6xl lg:text-7xl xl:text-8xl text-[#1A1A1A] mb-8">
              Kamshuk<br />Beauty
            </h1>
            <p className="body text-lg lg:text-xl text-[#424242] mb-12 max-w-lg">
              Новая студия красоты в Москве. 
              Индивидуальный подход и безупречное качество.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                className="inline-block px-10 py-4 bg-[#D81B60] text-white label text-xs hover:bg-[#AD1457] transition-all text-center"
              >
                Записаться на процедуру
              </a>
              <a
                href="#services"
                className="inline-block px-10 py-4 border border-[#D81B60] text-[#D81B60] label text-xs hover:bg-[#FCE4EC] transition-all text-center"
              >
                Наши услуги
              </a>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
              <div>
                <div className="headline text-3xl text-[#D81B60] mb-1">9+</div>
                <p className="body text-sm text-[#757575]">Лет опыта</p>
              </div>
              <div>
                <div className="headline text-3xl text-[#D81B60] mb-1">1000+</div>
                <p className="body text-sm text-[#757575]">Клиентов</p>
              </div>
              <div>
                <div className="headline text-3xl text-[#D81B60] mb-1">15%</div>
                <p className="body text-sm text-[#757575]">Скидка</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F5]">
              <ImageWithFallback
                src="./images/studio/5.jpg"
                alt="Kamshuk Beauty"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white px-8 py-6 shadow-xl max-w-xs">
              <p className="label text-xs text-[#D81B60] mb-2">Специальное предложение</p>
              <p className="body text-sm text-[#1A1A1A]">
                Скидка 15% на все услуги при первом визите
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

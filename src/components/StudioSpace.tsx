import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const images = [
  { image: './images/studio/4.jpg', title: 'Главный зал' },
  { image: './images/studio/2.jpg', title: 'Процедурная' },
  { image: './images/studio/3.jpg', title: 'Ресепшн' },
  { image: './images/studio/5.jpg', title: 'Зона отдыха' },
];

export default function StudioSpace() {
  return (
    <section className="py-32">
      <div className="container px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="label text-xs text-[#D81B60] mb-4">Пространство</p>
          <h2 className="display text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
            Наша студия
          </h2>
          <p className="body text-lg text-[#424242]">
            Современное пространство, созданное для вашего комфорта и релаксации
          </p>
        </div>

        {/* Main Image */}
        <div className="aspect-[21/9] bg-[#F5F5F5] mb-8 overflow-hidden">
          <ImageWithFallback
            src="./images/studio/1.jpg"
            alt="Kamshuk Beauty Studio"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((item, idx) => (
            <div key={idx} className="aspect-square bg-[#F5F5F5] overflow-hidden group">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Address */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <div className="bg-[#FAFAFA] px-12 py-10">
            <p className="headline text-2xl text-[#1A1A1A] mb-4">Адрес студии</p>
            <p className="body text-base text-[#424242] mb-6">
              Москва, Коммунарка<br />
              ул. Александры Монаховой д.43/1, здание SoiSoul, 1 этаж
            </p>
            <p className="label text-xs text-[#D81B60]">
              Ежедневно: 10:00 - 22:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

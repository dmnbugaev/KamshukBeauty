import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Service {
  title: string;
  description: string;
  image: string;
  price: string;
  link: string;
}

const services: Service[] = [
  {
    title: 'Ногтевой сервис',
    description: 'Комплексный уход за ногтями с использованием премиальных материалов',
    image: './images/4_foto/manik.jpg',
    price: 'от 1400₽',
    link: '#маникюр-педикюр', // Якорная ссылка на раздел
  },
  {
    title: 'Ресницы & Брови',
    description: 'Наращивание, ламинирование и архитектура для выразительного взгляда',
    image: './images/4_foto/resnici_i_brovi.jpg',
    price: 'от 1500₽',
    link: '#ресницы-брови', // Якорная ссылка на раздел
  },
  {
    title: 'Макияж',
    description: 'Дневной, вечерний и свадебный макияж от профессионального визажиста',
    image: './images/4_foto/make.jpg',
    price: 'от 3500₽',
    link: '#макияж', // Якорная ссылка на раздел
  },
  {
    title: 'Обучение',
    description: 'Подробное обучение от профессионалов',
    image: './images/4_foto/obychenie.jpg',
    price: '',
    link: '/services/training', // Обычная ссылка
  },
];

export default function ServicesGrid(): JSX.Element {
  return (
    <section id="services" className="py-32">
      <div className="container px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="label text-xs text-[#D81B60] mb-4">Услуги</p>
          <h2 className="display text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
            Что мы предлагаем
          </h2>
          <p className="body text-lg text-[#424242]">
            Каждая услуга выполняется с безупречным вниманием к деталям 
            и использованием только премиальных материалов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <a 
                href={service.link}
                className="block aspect-[4/3] bg-[#F5F5F5] mb-6 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#D81B60] focus:ring-offset-2"
                aria-label={`Перейти к услуге: ${service.title}`}
                onClick={(e) => {
                  // Для якорных ссылок можно добавить плавную прокрутку
                  if (service.link.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(service.link);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </a>
              <div className="flex justify-between items-start mb-3">
                <h3 className="headline text-3xl text-[#1A1A1A]">{service.title}</h3>
                {service.price && (
                  <span className="label text-xs text-[#D81B60]">{service.price}</span>
                )}
              </div>
              <p className="body text-base text-[#424242]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
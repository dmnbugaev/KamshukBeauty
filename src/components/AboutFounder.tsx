import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AboutFounder() {
  return (
    <section id="about" className="py-32 bg-[#FAFAFA]">
      <div className="container px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-16 items-center max-w-[1400px] mx-auto">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] bg-[#F5F5F5] overflow-hidden">
              <ImageWithFallback
                src="./images/anastasiya.jpg"
                alt="Анастасия Камшук"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <p className="label text-xs text-[#D81B60] mb-4">Основатель</p>
            <h2 className="display text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
              Анастасия Камшук
            </h2>
            <p className="headline text-xl text-[#424242] mb-8">
              Мастер высшей категории, преподаватель и основатель <br /> Kamshuk Beauty
            </p>
            
            <div className="space-y-6 body text-base text-[#424242] mb-12">
              <p>
                С 2016 года я посвятила свою жизнь искусству красоты. Kamshuk Beauty — 
                это воплощение моей мечты создать пространство, где каждый гость 
                чувствует заботу, внимание и безупречный сервис.
              </p>
              <p>
                Я верю, что истинная красота начинается с уверенности в себе. 
                Моя команда и я создаём не просто услуги — мы дарим эмоции и вдохновение, 
                которые остаются с вами навсегда.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-md">
              <div className="border-l-2 border-[#D81B60] pl-6">
                <div className="headline text-4xl text-[#D81B60] mb-2">9+</div>
                <p className="body text-sm text-[#757575]">Лет в индустрии красоты</p>
              </div>
              <div className="border-l-2 border-[#D81B60] pl-6">
                <div className="headline text-4xl text-[#D81B60] mb-2">1000+</div>
                <p className="body text-sm text-[#757575]">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-32 max-w-5xl mx-auto">
          <h3 className="headline text-3xl text-[#1A1A1A] mb-12 text-center">Наша философия</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Качество',
                text: 'Используем только премиальные материалы и профессиональное оборудование',
              },
              {
                title: 'Индивидуальность',
                text: 'Учитываем особенности и пожелания каждого клиента',
              },
              {
                title: 'Забота',
                text: 'Создаём атмосферу доверия и комфорта для каждого гостя',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h4 className="headline text-xl text-[#D81B60] mb-4">{item.title}</h4>
                <p className="body text-sm text-[#424242]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

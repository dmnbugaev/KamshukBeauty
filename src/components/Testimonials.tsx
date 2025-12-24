import React, { useState } from 'react';

const testimonials = [
  {
    text: 'Почти год хожу на маникюр и педикюр к Анастасии, ни на какого другого мастера её не променяю. Её работа - совершенство, блаженство, бальзам для души. Покрытие держится от визита до визита, отношение заботливое, внимательное, подход индивидуальный.',
    author: 'Татьяна',
  },
  {
    text: 'Очень приятная атмосфера, чисто и уютно. Делаю маникюр/педикюр/уход/покрытие у Анастасии. Очень быстро и аккуратно. Профессиональный подход. Результатом очень довольна. Рекомендую.',
    author: 'Елена',
  },
  {
    text: 'Хожу в данную студию на маникюр с ноября 2024 к мастеру Анастасии. Качеством маникюра всегда довольна. Хватает на месяц носки. Во время маникюра не испытываю никакого дискомфорта.',
    author: 'Полина',
  },
  {
    text: 'Замечательный салон! Атмосфера в салоне замечательная, все очень красиво, интерьер действительно сделан с душой. Всё на высшем уровне!',
    author: 'Стася',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-32 bg-[#FAFAFA]">
      <div className="container px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="label text-xs text-[#D81B60] mb-12 text-center">Отзывы</p>
          
          <div className="min-h-[300px] flex flex-col justify-center mb-12">
            <blockquote className="headline text-3xl lg:text-4xl text-[#1A1A1A] italic text-center mb-8">
              "{testimonials[current].text}"
            </blockquote>
            <p className="label text-xs text-[#757575] text-center">
              — {testimonials[current].author}
            </p>
          </div>

          <div className="flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 transition-all ${
                  idx === current ? 'bg-[#D81B60] w-8' : 'bg-[#F8BBD0]'
                }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

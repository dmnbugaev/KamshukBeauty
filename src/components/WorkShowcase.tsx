import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = ['Все', 'Маникюр', 'Ресницы', 'Макияж', 'Брови'];

const works = [
  { id: 1, category: 'Маникюр', image: './images/portfolio/nail_1.jpg' },
  { id: 2, category: 'Ресницы', image: './images/portfolio/r_1.jpg' },
  { id: 3, category: 'Макияж', image: '/images/portfolio/make_2.jpg' },
  { id: 4, category: 'Брови', image: './images/portfolio/b_1.jpg' },
  { id: 5, category: 'Маникюр', image: './images/portfolio/nail_2.jpg' },
  { id: 6, category: 'Макияж', image: './images/portfolio/make_1.jpg' },
  { id: 7, category: 'Маникюр', image: './images/portfolio/nail_5.jpg' },
  { id: 8, category: 'Маникюр', image: './images/portfolio/nail_4.jpg' },
];

export default function WorkShowcase() {
  const [active, setActive] = useState('Все');
  const filtered = active === 'Все' ? works : works.filter(w => w.category === active);

  return (
    <section id="work" className="py-32 bg-[#FAFAFA]">
      <div className="container px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="label text-xs text-[#D81B60] mb-4">Портфолио</p>
          <h2 className="display text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
            Наши работы
          </h2>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 label text-xs transition-all ${
                active === cat
                  ? 'bg-[#D81B60] text-white'
                  : 'bg-white text-[#2E2E2E] hover:bg-[#FCE4EC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((work) => (
            <div key={work.id} className="aspect-square bg-[#F5F5F5] overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={work.image}
                alt={work.category}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

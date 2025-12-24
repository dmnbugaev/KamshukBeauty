import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Top */}
          <div className="grid md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-white/10">
            <div>
              <h3 className="headline text-2xl mb-6">Kamshuk Beauty</h3>
              <p className="body text-sm text-white/70 leading-relaxed">
                Премиальная студия красоты в Москве. Индивидуальный подход и безупречное качество.
              </p>
            </div>
            
            <div>
              <h4 className="label text-xs mb-4">Контакты</h4>
              <div className="space-y-3">
                <a href="tel:+79771075005" className="body text-sm text-white/70 hover:text-white transition-colors block">
                  +7 (977) 107-50-05
                </a>
                <p className="body text-sm text-white/70">
                  Москва, Коммунарка<br />
                  ул. Монаховой 43/1
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="label text-xs mb-4">Режим работы</h4>
              <p className="body text-sm text-white/70">
                Ежедневно<br />
                10:00 - 22:00
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="body text-xs text-white/50">
              © 2025 Kamshuk Beauty. Все права защищены
            </p>
            <div className="flex gap-8">
              <a href="./pdfs/2_5298629869503023510.pdf" target='blank_' className="body text-xs text-white/50 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="./pdfs/2_5301192397315675243.pdf" target='blank_' className="body text-xs text-white/50 hover:text-white transition-colors">
                Согласие на обработку данных
              </a>
            </div>
          </div>
          
          <p className="body text-xs text-white/30 text-center mt-8">
            ИП Камшук Анастасия Сергеевна • ИНН 234106350800 • ОГРНИП 324237500477725
          </p>
        </div>
      </div>
    </footer>
  );
}

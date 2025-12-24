import React from 'react';
import { Phone, MessageCircle, Send, Instagram } from 'lucide-react@0.487.0';

const contacts = [
  { icon: Phone, label: 'Телефон', href: 'tel:+79771075005' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/message/GAZGRNJFGZWUC1' },
  { icon: Send, label: 'Telegram', href: 'https://t.me/offi_nesquik' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/kamshuk_beauty' },
];

export default function ContactInfo() {
  return (
    <section id="contact" className="py-32 bg-[#FAFAFA]">
      <div className="container px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="label text-xs text-[#D81B60] mb-4">Контакты</p>
          <h2 className="display text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
            Свяжитесь с нами
          </h2>
        </div>

        {/* Map */}
        <div className="mb-16 overflow-hidden bg-[#F5F5F5]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A701b24930bd2798acc29157ab7ea2570bde6b311b5ccc1fbcc8da97c7b4be9b4&amp;source=constructor"
            width="100%"
            height="500"
            frameBorder="0"
            title="Карта"
          />
        </div>

        {/* Contacts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-8 bg-white hover:bg-[#FCE4EC] transition-all group"
            >
              <contact.icon className="text-[#D81B60] mb-4 group-hover:scale-110 transition-transform" size={32} />
              <span className="label text-xs text-[#1A1A1A]">{contact.label}</span>
            </a>
          ))}
        </div>

        {/* Address */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="body text-base text-[#424242]">
            Москва, Коммунарка, ул. Александры Монаховой д.43/1<br />
            Здание SoiSoul, 1 этаж
          </p>
        </div>
      </div>
    </section>
  );
}

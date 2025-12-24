import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface LinkItem {
  label: string;
  href: string;
}

export default function Header(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const links: LinkItem[] = [
    { label: 'Услуги', href: '#services' },
    { label: 'Работы', href: '#work' },
    { label: 'О нас', href: '#about' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
      <div className="container px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a 
            href="#home" 
            className="headline text-2xl lg:text-3xl text-[#D81B60]"
            aria-label="Kamshuk Beauty - Главная"
          >
            Kamshuk Beauty
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {links.map((link: LinkItem) => (
              <a
                key={link.href}
                href={link.href}
                className="label text-xs text-[#2E2E2E] hover:text-[#D81B60] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#book"
            className="hidden lg:block px-8 py-3 bg-[#D81B60] text-white label text-xs hover:bg-[#AD1457] transition-all"
            aria-label="Записаться на прием"
          >
            Записаться
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#D81B60] p-2"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-40">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between h-20 px-6 border-b border-gray-100 shrink-0">
              <a 
                href="#home" 
                className="headline text-xl text-[#D81B60]"
                onClick={() => setMenuOpen(false)}
              >
                Kamshuk Beauty
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#D81B60] p-2"
                aria-label="Закрыть меню"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 px-6 py-8 overflow-y-auto">
              <div className="space-y-1">
                {links.map((link: LinkItem) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block label text-base text-[#2E2E2E] hover:text-[#D81B60] transition-colors py-4 border-b border-gray-100"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12">
                <a
                  href="#book"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full px-6 py-4 bg-[#D81B60] text-white label text-sm text-center hover:bg-[#AD1457] transition-all rounded-lg"
                >
                  Записаться
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
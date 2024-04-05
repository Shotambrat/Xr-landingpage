import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Закрываем мобильное меню
      setMobileMenuOpen(false);
      // Плавный скролл к секции
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative">
      <div className="md:w-[700px] w-full mx-auto px-4">
        <div className="flex justify-between items-center w-full">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button type="button" className="outline-none mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <XIcon className="w-8 h-8 text-gray-700" /> : <MenuIcon className="w-8 h-8 text-blue-700" />}
            </button>
          </div>

          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center justify-between w-full space-x-1 font-dela">
            <a href="/" className="py-4 px-2 text-black">Men haqimda</a>
            <a href="#section-four" onClick={() => scrollToSection('section-four')} className="py-4 px-2 text-black">Ixtisoslik</a>
            <a href="#services" onClick={() => scrollToSection('services')} className="py-4 px-2 text-black">Xizmatlar</a>
            <a href="#connect" onClick={() => scrollToSection('connect')} className="py-4 px-2 text-black">Aloqa</a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden font-dela fixed top-0 left-0 h-full z-40 w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <a href="/" className="block py-4 px-4 text-sm text-gray-700 hover:bg-gray-200 mt-24">Men haqimda</a>
        <a href="#section-four" onClick={() => scrollToSection('section-four')} className="block py-4 px-4 text-sm text-gray-700 hover:bg-gray-200">Ixtisoslik</a>
        <a href="#services" onClick={() => scrollToSection('services')} className="block py-4 px-4 text-sm text-gray-700 hover:bg-gray-200">Xizmatlar</a>
        <a href="#connect" onClick={() => scrollToSection('connect')} className="block py-4 px-4 text-sm text-gray-700 hover:bg-gray-200">Aloqa</a>
      </div>
    </nav>
  );
};

export default Navbar;
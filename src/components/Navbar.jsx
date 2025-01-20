import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from '../hook/changeLanguage';


const Navbar = () => {
  const { t , i18n } = useTranslation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setMobileMenuOpen(false);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const { changeLanguage } = useChangeLanguage();


 



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
            <a href="/" className="py-4 px-2 text-black">{t('Headers.about')}</a>
            <a href="#section-four" onClick={() => scrollToSection('section-four')} className="py-4 px-2 text-black">{t('Headers.specialization')}</a>
            <a href="#services" onClick={() => scrollToSection('services')} className="py-4 px-2 text-black">{t('Headers.services')}</a>
            <a href="#connect" onClick={() => scrollToSection('connect')} className="py-4 px-2 text-black">{t('Headers.contact')}</a>
          </div>
         
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden font-dela fixed top-0 left-0 h-full z-40 w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className='flex items-center justify-center mt-[40px]'>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      {/* O'zbek tili */}
      <button
        onClick={() => changeLanguage('uz')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        <span className={`${i18n.language === 'uz' ? 'text-blue-600 ' : 'text-black'}`} style={{ fontSize: '18px' }}>UZ</span>
      </button>

      {/* Ingliz tili */}
      <button
        onClick={() => changeLanguage('ru')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          outline: 'none',
        }}
      >
               <span className={`${i18n.language === 'ru' ? 'text-blue-600 ' : 'text-black'}`} style={{ fontSize: '18px' }}>RU</span>

      </button>
    </div>
            </div>
        <a href="/" className="block py-4 px-4 text-sm text-gray-700 hover:bg-gray-200 mt-[20px]">{t('Headers.about')}</a>
        <a href="#section-four" onClick={() => scrollToSection('section-four')} className="block py-4 px-4 text-sm text-gray-700 hover:bg-gray-200">{t('Headers.specialization')}</a>
        <a href="#services" onClick={() => scrollToSection('services')} className="block py-4 px-4 text-sm text-gray-700 hover:bg-gray-200">{t('Headers.services')}</a>
        <a href="#connect" onClick={() => scrollToSection('connect')} className="block py-4 px-4 text-sm text-gray-700 hover:bg-gray-200">{t('Headers.contact')}</a>
      </div>
    </nav>
  );
};

export default Navbar;
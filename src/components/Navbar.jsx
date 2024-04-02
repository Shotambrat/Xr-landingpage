import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Install heroicons for these


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="">
      <div className="md:w-[700px] w-[70px] mx-auto px-4 self-start">
        <div className="flex justify-between w-full">
          <div className="flex space-x-7 w-full">
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center md:justify-between w-full space-x-1">
              <a href="#" className="py-4 px-2 text-black font-extrabold">Men haqimda</a>
              <a href="#" className="py-4 px-2 text-black font-extrabold">Ixtisoslik</a>
              <a href="#" className="py-4 px-2 text-black font-extrabold">Xizmatlar</a>
              <a href="#" className="py-4 px-2 text-black font-extrabold">Aloqa</a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button type="button" className="outline-none mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <MenuIcon className="w-6 h-6 text-gray-500"/>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} justify-between`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Men haqimda</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Ixtisoslik</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Xizmatlar</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Aloqa</a>
      </div>
    </nav>
  );
};

export default Navbar;
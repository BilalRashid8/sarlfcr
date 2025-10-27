'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/projets', label: 'Réalisations' },
    { href: '/contact', label: 'Contact' },
  ];

  const servicesItems = [
    { href: '/services/maconnerie', label: 'Maçonnerie' },
    { href: '/services/platrerie', label: 'Plâtrerie' },
    { href: '/services/peinture', label: 'Peinture' },
    { href: '/services/sols', label: 'Sols' },
    { href: '/services/menuiserie', label: 'Menuiserie' },
    { href: '/services/agencement', label: 'Agencement' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top bar - only show when scrolled */}
      {isScrolled && (
        <div className="text-white py-2" style={{ backgroundColor: '#3e9dd3' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>09 55 47 51 01</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>contact@sarlfcr.fr</span>
                </div>
              </div>
              <div className="hidden md:block">
                <span>Zone d'intervention : Toute l'Île-de-France</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <img 
              src="/FCR_Logo_Color_Plein_500x500.png" 
              alt="SARL FCR Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.label === 'Réalisations' || item.label === 'Contact' ? null : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-bold transition-colors hover:scale-105 transform ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-[#3e9dd3]' 
                      : 'text-white hover:text-orange-400'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            
            {/* Expertise Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => {
                setTimeout(() => setIsServicesOpen(false), 800);
              }}
            >
              <button
                className={`px-3 py-2 text-sm font-bold transition-all duration-300 flex items-center hover:scale-105 transform ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-[#3e9dd3]' 
                    : 'text-white hover:text-orange-400'
                }`}
              >
                Expertise
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in slide-in-from-top-2 duration-300"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => {
                    setTimeout(() => setIsServicesOpen(false), 600);
                  }}
                >
                  <div className="py-3">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nos Expertises</span>
                    </div>
                    {servicesItems.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group/item flex items-center px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-[#3e9dd3] transition-all duration-200 border-l-4 border-transparent hover:border-[#3e9dd3]"
                      >
                        <span className="flex-1">{service.label}</span>
                        <ChevronDown className="h-3 w-3 rotate-[-90deg] opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" style={{ color: '#3e9dd3' }} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Réalisations after Expertise */}
            <Link
              href="/projets"
              className={`px-3 py-2 text-sm font-bold transition-colors hover:scale-105 transform ${
                isScrolled 
                  ? 'text-gray-800 hover:text-[#3e9dd3]' 
                  : 'text-white hover:text-orange-400'
              }`}
            >
              Réalisations
            </Link>
            
            {/* Contact at the end */}
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-bold transition-colors hover:scale-105 transform ${
                isScrolled 
                  ? 'text-gray-800 hover:text-[#3e9dd3]' 
                  : 'text-white hover:text-orange-400'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <button className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105 transform shadow-lg ${
                isScrolled
                  ? 'text-white hover:bg-orange-500 hover:shadow-xl'
                  : 'bg-white hover:bg-orange-500 hover:text-white hover:shadow-xl'
              }`}
                style={isScrolled ? { backgroundColor: '#3e9dd3' } : { color: '#3e9dd3' }}>
                Nous Contacter
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#3e9dd3] block px-3 py-2 text-base font-bold transition-colors hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Expertise Menu */}
            <div className="px-3 py-2">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="text-gray-700 font-bold mb-2 flex items-center justify-between w-full hover:text-[#3e9dd3] transition-colors"
              >
                Expertise
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 space-y-1 bg-gray-50 rounded-lg p-2 mt-2">
                  {servicesItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-gray-600 hover:text-[#3e9dd3] block py-2 px-3 text-sm font-semibold transition-colors hover:bg-white rounded-md"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="text-white hover:bg-orange-500 w-full mt-4 px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl" style={{ backgroundColor: '#3e9dd3' }}>
                Nous Contacter
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
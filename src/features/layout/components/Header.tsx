'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { Navigation } from './Navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const logoSrc =
    process.env.NEXT_PUBLIC_LOGO_URL ||
    'https://yxdamvwvnbkukcyzcemx.supabase.co/storage/v1/object/public/LOGO/petcom.png';
  const faviconSrc =
    process.env.NEXT_PUBLIC_FAVICON_URL ||
    'https://yxdamvwvnbkukcyzcemx.supabase.co/storage/v1/object/public/LOGO/Favicon.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Branding: Favicon grande + Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src={faviconSrc}
              alt="Icon"
              width={80}
              height={80}
              className="object-contain w-16 h-16 lg:w-20 lg:h-20"
              priority
            />
            <Image
              src={logoSrc}
              alt="PETCOM"
              width={80}
              height={80}
              className="object-contain w-16 h-16 lg:w-20 lg:h-20"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Navigation />
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-petcom-yellow focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon (Mobile) */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            {/* Login Button */}
            <button className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Login</span>
            </button>

            {/* Cart */}
            <Link
              href="/carrito"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-petcom-coral transition-colors" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-petcom-coral text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Navigation mobile onClose={() => setIsMobileMenuOpen(false)} />
            
            {/* Mobile Login Button */}
            <button className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-petcom-yellow rounded-xl font-medium hover:bg-petcom-yellow/90 transition-colors">
              <User className="w-5 h-5" />
              <span>Iniciar Sesión</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

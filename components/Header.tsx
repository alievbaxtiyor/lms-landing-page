'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-primary/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-14 h-14">
              <Image
                src="/images/logo/triangle-outline-svgrepo-com.svg"
                alt="LMS Logo"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <span className="text-3xl font-bold text-primary leading-none">
              LMS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-700 hover:text-primary-dark transition-colors font-medium">
              Xususiyatlar
            </Link>
            <Link href="#integrations" className="text-gray-700 hover:text-primary-dark transition-colors font-medium">
              Integratsiyalar
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary-dark transition-colors font-medium">
              Narxlar
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary-dark transition-colors font-medium">
              Bog'lanish
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Aloqa
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            <Link href="#features" className="text-gray-700 hover:text-primary-dark transition-colors py-2">
              Xususiyatlar
            </Link>
            <Link href="#integrations" className="text-gray-700 hover:text-primary-dark transition-colors py-2">
              Integratsiyalar
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary-dark transition-colors py-2">
              Narxlar
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary-dark transition-colors py-2">
              Bog'lanish
            </Link>
            <Link
              href="#contact"
              className="mt-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-medium text-center"
            >
              Aloqa
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

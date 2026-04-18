'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              LMS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Xususiyatlar
            </Link>
            <Link href="#integrations" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Integratsiyalar
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Narxlar
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Bog'lanish
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Kirish
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
            <Link href="#features" className="text-gray-700 hover:text-green-600 transition-colors py-2">
              Xususiyatlar
            </Link>
            <Link href="#integrations" className="text-gray-700 hover:text-green-600 transition-colors py-2">
              Integratsiyalar
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors py-2">
              Narxlar
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors py-2">
              Bog'lanish
            </Link>
            <Link
              href="/login"
              className="mt-2 px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium text-center"
            >
              Kirish
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

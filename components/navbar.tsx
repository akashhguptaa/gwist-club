"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/gwist-logo.png"
                alt="GWIST Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/about"
                className="text-gray-200 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                About 
              </a>
              <a
                href="/events"
                className="text-gray-200 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features 
              </a>
              <a
                href="/research"
                className="text-gray-200 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Resources 
              </a>
              <a
                href="/contact"
                className="text-gray-200 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-slate-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/95 border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/about"
              className="text-gray-200 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/events"
              className="text-gray-200 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="/research"
              className="text-gray-200 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Resources
            </a>
            <a
              href="/contact"
              className="text-gray-200 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="bg-red-400 hover:bg-red-500 text-white block px-3 py-2 rounded-md text-base font-semibold transition-colors mx-3 mt-4"
            >
              See how it works
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

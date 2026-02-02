"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Refs for RAF and throttling
  const scrollRAF = useRef<number | null>(null);
  const resizeRAF = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Memoized media query check with RAF
  const checkIfMobile = useCallback(() => {
    if (resizeRAF.current) {
      cancelAnimationFrame(resizeRAF.current);
    }

    resizeRAF.current = requestAnimationFrame(() => {
      setIsMobile(window.innerWidth <= 1111);
    });
  }, []);

  // Optimized resize handler with RAF
  useEffect(() => {
    const handleResize = () => {
      if (resizeRAF.current) {
        cancelAnimationFrame(resizeRAF.current);
      }
      resizeRAF.current = requestAnimationFrame(checkIfMobile);
    };

    // Check initially
    checkIfMobile();

    // Add event listener with RAF
    window.addEventListener("resize", handleResize, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeRAF.current) {
        cancelAnimationFrame(resizeRAF.current);
      }
    };
  }, [checkIfMobile]);

  // Optimized scroll handler with RAF and throttling
  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

      if (!ticking.current) {
        if (scrollRAF.current) {
          cancelAnimationFrame(scrollRAF.current);
        }

        scrollRAF.current = requestAnimationFrame(() => {
          setScrolled(lastScrollY.current > 50);
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollRAF.current) {
        cancelAnimationFrame(scrollRAF.current);
      }
    };
  }, []);

  // Memoize navLinks to prevent unnecessary re-renders
  const navLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Events", href: "/events" },
      { name: "Research", href: "/research" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    [],
  );

  // Memoize mobile menu toggle handler
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  // Memoize mobile menu close handler
  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform-gpu will-change-transform ${
        isMobile
          ? "py-2 bg-gray-900 border-b border-gray-800"
          : `transition-all duration-500 ease-in-out ${
              scrolled
                ? "py-2 backdrop-blur-lg bg-gray-400/20 mt-2 border border-gray-800 mx-60 3xl:mx-96 rounded-full shadow-lg shadow-cyan-900/20"
                : "py-4 bg-transparent border-transparent"
            }`
      }`}
    >
      <div
        className={`container mx-auto px-4 transform-gpu will-change-transform ${
          isMobile
            ? "max-w-full"
            : `transition-all duration-500 ease-in-out ${
                scrolled ? "max-w-3xl 3xl:max-w-5xl" : "max-w-6xl 3xl:max-w-7xl"
              }`
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="transform-gpu will-change-transform">
            <Image
              src="/gwist-club/logo.png"
              alt="GWiST - Girls and Women in STEM"
              width={isMobile ? 120 : scrolled ? 140 : 180}
              height={isMobile ? 40 : scrolled ? 46 : 60}
              className={`h-auto transition-all duration-500 ease-in-out ${
                isMobile ? "w-[120px]" : scrolled ? "w-[140px]" : "w-[180px]"
              }`}
              priority
            />
          </Link>

          {isMobile ? (
            <>
              <button
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="p-2 hover:bg-gray-800 rounded-md transition-colors transform-gpu will-change-transform"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-gray-900 py-4 px-4 border-b border-gray-800 transform-gpu will-change-transform">
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-gray-800 hover:text-teal-700 py-2 transform-gpu will-change-transform"
                        onClick={closeMobileMenu}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              )}
            </>
          ) : (
            <nav className="hidden md:flex items-center space-x-8 3xl:space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-600 hover:text-teal-700 transition-all duration-500 ease-in-out transform-gpu will-change-transform ${
                    scrolled ? "text-sm 3xl:text-lg" : "text-base 3xl:text-xl"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

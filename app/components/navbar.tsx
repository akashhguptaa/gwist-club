"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { easeInOut } from "framer-motion";
import { usePathname } from "next/navigation";
import useLogoDocked from "../../hooks/useLogoDocked";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isDocked = useLogoDocked();

  const scrollRAF = useRef<number | null>(null);
  const resizeRAF = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const checkIfMobile = useCallback(() => {
    if (resizeRAF.current) cancelAnimationFrame(resizeRAF.current);
    resizeRAF.current = requestAnimationFrame(() => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (resizeRAF.current) cancelAnimationFrame(resizeRAF.current);
      resizeRAF.current = requestAnimationFrame(checkIfMobile);
    };
    checkIfMobile();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeRAF.current) cancelAnimationFrame(resizeRAF.current);
    };
  }, [checkIfMobile]);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
      if (!ticking.current) {
        if (scrollRAF.current) cancelAnimationFrame(scrollRAF.current);
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
      if (scrollRAF.current) cancelAnimationFrame(scrollRAF.current);
    };
  }, []);

  const navLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Events", href: "/events" },
      { name: "Research", href: "/research" },
      { name: "Contact", href: "/contact" },
    ],
    []
  );

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((p) => !p), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  // ─── SHARED glass animation variants ──────────────────────────────────────
  const glassActive = {
    backdropFilter: "blur(28px) saturate(200%)",
    backgroundColor: "rgba(245, 241, 235, 0.75)",
    boxShadow: "0 8px 40px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
    borderColor: "rgba(255,255,255,0.60)",
    borderWidth: "1px",
    borderStyle: "solid",
  };

  const glassInactive = {
    backdropFilter: "blur(0px) saturate(100%)",
    backgroundColor: "rgba(245,241,235,0)",
    boxShadow: "none",
    borderColor: "rgba(255,255,255,0)",
    borderWidth: "1px",
    borderStyle: "solid",
  };

  // Use a valid Easing string for framer-motion
  // Use a valid Easing function for framer-motion
  const glassTransition = { duration: 0.45, ease: easeInOut };

  // ─── MOBILE ────────────────────────────────────────────────────────────────
  if (isMobile) {
    const mobileGlassActive = scrolled || !isHome;

    return (
      <header className="fixed top-0 left-0 right-0 z-50 p-3">
        <motion.div
          className="rounded-2xl overflow-visible"
          animate={mobileGlassActive ? glassActive : glassInactive}
          transition={glassTransition}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between h-14 px-4">

            {/* Hamburger */}
            <motion.button
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-xl text-gray-800 hover:bg-white/40 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="block"
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="block"
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Centered logo / wordmark */}
            <Link href="/" onClick={closeMobileMenu} className="flex items-center">
              <AnimatePresence mode="wait">
                {isDocked || !isHome ? (
                  <motion.div
                    key="logo-img"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.22 }}
                  >
                    {isHome ? (
                      <motion.div
                        layoutId="gwist-logo"
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                      >
                        <Image
                          src="/logo.png"
                          alt="GWiST"
                          width={100}
                          height={32}
                          className="h-8 w-auto"
                          priority
                        />
                      </motion.div>
                    ) : (
                      <Image
                        src="/logo.png"
                        alt="GWiST"
                        width={100}
                        height={32}
                        className="h-8 w-auto"
                        priority
                      />
                    )}
                  </motion.div>
                ) : (
                  <motion.span
                    key="wordmark"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="text-sm font-semibold uppercase tracking-widest text-gray-800"
                  >
                    GWiST
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Spacer to balance hamburger */}
            <div className="w-9" />
          </div>

          {/* Slide-down nav drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                key="mobile-nav"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="border-t border-white/40 mx-3 mb-1" />
                <div className="px-3 pb-3 flex flex-col gap-0.5">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center py-2.5 px-3 rounded-xl text-sm font-medium text-gray-700 hover:text-teal-700 hover:bg-white/50 transition-all duration-200"
                        onClick={closeMobileMenu}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>
      </header>
    );
  }

  // ─── DESKTOP — HOME PAGE ──────────────────────────────────────────────────
  if (isHome) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <motion.div
          className="container mx-auto max-w-6xl flex items-center justify-between h-16 px-8 rounded-2xl"
          animate={isDocked ? glassActive : glassInactive}
          transition={glassTransition}
        >
          {/* Logo slot — receives the hero logo via layoutId when docked */}
          <div className="flex items-center h-12 w-40 md:w-52">
            <AnimatePresence>
              {isDocked && (
                <motion.div
                  layoutId="gwist-logo"
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    src="/logo.png"
                    alt="GWiST - Girls and Women in STEM"
                    width={140}
                    height={40}
                    className="w-[140px] h-auto"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-teal-700 relative group ${
                  isDocked ? "text-gray-800" : "text-gray-700"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-teal-700 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>
        </motion.div>
      </header>
    );
  }

  // ─── DESKTOP — OTHER PAGES ────────────────────────────────────────────────
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <motion.div
        className="container mx-auto max-w-6xl flex items-center justify-between h-16 px-8 rounded-2xl"
        animate={scrolled ? glassActive : glassInactive}
        transition={glassTransition}
      >
        {/* Logo always visible */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link href="/" className="flex items-center h-12 w-40 md:w-52">
            <Image
              src="/logo.png"
              alt="GWiST - Girls and Women in STEM"
              width={140}
              height={40}
              className="w-[140px] h-auto"
              priority
            />
          </Link>
        </motion.div>

        <nav className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-teal-700 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-teal-700 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
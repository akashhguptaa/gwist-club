"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let initialLogoRect: DOMRect | null = null;

    const updateLogoPosition = () => {
      if (!logoRef.current || !logoContainerRef.current || !taglineRef.current)
        return;

      const scrollY = window.scrollY;
      const startScroll = 50;
      const endScroll = 300;

      // Store initial position on first render
      if (!initialLogoRect && scrollY < startScroll) {
        initialLogoRect = logoContainerRef.current.getBoundingClientRect();
      }

      if (scrollY >= startScroll && initialLogoRect) {
        const progress = Math.min(
          (scrollY - startScroll) / (endScroll - startScroll),
          1,
        );
        const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic

        // Target position (navbar)
        const targetTop = 16;
        const targetLeft = 64;
        const targetScale = 0.32;

        // Calculate movement
        const currentRect = logoContainerRef.current.getBoundingClientRect();
        const translateY = targetTop - currentRect.top;
        const translateX = targetLeft - currentRect.left;
        const scale = 1 - easeProgress * (1 - targetScale);

        // Apply smooth transforms
        logoRef.current.style.transform = `translate(${translateX * easeProgress}px, ${translateY * easeProgress}px) scale(${scale})`;
        logoRef.current.style.zIndex = "60";
        logoRef.current.style.position = "relative";

        // Fade out tagline
        taglineRef.current.style.opacity = `${Math.max(0, 1 - easeProgress * 2)}`;
      } else if (scrollY < startScroll) {
        // Reset
        logoRef.current.style.transform = "translate(0, 0) scale(1)";
        logoRef.current.style.zIndex = "10";
        taglineRef.current.style.opacity = "1";
      }
    };

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateLogoPosition);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener(
      "resize",
      () => {
        initialLogoRect = null;
      },
      { passive: true },
    );
    updateLogoPosition();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#f5f1eb] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute w-[400px] h-[400px] -top-48 -left-48 rounded-full border border-gray-200 opacity-30" />
      <div className="absolute w-[300px] h-[300px] bottom-20 -right-32 rounded-full border border-gray-200 opacity-30" />
      <div className="absolute h-96 w-px top-0 left-1/4 bg-gray-200 opacity-30" />
      <div className="absolute h-64 w-px bottom-0 right-1/3 bg-gray-200 opacity-30" />

      {/* Corner Decorative Circles - #2E3538 */}
      {/* Top Left - Behind logo */}
      <svg
        className="absolute top-0 left-0 w-96 h-96 -translate-x-20 -translate-y-20"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="#136263"
          strokeWidth="1"
          opacity="0.15"
        />
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#136263"
          strokeWidth="1.5"
          opacity="0.2"
        />
      </svg>

      {/* Bottom Right */}
      <svg
        className="absolute bottom-0 right-0 w-[500px] h-[500px] translate-x-32 translate-y-32"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="#136263"
          strokeWidth="1"
          opacity="0.12"
        />
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="#136263"
          strokeWidth="1.5"
          opacity="0.18"
        />
        <circle
          cx="200"
          cy="200"
          r="130"
          fill="none"
          stroke="#136263"
          strokeWidth="1"
          opacity="0.15"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Logo Section */}
          <div
            className="flex justify-center lg:justify-start mt-20"
            ref={logoContainerRef}
          >
            <div
              ref={logoRef}
              style={{
                willChange: "transform",
                transformOrigin: "left top",
              }}
            >
              <Image
                src="/logo.png"
                alt="GWiST - Girls and Women in STEM"
                width={520}
                height={420}
                className="w-96 md:w-[28rem] lg:w-[32rem] h-auto"
                priority
              />
              <p
                ref={taglineRef}
                className="text-center mt-6 text-lg md:text-xl text-gray-600"
                style={{
                  willChange: "opacity",
                  transition: "opacity 0.2s ease-out",
                }}
              >
                Empowering Women Through STEM@Plaksha
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left mt-20">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6 text-gray-900">
              <span className="block text-gray-800">Girls and</span>
              <span className="block text-gray-800">Women in</span>
              <span className="block text-[#0d6d6e]">STEM</span>
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              A Club Initiative at Plaksha University
            </p>

            <p className="text-lg text-gray-500 mb-8 max-w-lg">
              Building an equitable and inclusive ecosystem by nurturing and
              empowering women in Science, Technology, Engineering, and
              Mathematics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/events"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium bg-[#0d6d6e] text-white hover:bg-[#0a5556] transition-colors group"
              >
                Explore Events
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium border-2 border-gray-800 text-gray-800 hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

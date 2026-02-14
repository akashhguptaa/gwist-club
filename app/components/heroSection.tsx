"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import HeroBackground from "./HeroBackground";
import useLogoDocked from "../../hooks/useLogoDocked";

const HeroSection = () => {
  const isDocked = useLogoDocked();

  return (
    <section className="relative min-h-screen flex items-center bg-[#f5f1eb] overflow-hidden">
      <HeroBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LOGO SIDE */}
          <div className="flex justify-center lg:justify-start mt-20">
            <AnimatePresence>
              {!isDocked && (
                <motion.div
                  layoutId="gwist-logo"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  style={{ transformOrigin: "top left" }}
                  className="relative"
                >
                  <Image
                    src="/logo.png"
                    alt="GWiST - Girls and Women in STEM"
                    width={520}
                    height={420}
                    className="w-96 md:w-[28rem] lg:w-[32rem] h-auto"
                    priority
                  />
                  <motion.p
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-center mt-6 text-lg md:text-xl text-gray-600"
                  >
                    Empowering Women Through STEM@Plaksha
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* TEXT SIDE */}
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
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium border-2 border-gray-800 text-gray-800 hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
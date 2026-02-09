import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2E3538] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Half - Logo & Description */}
          <div>
            <div className="mb-4">
              <Image
                src="/gwist-club/logo.png"
                alt="GWiST Logo"
                width={120}
                height={40}
                className="h-auto"
              />
            </div>
            <p className="text-md leading-relaxed text-[#D6C3A9]">
              Girls and Women in STEM at Plaksha University. Building an
              equitable and inclusive ecosystem for women in technology.
            </p>
          </div>

          {/* Right Half - Quick Links & Connect */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-[#D6C3A9] hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/events"
                  className="text-[#D6C3A9] hover:text-white transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="/research"
                  className="text-[#D6C3A9] hover:text-white transition-colors"
                >
                  Research
                </Link>
                <Link
                  href="/about"
                  className="text-[#D6C3A9] hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-[#D6C3A9] hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-4">
                <a
                  href="mailto:gwist@plaksha.edu.in"
                  className="flex items-center gap-2 text-[#D6C3A9] hover:text-white transition-colors"
                >
                  <Mail size={20} />
                  <span>gwist@plaksha.edu.in</span>
                </a>
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D6C3A9] hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D6C3A9] hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#9c9a96]">
            <p>© 2026 GWiST - Plaksha University. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Empowering Women in STEM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

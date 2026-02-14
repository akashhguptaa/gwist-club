import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Mail, Sparkles, Users, TrendingUp } from "lucide-react";

const ContactPage = () => {
  const contacts = [
    {
      name: "Mishika Sood",
      role: "President",
      email: "mishika.sood.ug23@plaksha.edu.in",
      initial: "M",
    },
    {
      name: "Tisha Bhavsar",
      role: "Core",
      email: "tisha.bhavsar.ug23@plaksha.edu.in",
      initial: "T",
    },
  ];

  const benefits = [
    { label: "Leadership Opportunities", icon: <TrendingUp size={16} /> },
    { label: "Networking", icon: <Users size={16} /> },
    { label: "Skill Development", icon: <Sparkles size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <Navbar />

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Hero heading */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0d6d6e] font-medium mb-4">
              Get Involved
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
              Join the Movement
            </h1>
            <div className="mt-6 w-16 h-px bg-[#0d6d6e] mx-auto" />
            <p className="mt-8 text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Together, we can create an ecosystem where women in STEM thrive,
              lead, and inspire the next generation.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm border border-white/80 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Subtle teal glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d6d6e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0d6d6e] flex items-center justify-center mb-6 shadow-md">
                    <span className="text-white text-xl font-semibold">
                      {contact.initial}
                    </span>
                  </div>

                  {/* Name + role */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-[#0d6d6e] font-medium uppercase tracking-wider mb-6">
                    {contact.role}
                  </p>

                  {/* Email button */}
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#f5f1eb] hover:bg-[#0d6d6e] hover:text-white text-gray-600 text-sm font-medium transition-all duration-300 group/btn"
                  >
                    <Mail size={15} className="shrink-0" />
                    <span className="truncate">{contact.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Why Join + Stay Connected row */}
          <div className="grid md:grid-cols-5 gap-6">

            {/* Why Join — 2 cols */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-white/80">
              <h2 className="text-2xl font-serif font-light text-gray-900 mb-3">
                Why Join?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-7">
                Be part of a vibrant, supportive community dedicated to
                empowering women in STEM.
              </p>
              <div className="flex flex-col gap-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 bg-[#f5f1eb] rounded-xl text-sm font-medium text-gray-700"
                  >
                    <span className="text-[#0d6d6e]">{benefit.icon}</span>
                    {benefit.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Stay Connected — 3 cols */}
            <div className="md:col-span-3 relative bg-[#0d6d6e] rounded-3xl p-8 shadow-sm overflow-hidden flex flex-col justify-between">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/5" />

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
                  Stay in Touch
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-white leading-snug mb-4">
                  Stay Connected
                </h2>
                <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                  Be part of a supportive community working towards gender
                  equity in STEM fields.
                </p>
              </div>

              <div className="relative mt-8">
                <a
                  href="mailto:womeninstem@plaksha.edu.in"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-[#0d6d6e] font-semibold text-sm hover:bg-white/90 transition-colors shadow-md"
                >
                  <Mail size={18} />
                  womeninstem@plaksha.edu.in
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
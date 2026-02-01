import React from "react";
import Navbar from "../../components/navbar";
import Footer from "@/components/footer";
import { Mail, Phone } from "lucide-react";

const ContactPage = () => {
  const contacts = [
    {
      name: "Riya Sharma",
      role: "President",
      phone: "9876543210",
    },
    {
      name: "Pragya Wasan",
      role: "TLP",
      phone: "9654394246",
    },
  ];

  const benefits = [
    "Leadership Opportunities",
    "Networking",
    "Skill Development",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Join the Movement Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 mb-12 text-center max-w-5xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900">
              Join the Movement
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Together, we can create an ecosystem where women in STEM thrive,
              lead, and inspire the next generation.
            </p>
          </div>

          {/* Contact Info and Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="bg-[#0d6d6e] rounded-2xl p-8 text-white"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{contact.name}</h3>
                      <p className="text-white/80">{contact.role}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2 text-lg hover:text-white/80 transition-colors"
                  >
                    <Phone size={20} />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Why Join Section */}
            <div className="bg-[#f5f1eb] rounded-2xl p-8">
              <h2 className="text-3xl font-serif font-light mb-6 text-gray-900">
                Why Join?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Be part of a vibrant, supportive community dedicated to
                empowering women in STEM.
              </p>
              <div className="flex flex-wrap gap-3">
                {benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-white rounded-full text-gray-800 font-medium shadow-sm"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stay Connected Section */}
          <div className="bg-[#2E3538] rounded-3xl p-12 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-white">
              Stay Connected
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              Be part of a supportive community working towards gender equity in
              STEM fields.
            </p>
            <a
              href="mailto:gwist@plaksha.edu.in"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-lg"
            >
              <Mail size={24} />
              <span>Contact us for more information</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;

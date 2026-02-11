"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "@/components/footer";
import { Calendar, MapPin, Clock, Users, Sparkles } from "lucide-react";
import eventsData from "@/data/events.json";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: "workshop" | "talk" | "flagship" | "networking";
  attendees?: number;
  highlight?: boolean;
  imagePath?: string;
  registrationLink?: string;
}

// Fallback images for each category if no imagePath is provided
const categoryImages = {
  workshop: "/images/events/workshop-default.jpg",
  talk: "/images/events/talk-default.jpg",
  flagship: "/images/events/flagship-default.jpg",
  networking: "/images/events/networking-default.jpg",
};

export default function EventsPage() {
  const [filter, setFilter] = useState<string>("all");

  const events = eventsData.events as Event[];

  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.category === filter);

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <Navbar />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0d6d6e] opacity-[0.07] rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#2E3538] opacity-[0.05] rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D6C3A9] opacity-[0.04] rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-[#0d6d6e]/20">
              <Sparkles className="w-4 h-4 text-[#0d6d6e]" />
              <span className="text-sm font-medium text-gray-700">
                Upcoming Events & Workshops
              </span>
            </div>
            
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-[#2E3538] mb-6 leading-tight">
              Let's Learn,
              <br />
              <span className="italic text-[#0d6d6e]">Grow & Connect</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl">
              Workshops, talks, and experiences designed to empower the next
              generation of women leaders in tech.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { key: "all", label: "All"},
                { key: "workshop", label: "Workshops"},
                { key: "talk", label: "Talks"},
                { key: "flagship", label: "Flagship"},
                { key: "networking", label: "Network"},
              ].map(({ key, label}) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`group px-4 py-2 rounded-3xl text-sm font-semibold transition-all duration-300 ${
                    filter === key
                      ? "bg-[#0d6d6e] text-white shadow-lg"
                      : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-32">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-2xl text-gray-500 font-light">
                No events match this filter
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => {
                const imageSrc = event.imagePath || categoryImages[event.category];
                const registrationUrl = event.registrationLink || "#";
                
                return (
                  <div
                    key={event.id}
                    className="group relative h-full"
                  >
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <img 
                          src={imageSrc} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        <div className="absolute top-4 left-4">
                          <span className="text-white text-xs font-bold uppercase tracking-wider select-none drop-shadow-lg">
                            {event.category}
                          </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-serif text-2xl font-bold text-white leading-tight line-clamp-2">
                            {event.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col grow">
                        <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3">
                          {event.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-[#f5f1eb] flex items-center justify-center shrink-0">
                              <Calendar className="w-4 h-4 text-[#0d6d6e]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Date</div>
                              <div className="text-sm font-semibold text-gray-900 truncate">{event.date}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-[#f5f1eb] flex items-center justify-center shrink-0">
                              <Clock className="w-4 h-4 text-[#0d6d6e]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Time</div>
                              <div className="text-sm font-semibold text-gray-900 truncate">{event.time}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-[#f5f1eb] flex items-center justify-center shrink-0">
                              <MapPin className="w-4 h-4 text-[#0d6d6e]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Location</div>
                              <div className="text-sm font-semibold text-gray-900 truncate">{event.location}</div>
                            </div>
                          </div>

                          {event.attendees && (
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-[#f5f1eb] flex items-center justify-center shrink-0">
                                <Users className="w-4 h-4 text-[#0d6d6e]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Attending</div>
                                <div className="text-sm font-semibold text-gray-900">{event.attendees}+</div>
                              </div>
                            </div>
                          )}
                        </div>

                        <a 
                          href={registrationUrl}
                          className="w-full text-[#2E3538] hover:text-[#0d6d6e] py-3.5 px-6 font-semibold flex items-center justify-center group mt-auto transition-colors duration-300"
                        >
                          <span className="relative inline-flex items-center">
                            Register Now
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0d6d6e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#2E3538] via-[#1E2528] to-[#2E3538] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0d6d6e] opacity-20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D6C3A9] opacity-10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#D6C3A9]" />
              <span className="text-sm font-medium text-white/90">
                Join Our Community
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Ready to make
              <br />
              <span className="italic text-[#D6C3A9]">your mark?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't just attend events—be part of a movement shaping the future
              of women in technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center px-10 py-5 text-white hover:text-[#D6C3A9] rounded-2xl font-bold text-lg transition-colors duration-300"
              >
                <span className="relative inline-flex items-center">
                  Get in Touch
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
              </a>
              
              <a
                href="/about"
                className="group inline-flex items-center justify-center px-10 py-5 text-white hover:text-[#D6C3A9] rounded-2xl font-bold text-lg transition-colors duration-300"
              >
                <span className="relative inline-flex items-center">
                  Our Story
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
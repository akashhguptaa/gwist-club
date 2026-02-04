"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "@/components/footer";
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles } from "lucide-react";
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
}

// Default images for each category
const categoryImages = {
  workshop: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  talk: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
  flagship: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  networking: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
};

export default function EventsPage() {
  const [filter, setFilter] = useState<string>("all");

  const events = eventsData.events as Event[];

  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.category === filter);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-teal-700 opacity-[0.07] rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 md:w-[500px] md:h-[500px] bg-gray-800 opacity-[0.05] rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[300px] md:h-[300px] bg-amber-200 opacity-[0.04] rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 sm:mb-6 border border-teal-700/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-teal-700" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Upcoming Events & Workshops
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-800 mb-4 sm:mb-6 leading-tight">
              Let's Learn,
              <br />
              <span className="italic text-teal-700">Grow & Connect</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl">
              Workshops, talks, and experiences designed to empower the next
              generation of women leaders in tech.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
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
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    filter === key
                      ? "bg-teal-700 text-white shadow-lg"
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

      {/* Events Grid - Uniform Layout */}
      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20 sm:py-32">
              <div className="text-5xl sm:text-6xl mb-4">🔍</div>
              <p className="text-xl sm:text-2xl text-gray-500 font-light">
                No events match this filter
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredEvents.map((event) => {
                return (
                  <div
                    key={event.id}
                    className="group relative h-full"
                  >
                    <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      {/* Image Header - Fixed Height */}
                      <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
                        <img 
                          src={categoryImages[event.category]} 
                          alt={event.category}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        {/* Category Badge - Text only */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                          <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider select-none drop-shadow-lg">
                            {event.category}
                          </span>
                        </div>

                        {/* Event Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight line-clamp-2">
                            {event.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content - Flexible Height */}
                      <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                          {event.description}
                        </p>

                        {/* Event Details */}
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Date</div>
                              <div className="text-sm font-semibold text-gray-900 truncate">{event.date}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Time</div>
                              <div className="text-sm font-semibold text-gray-900 truncate">{event.time}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Location</div>
                              <div className="text-sm font-semibold text-gray-900 truncate">{event.location}</div>
                            </div>
                          </div>

                          {event.attendees && (
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Attending</div>
                                <div className="text-sm font-semibold text-gray-900">{event.attendees}+</div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* CTA Button - Text only with underline animation */}
                        <button className="w-full py-3 sm:py-3.5 px-4 sm:px-6 font-semibold flex items-center justify-center group mt-auto text-sm sm:text-base text-gray-900">
                          <span className="relative inline-flex items-center">
                            Register Now
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal-700 opacity-20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-amber-200 opacity-10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8 border border-white/20">
              <span className="text-xs sm:text-sm font-medium text-white/90">
                Join Our Community
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 sm:mb-8 leading-tight">
              Ready to make
              <br />
              <span className="italic text-amber-50">your mark?</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't just attend events—be part of a movement shaping the future
              of women in technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300"
              >
                <span className="relative inline-flex items-center">
                  Get in Touch
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
              </a>
              
              <a
                href="/about"
                className="group inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300"
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
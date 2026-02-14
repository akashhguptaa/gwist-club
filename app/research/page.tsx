"use client";

import Footer from "../components/footer";
import { ChevronRight } from "lucide-react";
import React from "react";
import researchProjects from "../data/research-data.json";

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-[#f5f1eb]">
            {/* Research Projects Section */}
            <section className="py-40 relative overflow-hidden">
                {/* Ambient background - improved blending at top */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#0d6d6e] opacity-10 rounded-full blur-[100px] animate-pulse" />
                </div>
                
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    {/* Header */}
                    <div className="text-center mb-36">
                        <h2 className="font-serif text-5xl md:text-6xl font-light text-[#2E3538] mb-8 leading-tight">
                            Research that
                            <span className="italic text-[#0d6d6e]"> empowers</span>,
                            <br />
                            innovation that
                            <span className="italic text-[#D6C3A9]"> transforms</span>
                        </h2>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Explore our ongoing research initiatives designed to break barriers
                            and create opportunities for women in technology
                        </p>
                    </div>

                    {/* Research Timeline */}
                    <div className="space-y-48">
                        {researchProjects.map((project, index) => {
                            // Alternate layout: even indices have image on right, odd on left
                            const imageOnLeft = index % 2 === 1;

                            return (
                                <div 
                                    key={project.id}
                                    className="grid md:grid-cols-2 gap-20 items-center"
                                >
                                    {/* Image - Left side for odd indices */}
                                    {imageOnLeft && (
                                        <div className="relative order-2 md:order-1">
                                            <ImageVisual 
                                                imageUrl={project.imageUrl}
                                                alt={project.title}
                                            />
                                        </div>
                                    )}

                                    {/* Text Content */}
                                    <div className={imageOnLeft ? 'order-1 md:order-2' : ''}>
                                        <span className="text-sm tracking-widest uppercase text-[#0d6d6e] font-medium mb-4 block">
                                            {project.category}
                                        </span>

                                        <h3 className="group relative inline-block font-serif text-4xl font-semibold text-[#2E3538] mb-8 leading-snug">
                                            {project.title}
                                        </h3>

                                        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-md">
                                            {project.description}
                                        </p>

                                        <div className="space-y-2 text-sm text-gray-500 mb-8">
                                            {project.features.map((feature, idx) => (
                                                <p key={idx} className="italic">{feature}</p>
                                            ))}
                                        </div>

                                        <a 
                                            href={project.link}
                                            className="group inline-flex items-center gap-2 text-[#0d6d6e] hover:text-[#2E3538] font-semibold transition-colors duration-300"
                                        >
                                            <span className="relative">
                                                Explore Project
                                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0d6d6e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                            </span>
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>

                                    {/* Image - Right side for even indices */}
                                    {!imageOnLeft && (
                                        <div className="relative">
                                            <ImageVisual 
                                                imageUrl={project.imageUrl}
                                                alt={project.title}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

// Component for image-based visuals
function ImageVisual({ imageUrl, alt }: { imageUrl: string; alt: string }) {
    return (
        <div className="relative w-full h-[340px] rounded-[2rem] overflow-hidden shadow-xl">
            <img 
                src={imageUrl}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
}
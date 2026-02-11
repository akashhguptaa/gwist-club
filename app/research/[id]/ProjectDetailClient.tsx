"use client";

import Footer from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import React from "react";
import Link from "next/link";

type Project = {
    id: string;
    category: string;
    title: string;
    description: string;
    imageUrl: string;
    detailPage?: {
        overview?: string;
        status?: string;
        timeline?: string;
        team?: string;
    };
};

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    return (
        <div className="min-h-screen bg-[#f5f1eb]">
            <section className="relative overflow-hidden pt-32">
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <Link 
                        href="/research"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0d6d6e] mb-16 group transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm">Back</span>
                    </Link>

                    <span className="text-xs uppercase text-gray-400 font-medium mb-8 block" style={{ letterSpacing: '0.2em' }}>
                        {project.category}
                    </span>

                    <h1 className="font-serif text-4xl md:text-5xl font-light text-[#2E3538] mb-6 leading-tight max-w-2xl">
                        {project.title}
                    </h1>

                    <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mb-16 font-light">
                        {project.description}
                    </p>

                    <div className="relative w-full h-[420px] rounded-3xl overflow-hidden mb-24">
                        <img 
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="pb-32">
                <div className="container mx-auto px-6 max-w-3xl">
                    {project.detailPage?.overview && (
                        <div className="mb-20">
                            <h2 className="text-xs uppercase text-gray-400 font-medium mb-6" style={{ letterSpacing: '0.2em' }}>
                                Overview
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-light">
                                {project.detailPage.overview}
                            </p>
                        </div>
                    )}

                    <div className="pt-12 border-t border-gray-200/50">
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <div className="text-xs uppercase text-gray-400 font-medium mb-2" style={{ letterSpacing: '0.2em' }}>
                                    Status
                                </div>
                                <div className="text-sm text-gray-600 font-light">
                                    {project.detailPage?.status || 'Active'}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs uppercase text-gray-400 font-medium mb-2" style={{ letterSpacing: '0.2em' }}>
                                    Timeline
                                </div>
                                <div className="text-sm text-gray-600 font-light">
                                    {project.detailPage?.timeline || '2024'}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs uppercase text-gray-400 font-medium mb-2" style={{ letterSpacing: '0.2em' }}>
                                    Team
                                </div>
                                <div className="text-sm text-gray-600 font-light">
                                    {project.detailPage?.team || '10+ Members'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

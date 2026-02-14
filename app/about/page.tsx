import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import teamData from "../data/final_team.json";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] mt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/70 z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
                    alt="GWiST Team"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-4">
                            About Us
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200">
                            Meet the team behind GWiST
                        </p>
                    </div>
                </div>
            </section>

            {/* Organizational Structure */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-16 text-gray-900">
                        Organizational Structure
                    </h2>

                    {/* Core Team */}
                    <div className="mb-16">
                        <div className="bg-[#0d6d6e] rounded-2xl p-8 mb-6">
                            <h3 className="text-3xl font-semibold text-center text-white">
                                Core Team
                            </h3>
                        </div>
                        <p className="text-center text-gray-600 mb-8">
                            4 Core Members providing direction to the club
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
                            {teamData.coreTeam.map((member, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className="relative w-32 h-32 mb-4">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="rounded-full object-cover border-4 border-[#0d6d6e]"
                                        />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                                    <p className="text-sm text-gray-500">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Advisory Council */}
                        <div>
                            <div className="bg-[#0d6d6e] rounded-2xl p-6 mb-6">
                                <h3 className="text-2xl font-semibold text-center text-white">
                                    Advisory Council
                                </h3>
                            </div>
                            <p className="text-center text-gray-600 mb-8 text-sm">
                                Advisory Council from Plaksha team and faculty to focus on
                                industry partnerships, programming and academic initiatives
                            </p>
                            <div className="grid grid-cols-3 gap-6">
                                {teamData.advisoryCouncil.map((member, index) => (
                                    <div key={index} className="flex flex-col items-center text-center">
                                        <div className="relative w-24 h-24 mb-3">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="rounded-full object-cover border-4 border-[#0d6d6e]"
                                            />
                                        </div>
                                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{member.name}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Design Team */}
                        <div className="mb-16">
                            <div className="bg-[#0d6d6e] rounded-2xl p-6 mb-6">
                                <h3 className="text-2xl font-semibold text-center text-white">
                                    Design Team
                                </h3>
                            </div>
                            <p className="text-center text-gray-600 mb-8 text-sm">
                                The creative minds behind GWiST's visual identity and branding
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {teamData.designTeam.map((member, index) => (
                                    <div key={index} className="flex flex-col items-center text-center">
                                        <div className="relative w-28 h-28 mb-4">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="rounded-full object-cover border-4 border-[#0d6d6e]"
                                            />
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                                        <p className="text-sm text-gray-500">Designer</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Club Members */}
                    <div>
                        <div className="bg-[#0d6d6e] rounded-2xl p-6 mb-6">
                            <h3 className="text-2xl font-semibold text-center text-white">
                                Club Members
                            </h3>
                        </div>
                        <p className="text-center text-gray-600 mb-8 text-sm">
                            Active members participating in workshops, events, and community
                            building activities
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {teamData.clubMembers.map((member, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className="relative w-24 h-24 mb-3">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="rounded-full object-cover border-4 border-[#0d6d6e]"
                                        />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">{member.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;

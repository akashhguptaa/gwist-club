import React from 'react';

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image?: string;
}

const mockEvents: Event[] = [
    {
        id: 1,
        title: "Tech Conference 2024",
        date: "2024-03-15",
        time: "09:00 AM",
        location: "Convention Center",
        description: "Join us for the biggest tech conference of the year featuring industry leaders and cutting-edge innovations."
    },
    {
        id: 2,
        title: "Networking Mixer",
        date: "2024-03-20",
        time: "06:00 PM",
        location: "Downtown Hotel",
        description: "Connect with professionals in your industry and expand your network."
    },
    {
        id: 3,
        title: "Workshop: React Best Practices",
        date: "2024-03-25",
        time: "02:00 PM",
        location: "Online",
        description: "Learn the latest React patterns and best practices from experienced developers."
    }
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Upcoming Events
                    </h1>
                    <p className="text-lg text-gray-600">
                        Discover and join exciting events in your community
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {event.title}
                                </h3>
                                
                                <div className="text-sm text-gray-600 mb-4 space-y-1">
                                    <p className="flex items-center">
                                        <span className="font-medium">Date:</span>
                                        <span className="ml-2">{event.date}</span>
                                    </p>
                                    <p className="flex items-center">
                                        <span className="font-medium">Time:</span>
                                        <span className="ml-2">{event.time}</span>
                                    </p>
                                    <p className="flex items-center">
                                        <span className="font-medium">Location:</span>
                                        <span className="ml-2">{event.location}</span>
                                    </p>
                                </div>

                                <p className="text-gray-700 mb-4">
                                    {event.description}
                                </p>

                                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
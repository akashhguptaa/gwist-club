import React from 'react';

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Research & Development
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Exploring cutting-edge technologies and innovative solutions to drive the future forward.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Artificial Intelligence
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Advancing AI capabilities through machine learning, natural language processing, and computer vision research.
                        </p>
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                            Active Research
                        </span>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Quantum Computing
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Exploring quantum algorithms and their applications in cryptography and optimization problems.
                        </p>
                        <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                            Experimental
                        </span>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Sustainable Technology
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Developing eco-friendly solutions and renewable energy technologies for a sustainable future.
                        </p>
                        <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                            In Development
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Latest Publications
                    </h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h4 className="text-lg font-semibold text-gray-900">
                                Advanced Neural Network Architectures for Real-time Processing
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Published in International Journal of AI Research • 2024
                            </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                            <h4 className="text-lg font-semibold text-gray-900">
                                Quantum-Classical Hybrid Algorithms for Optimization
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Presented at Quantum Computing Conference • 2024
                            </p>
                        </div>
                        <div className="border-l-4 border-yellow-500 pl-4">
                            <h4 className="text-lg font-semibold text-gray-900">
                                Energy-Efficient Computing Systems for IoT Applications
                            </h4>
                            <p className="text-gray-600 text-sm">
                                IEEE Transactions on Sustainable Computing • 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
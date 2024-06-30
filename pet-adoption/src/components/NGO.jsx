import React from 'react';

const NGOHealthcarePage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-purple-600">Animal Rescue Foundation (PETLINK)</h1>
                <p className="text-gray-700">Dedicated to the welfare and protection of animals in need.</p>
            </header>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">About PetLink</h2>
                <p className="text-gray-800">PetLink is dedicated to the welfare and protection of animals in need. Our mission is to rescue abandoned, abused, and neglected animals, providing them with shelter, medical care, and rehabilitation. We work tirelessly to find loving forever homes through adoption programs and promote responsible pet ownership through education and community outreach. ARF also advocates for animal rights and welfare legislation, aiming to create a more compassionate society for all creatures. Join us in making a difference for animals in our community and beyond.</p>
            </section>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
                <ul className="list-disc list-inside text-gray-800">
                    <li>Animal rescue and rehabilitation</li>
                    <li>Adoption programs</li>
                    <li>Community outreach and education</li>
                    <li>Advocacy for animal rights and welfare</li>
                    <li>Medical care for animals in need</li>
                </ul>
            </section>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-gray-800">For more information or to get involved:</p>
                <address className="text-gray-800">
                    Email: bpratyush00@gmail.com<br />
                    Phone: +91 82493 90321<br />
                    Address: Bhubaneswar, Odisha
                </address>
            </section>
            
            <section>
                <h2 className="text-2xl font-semibold mb-4">Our Work in Photos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="https://i.pinimg.com/736x/be/80/6d/be806d7c787b1fa6f1aba8931ecc307c.jpg" alt="ARF Photo 1" className="w-full h-64 object-cover" />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="https://i.pinimg.com/564x/ed/41/17/ed41170b5fa8a5e24d02729a10ae6113.jpg" alt="ARF Photo 2" className="w-full h-64 object-cover" />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="https://i.pinimg.com/564x/f2/93/5c/f2935c3c3c9a43c51b0061a7ad618c86.jpg" alt="ARF Photo 3" className="w-full h-64 object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NGOHealthcarePage;

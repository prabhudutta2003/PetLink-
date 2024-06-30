import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://image.lexica.art/full_webp/03c7f629-86c3-493e-ad67-0270db183d34",
        "https://image.lexica.art/full_webp/69384958-07db-476b-8fa8-8b83396cda2f",
        "https://image.lexica.art/full_webp/0fd81a60-ad1a-4d2c-8d2a-32234a3136d4",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <nav className="navbar" style={{ position: 'relative', backgroundColor: '#bef264' }}>
            <div className="brand" style={{ position: 'relative', width: '80rem', height: '35rem' }}>
                <img
                    src={images[currentIndex]}
                    alt="Brand Logo"
                    style={{ width: '100%', height: '100%' }} // Adjust width and height to cover the container
                />
                <div style={{
                    position: 'absolute',
                    top: '85%', // Center vertically
                    left: '40%', // Center horizontally
                    transform: 'translate(-50%, -50%)', // Center the text box exactly
                    color: '#d97706', // Adjust text color as needed
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Optional: add background color with opacity
                    padding: '3rem',
                    borderRadius: '0.5rem',
                    textAlign: 'center', // Center the text inside the div
                    fontWeight: 'bold',
                    fontSize:'3em'// Make text bold
                }}>
                    <h1 style={{ margin: 0 }}>Unconditional Love Awaits </h1>
                    <p style={{ margin: 0 }}>Adopt a Pet Today</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

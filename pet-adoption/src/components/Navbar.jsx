// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4" style={{ backgroundColor: '#3f3f46' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://img.artpal.com/904471/2-20-6-12-11-26-0m.jpg"
            alt="Logo"
            className="h-10 w-10 mr-4"
          />
          <span className="text-white text-xl font-bold">Pet Adoption</span>
        </div>
        <div className="flex space-x-4">
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">About Us</a>
          <a href="#adopt" className="text-white">Adopt</a>
          <a href="#help" className="text-white">Ways to Help</a>
          <a href="#news" className="text-white">News/Events</a>
          <a href="#resources" className="text-white">Resources</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

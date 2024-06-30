import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AnotherPage from './components/AnotherPage';
import Carousel from './components/Carousel';
import BoxComponent from './components/BoxComponent'; // Import the BoxComponent
import './index.css'; // Ensure this is imported to apply Tailwind styles

const App = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-100">
        <Navbar />
        
        <div className="container mx-auto mt-8">
          <Carousel />
        </div>
        
        <div className="flex justify-center mt-8">
          {/* First Box */}
          <BoxComponent 
            title="Adopt Animals, Embrace Love"
            description=" A Heartfelt Choice for Compassionate Souls."
            imageUrl="https://image.lexica.art/full_webp/08d569e3-e28e-41ac-bd0b-093cc12bc33b"
            linkText="Share Your Love ❤️"
            linkUrl="/another-page"
          />
          
          {/* Second Box */}
          <BoxComponent 
            title="Donate Love, Rescue Lives"
            description=" Support Shelter Pets Today."
            imageUrl="https://image.lexica.art/full_webp/08d569e3-e28e-41ac-bd0b-093cc12bc33b"
            linkText="Donate Here Rescued Animals 🐕"

            linkUrl="/another-page"
          />
        </div>
        <div className="flex justify-center mt-8">
          {/* Third Box */}
          <BoxComponent 
            title=" NGO details/Animal Health Care "
            description="Contact Us to Donate and Support"
            imageUrl="https://image.lexica.art/full_webp/08d569e3-e28e-41ac-bd0b-093cc12bc33b"
            linkText="NGO/HeathCare "
            linkUrl="/another-page"
          />
          
          {/* Fourth Box */}
          <BoxComponent 
            title="Resources"
            description="Discover our mission and help save lives."
            imageUrl="https://image.lexica.art/full_webp/08d569e3-e28e-41ac-bd0b-093cc12bc33b"
            linkText="Explore our Work and Research."
            linkUrl="/another-page"
          />
        </div>
        
         
      </div>
    </Router>
  );
};

export default App;

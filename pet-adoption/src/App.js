import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AnotherPage from './components/AnotherPage';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import BoxComponent from './components/BoxComponent';
import ShareYourLove from './components/ShareYourLove';
import DonateHereRescuedAnimals from './components/DonateHereRescuedAnimals';  
import Resourses from './components/Resources';
import './index.css'; 
import  NGO from './components/NGO'
const App = () => {
  return (
    <Router>
      <div className="App min-h-screen">
        <Navbar />
        
        {/* Routes for main content */}
        <Routes>
          <Route path="/" element={<HomeWithCarousel />} />
           
          <Route path="/share-your-love" element={<ShareYourLove />} />
          <Route path="/donate-here-rescued-animals" element={<DonateHereRescuedAnimals />} />
          <Route path="/resources" element={<Resourses />} />
          <Route path="/ngo" element={<NGO />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const HomeWithCarousel = () => (
  <div>
    <div className="container mx-auto mt-8">
      <Carousel />
    </div>
    
    <div className="flex justify-center mt-8">
      {/* First Box */}
      <BoxComponent 
        title="Adopt Animals, Embrace Love"
        description="A Heartfelt Choice for Compassionate Souls."
        imageUrl="https://image.lexica.art/full_webp/08d569e3-e28e-41ac-bd0b-093cc12bc33b"
        linkText="Share Your Love ❤️"
        linkUrl="/share-your-love"
      />
         
      
      {/* Second Box */}
      <BoxComponent 
        title="Donate Love, Rescue Lives"
        description="Support Shelter Pets Today."
        imageUrl="https://image.lexica.art/full_webp/08d569e3-e28e-41ac-bd0b-093cc12bc33b"
        linkText="Donate Here Rescued Animals 🐕"
        linkUrl="/donate-here-rescued-animals"
      />
    </div>
    
    <div className="flex justify-center mt-8">
      {/* Third Box */}
      <BoxComponent 
        title="NGO details/Animal Health Care"
        description="Contact Us to Donate and Support."
        imageUrl="https://image.lexica.art/full_webp/08d569e3-e28e-41ac-bd0b-093cc12bc33b"
        linkText="NGO/HealthCare"
        linkUrl="/ngo"
      />
      
      {/* Fourth Box */}
      <BoxComponent 
        title="Resources"
        description="Discover our mission and help save lives."
        imageUrl="https://image.lexica.art/full_webp/08d569e3-e28e-41ac-bd0b-093cc12bc33b"
        linkText="Explore our Work and Research."
        linkUrl="/resources"
      />
    </div>
  </div>
);

export default App;

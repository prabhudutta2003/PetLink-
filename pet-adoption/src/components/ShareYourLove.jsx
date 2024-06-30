import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import petData from './data/pet.json'; // Import your JSON data

const ShareYourLove = () => {
  const [pets, setPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPets, setFilteredPets] = useState([]);

  useEffect(() => {
    // Simulate fetching data (replace with actual fetch if data is from an API)
    setPets(petData);
  }, []);

  useEffect(() => {
    // Filter pets based on searchQuery
    const filtered = pets.filter(pet =>
      pet.petType.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPets(filtered);
  }, [searchQuery, pets]);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      
      <div className="container mx-auto mt-8 p-4">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Share Your Love ❤️</h2>
        
        {/* Search bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by animal type (e.g., Dog, Cat, Cow, Horse)"
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded-lg w-full max-w-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through filteredPets array and render each pet as a card */}
          {filteredPets.map((pet, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={pet.imageUrl}
                alt={pet.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-bold text-purple-700">{pet.title}</h2>
                <p className="text-gray-600 mb-2">{pet.description}</p>
                <ul className="text-gray-700">
                  <li><strong>Type:</strong> {pet.petType}</li>
                  <li><strong>Age:</strong> {pet.age}</li>
                  <li><strong>Breed:</strong> {pet.breed}</li>
                  <li><strong>Health Condition:</strong> {pet.healthCondition}</li>
                  <li><strong>Temperament:</strong> {pet.temperament}</li>
                  <li><strong>Vaccination Status:</strong> {pet.vaccinationStatus}</li>
                  <li><strong>History:</strong> {pet.history}</li>
                  <li><strong>Current Environment:</strong> {pet.currentEnvironment}</li>
                  <li><strong>Contact Info:</strong> {pet.contactInfo}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareYourLove;

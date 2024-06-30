import React from 'react';
import { useParams } from 'react-router-dom';
import petsData from './data/pets.json'; // Assuming you have the JSON dataset

const PetDetails = () => {
  const { petName } = useParams();

  // Find the pet in the dataset based on the petName
  const pet = petsData.find(pet => pet.title.toLowerCase().replace(/\s+/g, '-') === petName);

  if (!pet) {
    return <div>Pet not found.</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">{pet.title}</h2>
      <img src={pet.imageUrl} alt={pet.title} className="w-full h-60 object-cover rounded mt-4" />
      <p className="mt-4">{pet.description}</p>
      <ul className="mt-4">
        <li>Type of Pet: {pet.petType}</li>
        <li>Age: {pet.age}</li>
        <li>Breed: {pet.breed}</li>
        <li>Health Condition: {pet.healthCondition}</li>
        <li>Temperament: {pet.temperament}</li>
        <li>Vaccination Status: {pet.vaccinationStatus}</li>
        <li>History: {pet.history}</li>
        <li>Current Environment: {pet.currentEnvironment}</li>
        <li>Contact Information: {pet.contactInfo}</li>
      </ul>
    </div>
  );
};

export default PetDetails;

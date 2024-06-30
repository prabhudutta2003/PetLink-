import React, { useState } from 'react';
import axios from 'axios';

const DetailPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [formData, setFormData] = useState({
    typeOfPet: '',
    age: '',
    breed: '',
    healthCondition: '',
    temperament: '',
    vaccinationStatus: '',
    history: '',
    currentEnvironment: '',
    contactInformation: '',
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('photo', selectedFile);
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:5000/api/pet/adoption', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadStatus('File uploaded successfully');
      alert('File uploaded successfully');
      console.log('File uploaded:', response.data.file);

      // Clear form and preview after successful upload
      setSelectedFile(null);
      setPreview(null);
      setFormData({
        typeOfPet: '',
        age: '',
        breed: '',
        healthCondition: '',
        temperament: '',
        vaccinationStatus: '',
        history: '',
        currentEnvironment: '',
        contactInformation: '',
      });
    } catch (error) {
      setUploadStatus('Error uploading file');
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pet Adoption Details</h1>
      <form onSubmit={handleSubmit}>
        {/* Type of Pet */}
        <div className="mb-4">
          <label htmlFor="typeOfPet" className="block text-sm font-medium text-gray-700">Type of Pet</label>
          <input type="text" id="typeOfPet" name="typeOfPet" value={formData.typeOfPet} onChange={handleInputChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input type="text" id="age" name="age" value={formData.age} onChange={handleInputChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        {/* Breed */}
        <div className="mb-4">
          <label htmlFor="breed" className="block text-sm font-medium text-gray-700">Breed</label>
          <input type="text" id="breed" name="breed" value={formData.breed} onChange={handleInputChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        {/* Health Condition */}
        <div className="mb-4">
          <label htmlFor="healthCondition" className="block text-sm font-medium text-gray-700">Health Condition</label>
          <input type="text" id="healthCondition" name="healthCondition" value={formData.healthCondition} onChange={handleInputChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        {/* Temperament */}
        <div className="mb-4">
          <label htmlFor="temperament" className="block text-sm font-medium text-gray-700">Temperament</label>
          <input type="text" id="temperament" name="temperament" value={formData.temperament} onChange={handleInputChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        {/* Vaccination Status */}
        <div className="mb-4">
          <label htmlFor="vaccinationStatus" className="block text-sm font-medium text-gray-700">Vaccination Status</label>
          <input type="text" id="vaccinationStatus" name="vaccinationStatus" value={formData.vaccinationStatus} onChange={handleInputChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        {/* History */}
        <div className="mb-4">
          <label htmlFor="history" className="block text-sm font-medium text-gray-700">History</label>
          <textarea id="history" name="history" value={formData.history} onChange={handleInputChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
        </div>

        {/* Current Environment */}
        <div className="mb-4">
          <label htmlFor="currentEnvironment" className="block text-sm font-medium text-gray-700">Current Environment</label>
          <textarea id="currentEnvironment" name="currentEnvironment" value={formData.currentEnvironment} onChange={handleInputChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <label htmlFor="contactInformation" className="block text-sm font-medium text-gray-700">Contact Information</label>
          <textarea id="contactInformation" name="contactInformation" value={formData.contactInformation} onChange={handleInputChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo</label>
          <input type="file" id="photo" name="photo" onChange={handleFileChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Upload
        </button>
      </form>

      {/* Preview of Uploaded Photo */}
      {preview && (
        <div className="mt-4">
          <h2 className="text-xl mb-2">Preview:</h2>
          <div className="max-w-full h-auto overflow-hidden border rounded-md">
            <img src={preview} alt="Preview" className="block max-w-full h-auto" style={{ width: '50%' }} />
          </div>
        </div>
      )}

      {/* Display Upload Status */}
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default DetailPage;

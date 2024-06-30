import React from 'react';
import { useNavigate } from 'react-router-dom';

const BoxComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/another-page');
  };

  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-lg rounded-lg w-80 h-96">
      <div className="text-center">
        <img 
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          className="w-full h-40 object-cover rounded"
        />
        <h2 className="text-xl font-bold mt-4">Box Title</h2>
        <p className="mt-2 text-gray-600">Some description or content goes here.</p>
        <button 
          onClick={handleClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Another Page
        </button>
      </div>
    </div>
  );
};

export default BoxComponent;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const BoxComponent = ({ title, description, imageUrl, linkText, linkUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(linkUrl);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mr-6 bg-white shadow-lg rounded-lg w-auto h-2/3 mx-40 my-4">
      <img 
        src={imageUrl}
        alt="Box Image"
        className="w-full h-52 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <button 
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {linkText}
      </button>
    </div>
  );
};

export default BoxComponent;

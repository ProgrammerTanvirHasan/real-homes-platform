

    

import React, { useState } from 'react';

const images = [
  'https://i.ibb.co/yPfqsj3/istockphoto-1778043211-1024x1024.jpg',
  'https://i.ibb.co/6sjxN3X/real-estate-house-property-facebook-cover-web-banner-template-design-948030-799.jpg',
  'https://i.ibb.co/gm42yNF/real-estate-house-property-facebook-cover-banner-template-120329-1844.jpg',
  'https://i.ibb.co/sg9LCLN/real-estate-interior-design-social-media-promo-template-23-2150065237.jpg'
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const previousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1) % images.length);
  };



  return (
    <div className="relative w-full h-96 mx-auto">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`absolute w-full h-full ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
        onClick={nextSlide}
      >
        Next
      </button>
      <button
        className="absolute top-1/2  transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
        onClick={previousSlide}
      >
        Previous
      </button>
    </div>
  );
};

export default Slider;


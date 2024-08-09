import React from 'react';
import img1 from '../assets/Gallery/img1.jpg';
import img2 from '../assets/Gallery/img2.jpg';
import img3 from '../assets/Gallery/img3.jpg';
import img4 from '../assets/Gallery/img4.jpg';
import img5 from '../assets/Gallery/img5.jpg';
import img6 from '../assets/Gallery/img6.jpg';
import img7 from '../assets/Gallery/img7.jpg';
import img8 from '../assets/Gallery/img8.jpg';
import img9 from '../assets/Gallery/img9.jpg';
import img10 from '../assets/Gallery/img10.jpg';
import img11 from '../assets/Gallery/img11.jpg';
import img12 from '../assets/Gallery/img12.jpg';

// Continue importing as needed...

const Gallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12
    // Add the rest of your images here...
  ];

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((src, index) => (
            <div key={index} className="relative group">
              <img src={src} alt={`Gallery item ${index}`} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

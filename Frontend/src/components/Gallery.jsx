import React from 'react';

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
// import img13 from '../assets/Gallery/img13.jpg';
// import img14 from '../assets/Gallery/img14.jpg';
// import img15 from '../assets/Gallery/img15.jpg';
// import img16 from '../assets/Gallery/img16.jpg';
// import img17 from '../assets/Gallery/img17.jpg';
// import img18 from '../assets/Gallery/img18.jpg';
// import img19 from '../assets/Gallery/img19.jpg';
// import img20 from '../assets/Gallery/img20.jpg';
// import img21 from '../assets/Gallery/img21.jpg';
// import img22 from '../assets/Gallery/img22.jpg';
// import img23 from '../assets/Gallery/img23.jpg';
// import img24 from '../assets/Gallery/img24.jpg';
// import img25 from '../assets/Gallery/img25.jpg';
// import img26 from '../assets/Gallery/img26.jpg';
// import img27 from '../assets/Gallery/img27.jpg';
// import img28 from '../assets/Gallery/img28.jpg';
// import img29 from '../assets/Gallery/img29.jpg';
// import img30 from '../assets/Gallery/img30.jpg';
// import img31 from '../assets/Gallery/img31.jpg';
// import img32 from '../assets/Gallery/img32.jpg';
// import img33 from '../assets/Gallery/img33.jpg';




const Gallery = () => {
  const images = [
   
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
    img12,
   // img14,img15,img16,img17,img18,img19,img20 , img21, img22 , img23, img24, img25, img26 , img27 , img28,img29,img30,img31,img32,img33
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

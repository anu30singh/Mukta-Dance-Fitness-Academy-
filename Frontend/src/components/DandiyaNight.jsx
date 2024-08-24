import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; 

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import Image1 from '../assets/Dandiya/dandiya1.jpeg';
import Image2 from '../assets/Dandiya/dandiya2.jpeg';
import Image3 from '../assets/Dandiya/dandiya4.jpeg';
import Image4 from '../assets/Dandiya/dandiya5.jpeg';
import Image5 from '../assets/Dandiya/dandiya6.jpeg';
import Image6 from '../assets/Dandiya/dandiya7.jpeg';
import Image7 from '../assets/Dandiya/dandiya8.jpeg';

const DandiyaNightPage = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center">
      {/* Buy Tickets Now Button */}
      <div className="w-full flex justify-center py-8">
        <Link to="/buy-tickets" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-8 rounded-full font-bold text-lg hover:opacity-90 transition duration-300 shadow-lg">
          Buy Tickets Now
        </Link>
      </div>

      {/* Image Slider */}
      <div className="w-full max-w-4xl h-80 md:h-96 lg:h-[600px] mt-8 mb-12 overflow-hidden rounded-lg shadow-lg">
        <Slider {...settings} className="w-full h-full">
          <div className="flex items-center justify-center">
            <img src={Image1} alt="Dandiya Night 1" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="flex items-center justify-center">
            <img src={Image2} alt="Dandiya Night 2" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="flex items-center justify-center">
            <img src={Image3} alt="Dandiya Night 3" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="flex items-center justify-center">
            <img src={Image4} alt="Dandiya Night 4" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="flex items-center justify-center">
            <img src={Image5} alt="Dandiya Night 5" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="flex items-center justify-center">
            <img src={Image6} alt="Dandiya Night 6" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="flex items-center justify-center">
            <img src={Image7} alt="Dandiya Night 7" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </Slider>
      </div>

      {/* Event Content */}
      <div className="mt-12 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-pink-400">Prepare for an Unforgettable Dandiya Night!</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Immerse yourself in the vibrant rhythms and colorful festivities of our Dandiya Night event. Whether you're a seasoned dancer or new to the dance floor, our event offers a captivating blend of traditional and modern music that promises to get your feet moving and your spirits soaring.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Secure your spot at the year's most eagerly awaited Dandiya Night.
        </p>
      </div>
    </div>
  );
};

export default DandiyaNightPage;

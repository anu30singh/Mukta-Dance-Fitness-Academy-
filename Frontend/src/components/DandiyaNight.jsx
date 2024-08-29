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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div className="bg-black text-white">
      {/* Main Content Area */}
      <div className="min-h-screen flex flex-col lg:flex-row lg:items-start lg:justify-between">
        {/* Image Slider */}
        <div className="w-full lg:w-1/2 max-w-md h-72 mx-12 md:h-[650px] lg:h-[500px] mt-8 mb-12 lg:mb-0 overflow-hidden rounded-lg shadow-2xl flex-shrink-0">
          <Slider {...settings} className="w-full h-full">
            {[Image1, Image2, Image3, Image4, Image5, Image6, Image7].map((img, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={img} 
                  alt={`Dandiya Night ${index + 1}`} 
                  className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" 
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Event Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-14 md:px-12 lg:px-24 mt-12 lg:mt-0 lg:ml-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pink-400 drop-shadow-md animate-pulse">
            Prepare for an Unforgettable Dandiya Night!
          </h2>
          
          {/* Buy Tickets Now Button */}
          <div className="flex justify-center lg:justify-start py-4">
            <Link 
              to="/buy-tickets" 
              className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 px-8 rounded-full font-bold text-lg hover:opacity-90 transition duration-300 shadow-2xl transform hover:scale-110"
            >
              Buy Tickets Now
            </Link>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-full border-t-2 border-pink-600 my-12"></div>

      {/* Full-Width Section */}
      <div className="w-full bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600 animate-pulse">
            Why You Should Join Bollywood Dandiya 2024
          </h3>
          <ul className="list-disc list-inside text-lg space-y-4 text-white">
            <li>Experience the vibrant and colorful traditional dance of Dandiya with a Bollywood twist.</li>
            <li>Enjoy live music and performances from renowned artists that will keep you dancing all night.</li>
            <li>Meet and mingle with fellow Dandiya enthusiasts and make new friends.</li>
            <li>Participate in exciting competitions and win fabulous prizes.</li>
            <li>Delight in a range of delicious food and drinks available at the event.</li>
            <li>Be a part of an unforgettable celebration that blends culture, music, and dance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DandiyaNightPage;

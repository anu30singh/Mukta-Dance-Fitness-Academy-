import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; 

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import Image1 from '../assets/dandiya1.jpg';
import Image2 from '../assets/dandiya2.jpg';
import Image3 from '../assets/dandiya3.jpg';

const DandiyaNightPage = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gradient-to-b from-pink-600 to-yellow-500 min-h-screen text-white flex flex-col items-center">
      {/* Buy Tickets Now Button */}
      <div className="w-full flex justify-center py-8">
        <Link to="/buy-tickets" className="bg-white text-pink-600 py-3 px-8 rounded-full font-bold text-lg hover:bg-pink-100 transition duration-300">
          Buy Tickets Now
        </Link>
      </div>

      {/* Image Slider */}
      <div className="w-11/12 md:w-3/4 lg:w-1/2 mt-8">
        <Slider {...settings}>
          <div>
            <img src={Image1} alt="Dandiya Night 1" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={Image2} alt="Dandiya Night 2" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={Image3} alt="Dandiya Night 3" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </Slider>
      </div>

      {/* Event Content */}
      <div className="mt-12 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Ready for an Unforgettable Dandiya Night!</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Join us for a night full of rhythm, color, and joy at our Dandiya Night event! Dance to the beats of traditional 
          and modern music, twirl with your friends, and enjoy the festive spirit with a vibrant community. Whether you're 
          a seasoned dancer or a newcomer, this event promises to be a night to remember.
        </p>
        <p className="text-lg md:text-xl mt-4 leading-relaxed">
          Our previous events have been a huge success, with stunning performances, energetic crowds, and lots of fun. 
          Don’t miss out on this year's event, which promises to be even bigger and better. Come dressed in your best 
          traditional attire and be part of a cultural extravaganza like no other!
        </p>
        <p className="text-lg md:text-xl mt-4 leading-relaxed">
          Book your tickets now and secure your spot at the most awaited Dandiya Night of the year. Let's create 
          unforgettable memories together!
        </p>
      </div>
    </div>
  );
};

export default DandiyaNightPage;

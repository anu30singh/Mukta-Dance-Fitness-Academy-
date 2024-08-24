import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Landing from '../assets/Landing.gif'; 
import LandingPageVideo from '../assets/LandingPageVideo.mp4'; 
import Black from '../assets/Black.gif';
import Logo from '../assets/Logo.png';

const LandingPage = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden min-h-screen flex flex-col">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={LandingPageVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Semi-transparent overlay */}

      <div className="relative z-10 mt-4 flex justify-center">
        <Link to="/dandiya-night" className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300">
          Join Dandiya Night Event
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center py-12 px-4">
        <div className="md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
          <img src={Black} alt="Another Visual" className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto" />
        </div>

        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-pink-500 font-bold mb-4">
            Transform Your Body, Mind, and Soul with Dance & Fitness
          </h1>
          <p className="text-lg sm:text-xl font-light mb-4">
            Join Mukta Dance & Fitness Academy for a Journey of Grace, Strength, and Wellness
          </p>

         

          <div className="mt-4">
            <p className="text-sm text-pink-500 font-bold">
              We are open for collaboration with fitness gyms, companies, and other organizations.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <img src={Landing} alt="Dance and Fitness" className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

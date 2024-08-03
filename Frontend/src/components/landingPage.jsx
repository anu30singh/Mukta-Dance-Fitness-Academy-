import React from 'react';
import Landing from '../assets/Landing.gif'; 
import LandingPageVideo from '../assets/LandingPageVideo.mp4'; 
import Black from '../assets/Black.gif'
import Logo from '../assets/Logo.png'

const LandingPage = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden min-h-screen flex flex-col">
        <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={LandingPageVideo}  type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Semi-transparent overlay */}
      {/* Navbar */}
      <nav className="bg-black-900 p-4">
        <div className="relative z-10 container mx-auto my-2 flex justify-center items-center">
        <div className="flex items-center space-x-2 flex-shrink-0">
            <img src={Logo} alt="Mukta Saxena's Academy Logo" className="w-24 h-24" />
          </div>
        {/* <div className="flex items-center space-x-2">
            <img src={Logo} alt="Mukta Saxena's Academy Logo" className="w-24 h-24" />
        </div> */}
          <div className="flex flex-1 justify-center space-x-6">
            <a href="#" className="hover:text-pink-400">Home</a>
            <a href="#" className="hover:text-pink-400">About Us</a>
            <a href="#" className="hover:text-pink-400">Classes</a>
            <a href="#" className="hover:text-pink-400">Events</a>
            <a href="#" className="hover:text-pink-400">Gallery</a>
            <a href="#" className="hover:text-pink-400">Testimonials</a>
            <a href="#" className="hover:text-pink-400">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-1 items-center py-12 ">
        <div className="flex items-center justify-between space-x-4">
          <img src={Black} alt="Another Visual" className="w-full max-w-lg h-auto" />
          
          <div className="text-center max-w-lg mt-[-2rem]">
            <h1 className="text-4xl text-pink-500 font-bold mb-4">
              Transform Your Body, Mind, and Soul with Dance & Fitness
            </h1>
            <p className="text-xl font-light mb-4">
              Join Mukta Dance & Fitness Academy for a Journey of Grace, Strength, and Wellness
            </p>
            <a href="#" className="inline-block px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors duration-300">
              Learn More
            </a>
          </div>
          
          <img src={Landing} alt="Dance and Fitness" className="w-full max-w-lg h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

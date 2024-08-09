import React from 'react';
import FounderImage from '../assets/FounderImage.jpeg'; // Replace with the actual image path
import DanceAcademyImage from '../assets/DanceAcademyImage.jpeg'; // Replace with the actual image path
import Academy from '../assets/Academy.jpeg';

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-500">About Us</h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-stretch space-y-8 md:space-y-0 md:space-x-12">
          
          {/* Founder Section */}
          <div className="md:w-1/2 bg-black rounded-lg shadow-lg p-6 flex flex-col">
            <img src={FounderImage} alt="Founder" className="w-full h-auto rounded-lg shadow-md mb-6" />
            <h3 className="text-2xl font-semibold text-center mb-2 text-pink-400">Founder - Mukta Saxena</h3>
            <p className="text-justify text-white flex-1">
              Mukta Saxena is the visionary founder of Mukta Dance & Fitness Academy. With over 10 years of experience in dance and fitness, she has dedicated her life to helping others achieve their wellness goals through the art of movement. Mukta believes in the transformative power of dance and fitness, and her passion for these disciplines is evident in every class she teaches.
            </p>
            
          </div>
          
          {/* Dance Academy Section */}
          <div className="md:w-1/2 bg-black rounded-lg shadow-lg p-6 flex flex-col">
            <img src={DanceAcademyImage} alt="Dance Academy" className="w-full h-auto rounded-lg shadow-md mb-6" />
            <img src={Academy} alt="Dance Academy" className="w-full h-auto rounded-lg shadow-md mb-6" />
            <h3 className="text-2xl font-semibold text-center mb-2 text-pink-400">Our Academy</h3>
            <p className="text-justify text-white flex-1">
              Mukta Dance & Fitness Academy offers a wide range of classes for all ages and skill levels. From classical dance forms to contemporary fitness routines, our academy provides a nurturing environment for everyone to explore their passion for dance and fitness. Our instructors are highly skilled professionals who are committed to helping students achieve their personal goals in a supportive and inspiring setting.
            </p>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

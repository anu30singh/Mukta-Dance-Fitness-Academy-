import React from 'react';
import { Helmet } from 'react-helmet'; 
import FounderImage from '../assets/FounderImage.jpeg'; 
import FounderAward1 from '../assets/FounderImage1.jpeg';
import FounderAward2 from '../assets/FounderImage2.jpeg'; 
import FounderAward3 from '../assets/FounderImage3.jpeg'; 
import DanceAcademyImage from '../assets/DanceAcademyImage.jpeg'; 
import Academy from '../assets/Academy.jpeg';

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-12">
      <Helmet>
        <title>About Us | Mukta Dance and Fitness Academy</title>
        <meta name="description" content="Learn about Mukta Saxena, the founder of Mukta Dance and Fitness Academy, and her journey from a home maker to a successful dance and fitness coach. Discover the awards and recognition she has received and the vibrant community she has built." />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-500">About Us</h2>

        <div className="flex flex-col md:flex-row items-center md:items-stretch space-y-8 md:space-y-0 md:space-x-12">
          
          {/* Founder Section */}
          <div className="md:w-1/2 bg-black rounded-lg shadow-lg p-6 flex flex-col">
            <img src={FounderImage} alt="Founder" className="w-full h-auto rounded-lg shadow-md mb-6" />
            <h3 className="text-2xl font-semibold text-center mb-2 text-pink-400">Founder - Mukta Saxena</h3>
            <p className="text-justify text-white mb-6">
              MUKTA SAXENA – An Inspirational Journey of a HOME MAKER to a successful business woman (dance &
              fitness Coach), a woman of substance.
              In the vibrant world of dance and fitness, there emerges a story of resilience, passion and unwavering spirit.
              This story is of a remarkable dance & fitness coach who despite battling health challenges, continues to inspire,
              motivate and lead by example.
            </p>

            {/* Award Section */}
            <h4 className="text-xl font-semibold text-center mb-4 text-pink-400">Awards & Recognition</h4>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <img src={FounderAward2} alt="Award 2" className="w-full md:w-1/2 h-auto rounded-lg shadow-md" />
              <img src={FounderAward3} alt="Award 3" className="w-full md:w-1/2 h-auto rounded-lg shadow-md" />
            </div>
            <p className="text-justify text-white mt-4">
              Mukta Saxena holds an MBA from Jiwaji University, a 5-year diploma in classical Kathak dance, and numerous certifications, including fitness trainer accreditation from the Ministry of Skill Development, India, and international certifications as a Zumba instructor and Kizomba trainer. She is also a certified yoga coach, pilates instructor, and aerobics trainer. Her achievements include the Women Achiever’s Award 2023, Beauty & Beyond Women Achiever Award 2023, and Best Choreographer Rajdhani Ratan Award 2019, among others.
            </p>
          </div>

          {/* Dance Academy Section */}
          <div className="md:w-1/2 bg-black rounded-lg shadow-lg p-6 flex flex-col">
            <img src={DanceAcademyImage} alt="Dance Academy" className="w-full h-auto rounded-lg shadow-md mb-6" />
            <img src={Academy} alt="Dance Academy" className="w-full h-auto rounded-lg shadow-md mb-6" />
            <h3 className="text-2xl font-semibold text-center mb-2 text-pink-400">Our Academy</h3>
            <p className="text-justify text-white mb-4">
              At MDFA, Mukta offers Zumba sessions to over 2,000 ladies and children, creating an inclusive space for all ages and fitness levels. Her classes are more than just workouts; they are vibrant, positive, and full of energy. Mukta’s never-ending enthusiasm inspires participants to push beyond their limits and discover their inner strength.
            </p>

            <p className="text-justify text-white mb-4">
              Mukta’s deep experience and empathetic approach make her a mentor and confidante to many. She understands the challenges of maintaining physical activity and creates a supportive environment where everyone feels encouraged to achieve their personal best.
            </p>

            <p className="text-justify text-white">
              She has conducted over 100 Zumba workshops and events at various prestigious locations in Delhi and NCR, including sessions at corporate offices, malls, schools, and institutions like Vegas Mall, Pacific Mall, GD Goenka, and Air Force Base stations.
            </p>
            <img src={FounderAward1} alt="Award 2" className="w-full h-auto rounded-lg shadow-md" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;

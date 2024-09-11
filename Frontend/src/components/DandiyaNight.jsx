import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick'; 
import { Helmet } from 'react-helmet'; // Import Helmet

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import Image1 from '../assets/Dandiya/dandiya1.jpeg';
import Image2 from '../assets/Dandiya/dandiya2.jpeg';
import Image3 from '../assets/Dandiya/dandiya4.jpeg';
import Image4 from '../assets/Dandiya/dandiya5.jpeg';
import Image5 from '../assets/Dandiya/dandiya6.jpeg';
import Image6 from '../assets/Dandiya/dandiya7.jpeg';
import Image7 from '../assets/Dandiya/dandiya8.jpeg';
import WhyJoinImage from '../assets/Dandiya/why-join.jpeg'; 

Modal.setAppElement('#root');

const DandiyaNightPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>Bollywood Dandiya Night 2024 | Mukta Dance and Fitness</title>
        <meta name="description" content="Join us for the Bollywood Dandiya Night 2024! Enjoy vibrant dance performances, live music, and more at BLESSINGS GARDEN, New Delhi. Tickets and event details inside." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col lg:flex-row lg:items-start lg:justify-between">
        
        <div className="w-full lg:w-3/5 max-w-2xl h-80 mx-4 md:h-[450px] lg:h-[500px] mt-8 lg:mt-6 mb-4 lg:mb-0 overflow-hidden rounded-lg shadow-2xl flex-shrink-0">
          <Slider {...settings} className="w-full h-full">
            {[Image1, Image2, Image3, Image4, Image5, Image6, Image7].map((img, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={img} 
                  alt={`Dandiya Night ${index + 1}`} 
                  className="w-full h-full object-contain rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" 
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col justify-center px-4 py-6 my-10 md:px-8 lg:px-12 lg:py-8 text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-pink-400 drop-shadow-md animate-pulse">
            Prepare for an Unforgettable Dandiya Night!
          </h2>
          
          <div className="flex justify-start py-2">
            <button 
              onClick={openModal} 
              className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 px-8 rounded-full font-bold text-lg lg:text-xl hover:opacity-90 transition duration-300 shadow-2xl transform hover:scale-110"
            >
              Buy Tickets Now
            </button>
          </div>

          <div className="flex justify-start py-2">
            <a 
              href="https://www.instagram.com/mdfa_bollywood_dandiyanight/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 px-8 rounded-full font-bold text-lg lg:text-xl hover:opacity-90 transition duration-300 shadow-2xl transform hover:scale-110"
            >
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600">
            Event Details
          </h3>
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-white">Venue</h4>
            <p className="text-lg mb-6 text-gray-300">BLESSINGS GARDEN (NEAR RADHA SWAMI SATSANG), Sec 23 Dwarka, New Delhi</p>

            <h4 className="text-xl md:text-2xl font-bold mb-4 text-white">Date & Time</h4>
            <p className="text-lg mb-6 text-gray-300">Sunday, October 6, 2024<br/>Doors Open: 5:00 PM<br/>Event Ends: 11:00 PM</p>

            <h4 className="text-xl md:text-2xl font-bold mb-4 text-white">Dress Code</h4>
            <p className="text-lg mb-6 text-gray-300">Traditional or Festive Attire</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:space-x-8">
          <div className="lg:w-3/5 text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600 animate-pulse">
              Why You Should Join Bollywood Dandiya 2024
            </h3>
            <ul className="list-disc list-inside text-lg space-y-4 text-white">
              <li>Experience vibrant Dandiya dance with a Bollywood twist.</li>
              <li>Enjoy live music and performances from top artists all night.</li>
              <li>Meet and mingle with fellow Dandiya enthusiasts. </li>
              <li>Participate in exciting competitions and win fabulous prizes.</li>
              <li>Delight in a range of delicious food and drinks available at the event.</li>
              <li>Join an unforgettable celebration of culture, music, and dance.</li>
            </ul>
          </div>

          <div className="lg:w-2/5 mt-8 lg:mt-0">
            <img 
              src={WhyJoinImage} 
              alt="Why Join Dandiya Night" 
              className="w-full h-auto rounded-lg shadow-lg object-cover" 
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Buy Tickets Modal"
        className="bg-white rounded-lg max-w-lg mx-auto mt-40 p-8 shadow-2xl text-black"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h2 className="text-xl font-bold mb-4">Tickets Are Just A Call/Text Away : 9650002213</h2>
        <p className="mb-6"> 🎫 Ticket Prices:
Single Entry: ₹950 ,
Couple Entry: ₹1700 <br></br>
♥️ Early Bird and Bulk Booking Discounts Available </p>
        <button 
          onClick={closeModal} 
          className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-700 transition duration-300"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default DandiyaNightPage;

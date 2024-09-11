import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Park Royal Apartments, plot no 10A,</p>
            <p className="mb-2">Dwarka Sector 9, Dwarka, Delhi, 110077</p>
            <p className="mb-2">Phone: (+91) 9650002213</p>
            <p className="mb-2">
              WhatsApp: 
              <a 
                href="https://wa.me/919650002213" 
                className="text-pink-500 hover:text-pink-300">
                (+91) 9650002213
              </a>
            </p>
          </div>
          
          {/* Social Media Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ZinMukta/videos/mukta-dance-fitness-academy-dwarka-sec-9-online-offline-session-with-certified-f/303138727901865/" className="text-white hover:text-pink-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/zin_mukta/" className="text-white hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com/@muktasaxena1725" className="text-white hover:text-pink-500">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2024 Mukta Dance & Fitness Academy. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">
            This website does not collect or store any personal data. By contacting us via WhatsApp, you agree to WhatsApp's privacy policy. All third-party services such as social media links are subject to their respective privacy policies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

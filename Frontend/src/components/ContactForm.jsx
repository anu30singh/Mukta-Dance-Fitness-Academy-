import React, { useState } from 'react';
import axios from 'axios';
import ContactImage from '../assets/ContactUs.svg'; 

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const sendMail = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        email,    // Visitor's email
      subject,  // Subject of the message
      message   // Message content,
      });
      if (response.status === 200) {
        setStatus('Your message has been sent successfully!');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      setStatus('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col lg:flex-row">
      {/* Left Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center p-8">
        <img src={ContactImage} alt="Contact Us" className="w-full max-w-md" />
      </div>

      {/* Right Contact Us Card */}
      <div className="lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-black text-black p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-pink-500">Let's Connect</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            sendMail();
          }}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition"
            >
              Send Message
            </button>
            {status && <p className="mt-4 text-center text-white text-lg font-semibold">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

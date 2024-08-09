import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const sendMail = async () => {
    try {
      const response = await axios.get('http://localhost:5000/', {
        params: { email, subject, message },
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
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Contact Us</h2>
        <form onSubmit={(e) => { e.preventDefault(); sendMail(); }}>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Recipient Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="4"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-center text-lg font-semibold text-white">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

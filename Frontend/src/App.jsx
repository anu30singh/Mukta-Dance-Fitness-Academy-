import React from 'react';
import LandingPage from './components/landingPage';
import AboutUs from './components/AboutUs';
import Service from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './index.css'; 

const App = () => {
  return (
    <div>
      <LandingPage />
      <AboutUs /> 
      <Service />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />

    </div>
  );
};

export default App;

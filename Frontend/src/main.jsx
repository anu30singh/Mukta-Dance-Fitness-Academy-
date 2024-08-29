import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout.jsx'; 
import LandingPage from './components/landingPage.jsx'; 
import AboutUs from './components/AboutUs.jsx'; 
import ContactForm from './components/ContactForm.jsx'; 
import Gallery from './components/Gallery.jsx'; 
import Services from './components/Services.jsx'; 
import Testimonials from './components/Testimonials.jsx'; 
import DandiyaNightPage from './components/DandiyaNight.jsx';
import Events from './components/events.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "about", element: <AboutUs /> },
      { path: "service", element: <Services /> },
      { path: "gallery", element: <Gallery /> },
      { path: "test", element: <Testimonials /> },
      { path: "contactus", element: <ContactForm /> },
      {path: "dandiya-night", element: <DandiyaNightPage />},
      {path: "events", element: <Events />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout.jsx'; // Adjust the path as needed
import LandingPage from './components/landingPage.jsx'; // Adjust the path as needed
import AboutUs from './components/AboutUs.jsx'; // Adjust the path as needed
import ContactForm from './components/ContactForm.jsx'; // Adjust the path as needed
import Gallery from './components/Gallery.jsx'; // Adjust the path as needed
import Services from './components/Services.jsx'; // Adjust the path as needed
import Testimonials from './components/Testimonials.jsx'; // Adjust the path as needed

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
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

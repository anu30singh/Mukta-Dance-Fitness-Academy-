import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../Frontend/src/assets/Logo.png'; // Adjust the path as needed
import Footer from '../Frontend/src/components/Footer'; // Adjust the path as needed

function Layout() {
    return (
        <div className="text-white min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-black p-1 border-b border-gray-800">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <img src={Logo} alt="Mukta Saxena's Academy Logo" className="w-16 h-16 sm:w-24 sm:h-24" />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-1 justify-center space-x-4">
    <NavLink to="/" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Home</NavLink>
    <NavLink to="/about" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">About Us</NavLink>
    <NavLink to="/service" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Services</NavLink>
    <NavLink to="/gallery" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Media</NavLink>
    <NavLink to="/test" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Reviews</NavLink>
    <NavLink to="/contactus" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Reach Out</NavLink>
</div>

                </div>
            </nav>

            {/* Main content */}
            <div className="flex-1">
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Layout;

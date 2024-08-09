import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../Frontend/src/assets/Logo.png'; // Adjust the path as needed
import Footer from '../Frontend/src/components/Footer'; // Adjust the path as needed

function Layout() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="text-white min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-black p-3 border-b border-gray-800">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <img src={Logo} alt="Mukta Saxena's Academy Logo" className="w-16 h-16 sm:w-24 sm:h-24" />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <div className={`lg:flex lg:items-center lg:justify-center lg:space-x-8 ${isOpen ? 'block' : 'hidden'} lg:flex lg:w-full lg:justify-center`}>
                        <NavLink to="/" className="text-white font-semibold hover:text-pink-500 hover:underline px-4 py-2" activeClassName="underline">Home</NavLink>
                        <NavLink to="/about" className="text-white font-semibold hover:text-pink-500 hover:underline px-4 py-2" activeClassName="underline">Our Story</NavLink>
                        <NavLink to="/service" className="text-white font-semibold hover:text-pink-500 hover:underline px-4 py-2" activeClassName="underline">Services</NavLink>
                        <NavLink to="/gallery" className="text-white font-semibold hover:text-pink-500 hover:underline px-4 py-2" activeClassName="underline">Media</NavLink>
                        <NavLink to="/test" className="text-white font-semibold hover:text-pink-500 hover:underline px-4 py-2" activeClassName="underline">Reviews</NavLink>
                        <NavLink to="/contactus" className="text-white font-semibold hover:text-pink-500 hover:underline px-4 py-2" activeClassName="underline">Reach Out</NavLink>
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

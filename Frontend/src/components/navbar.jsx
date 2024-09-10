import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black p-4 border-b border-gray-800 relative">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex-shrink-0">
                    <img src={Logo} alt="Mukta Saxena's Academy Logo" className="w-32 h-16 sm:w-36 sm:h-20 shadow-md" />
                </div>

                <div className="block lg:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <div className={`fixed inset-0 bg-black bg-opacity-75 lg:hidden ${isOpen ? 'block' : 'hidden'} transition-opacity duration-300`}>
                    <div className="flex flex-col items-center justify-center h-full space-y-6">
                        <button onClick={toggleMenu} aria-label="Close menu" className="absolute top-4 right-4 text-white text-3xl">
                            &times;
                        </button>
                        <NavLink to="/" onClick={toggleMenu} className="text-white text-2xl font-semibold hover:text-pink-400">Home</NavLink>
                        <NavLink to="/about" onClick={toggleMenu} className="text-white text-2xl font-semibold hover:text-pink-400">About Us</NavLink>
                        <NavLink to="/service" onClick={toggleMenu} className="text-white text-2xl font-semibold hover:text-pink-400">Services</NavLink>
                        <NavLink to="/gallery" onClick={toggleMenu} className="text-white text-2xl font-semibold hover:text-pink-400">Media</NavLink>
                        <NavLink to="/test" onClick={toggleMenu} className="text-white text-2xl font-semibold hover:text-pink-400">Reviews</NavLink>
                        <NavLink to="/events" onClick={toggleMenu} className="text-white text-2xl font-semibold hover:text-pink-400">Events</NavLink>
                        <NavLink to="/contactus" onClick={toggleMenu} className="text-white text-2xl font-semibold hover:text-pink-400">Reach Out</NavLink>
                    </div>
                </div>

                <div className={`flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-12 ${isOpen ? 'hidden' : 'lg:flex'}`}>
                    <NavLink to="/" className="text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300" activeClassName="underline">Home</NavLink>
                    <NavLink to="/about" className="text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300" activeClassName="underline">About Us</NavLink>
                    <NavLink to="/service" className="text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300" activeClassName="underline">Services</NavLink>
                    <NavLink to="/gallery" className="text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300" activeClassName="underline">Media</NavLink>
                    <NavLink to="/test" className="text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300" activeClassName="underline">Reviews</NavLink>
                    <NavLink to="/events" className="text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300" activeClassName="underline">Events</NavLink>
                    <NavLink to="/contactus" className="text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300" activeClassName="underline">Reach Out</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

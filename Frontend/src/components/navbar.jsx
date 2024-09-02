import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black p-4 border-b border-gray-800">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={Logo} alt="Mukta Saxena's Academy Logo" className="w-24 h-12 sm:w-24 sm:h-16" />
                </div>

                {/* Menu Button for Mobile */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-12 ${isOpen ? 'block' : 'hidden lg:flex'}`}>
                    <NavLink to="/" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Home</NavLink>
                    <NavLink to="/about" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">About Us</NavLink>
                    <NavLink to="/service" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Services</NavLink>
                    <NavLink to="/gallery" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Media</NavLink>
                    <NavLink to="/test" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Reviews</NavLink>
                    <NavLink to="/events" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Events</NavLink>
                    <NavLink to="/contactus" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Reach Out</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

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
    <NavLink to="/">
        <img src={Logo} alt="Mukta Saxena's Academy Logo" className="w-32 h-16 sm:w-36 sm:h-20 shadow-md" />
    </NavLink>
</div>


                {/* Menu Toggle Button */}
                <div className="block lg:hidden">
                    <button 
                      onClick={toggleMenu} 
                      aria-label="Toggle menu" 
                      aria-expanded={isOpen}
                      className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <div className={`hidden lg:flex flex-1 flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-12`}>
                    <NavLink 
                      to="/" 
                      className={({ isActive }) => `text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300 ${isActive ? 'underline' : ''}`}
                    >
                      Home
                    </NavLink>
                    <NavLink 
                      to="/about" 
                      className={({ isActive }) => `text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300 ${isActive ? 'underline' : ''}`}
                    >
                      About Us
                    </NavLink>
                    <NavLink 
                      to="/service" 
                      className={({ isActive }) => `text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300 ${isActive ? 'underline' : ''}`}
                    >
                      Services
                    </NavLink>
                    <NavLink 
                      to="/gallery" 
                      className={({ isActive }) => `text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300 ${isActive ? 'underline' : ''}`}
                    >
                      Media
                    </NavLink>
                    <NavLink 
                      to="/test" 
                      className={({ isActive }) => `text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300 ${isActive ? 'underline' : ''}`}
                    >
                      Reviews
                    </NavLink>
                    <NavLink 
                      to="/events" 
                      className={({ isActive }) => `text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300 ${isActive ? 'underline' : ''}`}
                    >
                      Events
                    </NavLink>
                    <NavLink 
                      to="/contactus" 
                      className={({ isActive }) => `text-white font-semibold hover:text-pink-400 hover:underline transition-all duration-300 ${isActive ? 'underline' : ''}`}
                    >
                      Reach Out
                    </NavLink>
                </div>

                {/* Mobile Menu Overlay */}
                <div 
                  className={`fixed inset-0 bg-black bg-opacity-75 lg:hidden transition-opacity duration-300 z-50 ${isOpen ? 'block' : 'hidden'}`}
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-6">
                        <button onClick={toggleMenu} aria-label="Close menu" className="absolute top-4 right-4 text-white text-3xl">
                            &times;
                        </button>
                        <NavLink 
                          to="/" 
                          onClick={toggleMenu} 
                          className={({ isActive }) => `text-white text-2xl font-semibold hover:text-pink-400 ${isActive ? 'underline' : ''}`}
                        >
                          Home
                        </NavLink>
                        <NavLink 
                          to="/about" 
                          onClick={toggleMenu} 
                          className={({ isActive }) => `text-white text-2xl font-semibold hover:text-pink-400 ${isActive ? 'underline' : ''}`}
                        >
                          About Us
                        </NavLink>
                        <NavLink 
                          to="/service" 
                          onClick={toggleMenu} 
                          className={({ isActive }) => `text-white text-2xl font-semibold hover:text-pink-400 ${isActive ? 'underline' : ''}`}
                        >
                          Services
                        </NavLink>
                        <NavLink 
                          to="/gallery" 
                          onClick={toggleMenu} 
                          className={({ isActive }) => `text-white text-2xl font-semibold hover:text-pink-400 ${isActive ? 'underline' : ''}`}
                        >
                          Media
                        </NavLink>
                        <NavLink 
                          to="/test" 
                          onClick={toggleMenu} 
                          className={({ isActive }) => `text-white text-2xl font-semibold hover:text-pink-400 ${isActive ? 'underline' : ''}`}
                        >
                          Reviews
                        </NavLink>
                        <NavLink 
                          to="/events" 
                          onClick={toggleMenu} 
                          className={({ isActive }) => `text-white text-2xl font-semibold hover:text-pink-400 ${isActive ? 'underline' : ''}`}
                        >
                          Events
                        </NavLink>
                        <NavLink 
                          to="/contactus" 
                          onClick={toggleMenu} 
                          className={({ isActive }) => `text-white text-2xl font-semibold hover:text-pink-400 ${isActive ? 'underline' : ''}`}
                        >
                          Reach Out
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

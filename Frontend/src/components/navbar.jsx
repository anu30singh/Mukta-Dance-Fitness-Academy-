import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = () => {
    return (
        <nav className="bg-black p-2 border-b border-gray-800">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={Logo} alt="Mukta Saxena's Academy Logo" className="w-24 h-12 sm:w-24 sm:h-16" />
                </div>

                {/* Navigation Links */}
                <div className="flex-1 flex justify-center">
                    <div className="flex space-x-4">
                        <NavLink to="/" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Home</NavLink>
                        <NavLink to="/about" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">About Us</NavLink>
                        <NavLink to="/service" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Services</NavLink>
                        <NavLink to="/gallery" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Media</NavLink>
                        <NavLink to="/test" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Reviews</NavLink>
                        <NavLink to="/events" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Events</NavLink>
                        <NavLink to="/contactus" className="text-white font-semibold hover:text-pink-500 hover:underline" activeClassName="underline">Reach Out</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

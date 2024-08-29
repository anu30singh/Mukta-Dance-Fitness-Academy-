// Layout.jsx
import React from 'react';
import Navbar from '../Frontend/src/components/navbar.jsx'; // Adjust the path if needed
import Footer from '../Frontend/src/components/Footer'; 
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="text-white min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

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

import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-green-600 font-bold text-2xl">LocalVendorsBazaar</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
          <Link to="/faq" className="text-gray-700 hover:text-green-600 font-medium">FAQ</Link>
          <Link to="/blog" className="text-gray-700 hover:text-green-600 font-medium">Blog</Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</Link>
          <Link to="/shop" className="text-gray-700 hover:text-green-600 font-medium">Shop</Link>
          <Link to="/signup" className="text-green-500 border border-green-500 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white font-semibold">Become a Vendor</Link>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'sans-serif' }}>
      
      {/* Navigation Bar */}
      <nav className="bg-green-600 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img src="/assets/logo.png" alt="Logo" className="h-10" />
          <div className="flex space-x-4">
            <Link to="/" className="text-white font-semibold hover:underline">Home</Link>
            <Link to="/faq" className="text-white font-semibold hover:underline">FAQ</Link>
            <Link to="/blog" className="text-white font-semibold hover:underline">Blog</Link>
            <Link to="/contact" className="text-white font-semibold hover:underline">Contact</Link>
            <Link to="/vendor-signup" className="text-white font-semibold hover:underline">Become a Vendor</Link>
            <Link to="/shop" className="text-white font-semibold hover:underline">Shop</Link>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="rounded px-2 py-1"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="rounded px-2 py-1"
          />
          <Link to="/cart">
            <img src="/assets/cart-icon-white.png" alt="Cart" className="h-8" />
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center py-12 px-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Local Vendors Bazaar!</h1>
        <p className="text-lg mb-8">Connecting Local Sellers and Buyers Together</p>
        <img
          src="/assets/flyer-v2.png"
          alt="Shop Local Flyer"
          className="w-full max-w-3xl rounded shadow-md"
        />
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center p-4">
        © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
      </footer>
      
    </div>
  );
};

export default Home;
























































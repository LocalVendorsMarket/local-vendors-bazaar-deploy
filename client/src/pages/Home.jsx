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

      {/* Main Content (MATCHING ShopPage layout) */}
      <main className="flex-grow bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Welcome to Local Vendors Bazaar!</h1>
          <p className="text-lg mb-4">
            Browse, Shop, and Support your Local Businesses!
          </p>
          {/* You can insert any future components here (featured products, categories, etc.) */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center p-4">
        © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
      </footer>
      
    </div>
  );
};

export default Home;






















































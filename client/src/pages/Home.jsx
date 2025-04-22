import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🏡 Welcome to Local Vendors Bazaar!</h1>
        <p className="text-lg md:text-xl mb-6">Shop and Save Locally — Supporting Chicago and Beyond!</p>

        {/* Search Bar + Zip Code */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-3 rounded-lg text-black focus:outline-none w-64"
          />
          <input
            type="text"
            placeholder="Enter Zip Code"
            className="px-4 py-3 rounded-lg text-black focus:outline-none w-40"
          />
          <button className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Search
          </button>
        </div>
      </div>

      {/* Flyer Image */}
      <div className="flex justify-center mt-10 px-4">
        <img
          src="/assets/flyer-v2.png"
          alt="Local Vendors Bazaar Flyer"
          className="rounded-xl shadow-lg w-full max-w-4xl"
        />
      </div>

      {/* Vendor CTA Section */}
      <div className="bg-gray-50 mt-10 py-10 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Are You a Local Vendor?</h2>
        <p className="text-gray-600 text-lg mb-6">
          Join our marketplace and connect with local buyers near you!
        </p>
        <Link
          to="/signup"
          className="inline-block px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
        >
          Become a Vendor
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 mt-auto text-center text-gray-600">
        &copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;









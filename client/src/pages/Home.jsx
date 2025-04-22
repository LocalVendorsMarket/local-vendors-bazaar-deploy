import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      
      {/* HERO HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-green-600 mb-4">
          🏡 Welcome to Local Vendors Bazaar!
        </h1>
        <p className="text-gray-600 text-lg">
          Discover local shops, save big, and support your community.
        </p>
      </div>

      {/* SEARCH BAR + ZIP */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-grow px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          placeholder="Enter Zip Code"
          className="w-40 px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition">
          Search
        </button>
      </div>

      {/* SHOP PRODUCTS CTA */}
      <div className="text-center">
        <Link
          to="/shop"
          className="inline-block bg-green-500 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:bg-green-600 transition"
        >
          🛒 Start Shopping
        </Link>
      </div>

    </div>
  );
};

export default Home;



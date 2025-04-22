import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = ['Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods'];

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

      {/* CATEGORIES */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className="px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition font-semibold"
          >
            {category}
          </button>
        ))}
      </div>

      {/* FLYER IMAGE */}
      <div className="mb-12">
        <img
          src="/assets/flyer-v2.png"
          alt="Local Vendors Bazaar Flyer"
          className="max-w-full rounded-xl shadow-lg"
        />
      </div>

      {/* BECOME A VENDOR CTA */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-700 mb-2">Become a Vendor!</h2>
        <p className="text-gray-600 mb-4">List your business and reach thousands of local buyers.</p>
        <Link
          to="/signup"
          className="inline-block bg-green-500 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:bg-green-600 transition"
        >
          List My Business
        </Link>
      </div>

      {/* FOOTER */}
      <footer className="w-full text-center text-gray-500 text-sm py-6 border-t mt-10">
        © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;




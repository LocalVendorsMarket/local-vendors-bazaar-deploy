import React from 'react';

const VendorSignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-5xl font-extrabold text-green-600 mb-6">🏪 Become a Local Vendor</h1>
      <p className="text-gray-600 text-lg mb-8 text-center max-w-2xl">
        Join our marketplace and reach new customers in your community. 
        It's fast, easy, and helps your business grow!
      </p>

      {/* Vendor Signup Form */}
      <form className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-2xl space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Business Name</label>
          <input
            type="text"
            placeholder="Your Business Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Phone</label>
          <input
            type="tel"
            placeholder="123-456-7890"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Website (Optional)</label>
          <input
            type="url"
            placeholder="https://yourwebsite.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Business Description</label>
          <textarea
            placeholder="Tell us about your products and services..."
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default VendorSignupPage;







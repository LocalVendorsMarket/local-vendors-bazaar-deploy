import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VendorSignupPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-xl"
      >
        {/* 🔥 DEBUG TEXT */}
        <h1 className="text-4xl font-bold text-red-600 text-center mb-10">
          🔥 CONFIRMED JSX: This is VendorSignupPage.jsx
        </h1>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Become a Local Vendor
        </h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-600 text-lg font-semibold"
          >
            🎉 Thank you! Your application has been submitted.
          </motion.div>
        ) : (
          <form
            action="https://formspree.io/f/movebonk"
            method="POST"
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
              <input
                type="text"
                name="businessName"
                required
                placeholder="Your Business Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="123-456-7890"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Website (Optional)</label>
              <input
                type="url"
                name="website"
                placeholder="https://yourbusiness.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Description</label>
              <textarea
                name="description"
                required
                placeholder="Tell us what you sell, how you're local, etc."
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-xl transition hover:bg-green-600"
            >
              Submit Application
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default VendorSignupPage;











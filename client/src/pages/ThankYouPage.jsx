import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-5xl font-extrabold text-green-600 mb-6">🎉 Thank You!</h1>
      <p className="text-gray-600 text-lg mb-8 text-center max-w-2xl">
        Your application has been submitted successfully. 
        We’ll review your information and get back to you soon.
      </p>

      <Link
        to="/shop"
        className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition text-lg"
      >
        🛍️ Start Shopping
      </Link>
    </div>
  );
};

export default ThankYouPage;







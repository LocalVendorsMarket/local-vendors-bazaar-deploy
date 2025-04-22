import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <NavigationBar />
      <main className="mt-24 text-center px-4">
        <h1 className="text-5xl font-extrabold text-green-600 mb-4">🎉 Thank You!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Your vendor application has been submitted. We’ll reach out soon!
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          🛒 Start Shopping
        </Link>
      </main>
    </div>
  );
};

export default ThankYouPage;






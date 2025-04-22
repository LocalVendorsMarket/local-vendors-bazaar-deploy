import React from 'react';
import NavigationBar from '../components/NavigationBar';

const Faq = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NavigationBar />
      <h1 className="text-4xl font-bold text-green-600 mt-20">❓ Frequently Asked Questions</h1>
      <p className="mt-4 text-gray-600 text-lg text-center">
        Find answers to your common questions about our marketplace.
      </p>
    </div>
  );
};

export default Faq;




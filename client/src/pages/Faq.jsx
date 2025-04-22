import React from 'react';
import NavigationBar from '../components/NavigationBar';

const Faq = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NavigationBar />
      <main className="mt-24 text-center px-4">
        <h1 className="text-4xl font-bold text-green-600">❓ Frequently Asked Questions</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Find answers to common questions about our marketplace.
        </p>
      </main>
    </div>
  );
};

export default Faq;





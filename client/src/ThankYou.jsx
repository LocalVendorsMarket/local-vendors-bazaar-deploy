import React from 'react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-xl w-full">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You! 🎉</h1>
        <p className="text-gray-700 text-lg">
          Your vendor application has been submitted. We'll reach out to you soon!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;


import React from 'react';
import NavigationBar from '../components/NavigationBar';

const VendorSignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NavigationBar />
      <h1 className="text-4xl font-bold text-green-600 mt-20">🏪 Become a Vendor</h1>
      <p className="mt-4 text-gray-600 text-lg text-center">
        Join LocalVendorsBazaar and connect your products with thousands of local buyers!
      </p>
    </div>
  );
};

export default VendorSignupPage;





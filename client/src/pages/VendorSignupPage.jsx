import React from 'react';
import NavigationBar from '../components/NavigationBar';

const VendorSignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NavigationBar />
      <main className="mt-24 text-center px-4">
        <h1 className="text-4xl font-bold text-green-600">🏪 Become a Vendor</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Join LocalVendorsBazaar and reach thousands of local buyers.
        </p>
      </main>
    </div>
  );
};

export default VendorSignupPage;






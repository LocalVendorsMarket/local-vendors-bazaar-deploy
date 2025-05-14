import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorSupport = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-6 flex flex-col items-center justify-start">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-6 mt-6">
          <h1 className="text-2xl font-bold mb-4">Vendor Support</h1>
          <p className="mb-4">
            Need help? Reach out to our vendor support team for assistance with your store, orders, or account.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Email us at <a href="mailto:support@localvendorsbazaar.com" className="text-blue-600 underline">support@localvendorsbazaar.com</a></li>
            <li>Visit the FAQ section for common questions</li>
            <li>Chat with us using the live support button on your dashboard</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default VendorSupport;








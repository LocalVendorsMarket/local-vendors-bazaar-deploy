import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorSupport = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Vendor Support</h1>
        <p className="text-gray-700 mb-4">Need help? Reach out to our vendor support team for assistance with your store, orders, or account.</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Email us at support@localvendorsbazaar.com</li>
          <li>Visit the FAQ section for common questions</li>
          <li>Chat with us using the live support button on your dashboard</li>
        </ul>
      </main>
    </div>
  );
};

export default VendorSupport;













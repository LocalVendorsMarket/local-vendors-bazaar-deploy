import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorSupport = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Vendor Support</h1>
        <p className="text-gray-700 mb-6">
          Need help? Reach out to our vendor support team for assistance with your store, orders, or account.
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Email us at <a href="mailto:support@localvendorsbazaar.com" className="text-blue-600 underline">support@localvendorsbazaar.com</a></li>
          <li>Visit the <a href="/faq" className="text-blue-600 underline">FAQ section</a> for common questions</li>
          <li>Chat with us using the live support button on your dashboard</li>
        </ul>
      </main>
    </div>
  );
};

export default VendorSupport;












import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorSupport = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-6 flex items-start justify-center">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow p-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Vendor Support</h1>
          <p className="mb-6 text-center text-gray-600">
            Need help? Reach out to our vendor support team for assistance with your store, orders, or account.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Email us at <a href="mailto:support@localvendorsbazaar.com" className="text-blue-600 underline">support@localvendorsbazaar.com</a></li>
            <li>Visit the <a href="/faq" className="text-blue-600 underline">FAQ section</a> for common questions</li>
            <li>Chat with us using the live support button on your dashboard</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default VendorSupport;










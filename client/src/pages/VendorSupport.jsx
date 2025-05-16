import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorSupport = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Vendor Support</h1>
        <p className="text-gray-700 mb-4">
          Need help? Reach out to our support team for assistance with your store, orders, or account.
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">📧 Email Support</h2>
            <p className="text-gray-600 mt-2">Send us an email at <strong>support@localvendorsbazaar.com</strong></p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">📖 FAQ Section</h2>
            <p className="text-gray-600 mt-2">Check our <a href="/faq" className="text-green-600 underline">FAQ page</a> for answers to common questions.</p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">💬 Live Chat</h2>
            <p className="text-gray-600 mt-2">Use the live chat button on your dashboard to connect with our team.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VendorSupport;













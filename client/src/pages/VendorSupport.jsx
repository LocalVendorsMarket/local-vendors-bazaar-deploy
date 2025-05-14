import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorSupport = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Support & Help</h1>
        <p className="mb-4 text-gray-700">
          Need help with something? We're here to assist you with any issues, questions, or concerns regarding your vendor experience.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>How do I update my store details?</li>
            <li>Where can I track my orders?</li>
            <li>How can I upload new products?</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-600">
            Email us at <a href="mailto:support@localvendorsbazaar.com" className="text-blue-600 underline">support@localvendorsbazaar.com</a> and we’ll respond within 24 hours.
          </p>
        </div>
      </main>
    </div>
  );
};

export default VendorSupport;







import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorSupport = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <VendorSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Vendor Help & Support</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded shadow">
              <summary className="font-medium cursor-pointer">How do I list a new product?</summary>
              <p className="mt-2 text-gray-700">
                Go to Product Management and click "Add New Product." Fill out all required details and click Submit.
              </p>
            </details>
            <details className="bg-white p-4 rounded shadow">
              <summary className="font-medium cursor-pointer">How do I update my account info?</summary>
              <p className="mt-2 text-gray-700">
                Visit the Account Settings page from the sidebar to update your profile and business information.
              </p>
            </details>
            <details className="bg-white p-4 rounded shadow">
              <summary className="font-medium cursor-pointer">How do I contact support?</summary>
              <p className="mt-2 text-gray-700">
                You can use the contact form below or email us at support@localvendorsbazaar.com.
              </p>
            </details>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <form className="bg-white p-6 rounded shadow max-w-xl space-y-4">
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Describe your issue or question"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default VendorSupport;




import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AccountSettings = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Account Settings</h1>
        <p className="text-gray-700 mb-4">
          Update your profile information, preferences, and other account-related settings here.
        </p>

        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="(123) 456-7890"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
};

export default AccountSettings;











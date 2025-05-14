import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AccountSettings = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
        <p className="text-gray-700 mb-4">
          Update your profile, contact details, and password here.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-xl p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-xl p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-xl p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter a new password"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AccountSettings;









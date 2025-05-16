import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AccountSettings = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Account Settings</h1>
        <p className="text-gray-600 mb-6">
          Update your profile, preferences, and account details.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-1 w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="New Password"
              className="mt-1 w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
};

export default AccountSettings;










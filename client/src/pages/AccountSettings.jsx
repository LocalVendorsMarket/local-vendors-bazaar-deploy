import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AccountSettings = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
        <form className="bg-white shadow rounded-xl p-6 space-y-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name</label>
            <input type="text" placeholder="Jane's Boutique" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="vendor@example.com" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" placeholder="(123) 456-7890" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
            <input type="text" placeholder="123 Market Street, Chicago, IL" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-400" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;





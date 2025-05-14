import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AccountSettings = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-lg">
            Update your personal information, store preferences, and password here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AccountSettings;








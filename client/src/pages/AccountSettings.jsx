import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AccountSettings = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Account Settings</h1>
        <p className="text-gray-700">Update your profile, preferences, and account details.</p>
      </main>
    </div>
  );
};

export default AccountSettings;











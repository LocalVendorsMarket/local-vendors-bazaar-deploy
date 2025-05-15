import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AccountSettings = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Account Settings</h1>
        <p className="text-gray-600 text-lg">
          Update your profile, preferences, and account details.
        </p>
      </main>
    </div>
  );
};

export default AccountSettings;









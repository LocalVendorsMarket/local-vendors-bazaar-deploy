import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AccountSettings = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
        <p>Update your vendor profile, preferences, and password here.</p>
      </div>
    </div>
  );
};

export default AccountSettings;







import React from 'react';
import VendorSidebar from '../../components/VendorSidebar';

const AccountSettings = () => {
  return (
    <div className="flex">
      <VendorSidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
        {/* Email, password, and profile info here */}
      </div>
    </div>
  );
};

export default AccountSettings;




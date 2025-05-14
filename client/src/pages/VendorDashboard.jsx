import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Vendor Dashboard Overview</h1>
        <p>Welcome to your vendor dashboard! Use the sidebar to manage your store.</p>
      </div>
    </div>
  );
};

export default VendorDashboard;






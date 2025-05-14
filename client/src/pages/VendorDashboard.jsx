import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <VendorSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Vendor Dashboard Overview</h1>
        <p>Welcome to your dashboard. From here, you can manage your products, orders, and account settings.</p>
      </div>
    </div>
  );
};

export default VendorDashboard;




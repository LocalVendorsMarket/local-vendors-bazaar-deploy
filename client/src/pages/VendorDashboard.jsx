import React from 'react';
import VendorSidebar from 'components/VendorSidebar';

const VendorDashboard = () => {
  return (
    <div className="flex">
      <VendorSidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Vendor Dashboard Overview</h1>
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
};

export default VendorDashboard;



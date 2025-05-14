import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorSupport = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Vendor Support</h1>
        <p>Need help? Reach out to support or view the vendor FAQ here.</p>
      </div>
    </div>
  );
};

export default VendorSupport;






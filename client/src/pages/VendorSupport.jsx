import React from 'react';
import VendorSidebar from '../../components/VendorSidebar';

const VendorSupport = () => {
  return (
    <div className="flex">
      <VendorSidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Vendor Support</h1>
        {/* FAQ, contact form, or help content here */}
      </div>
    </div>
  );
};

export default VendorSupport;



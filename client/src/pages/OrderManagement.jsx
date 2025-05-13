import React from 'react';
import VendorSidebar from 'components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="flex">
      <VendorSidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Order Management</h1>
        {/* Order list and status updates here */}
      </div>
    </div>
  );
};

export default OrderManagement;


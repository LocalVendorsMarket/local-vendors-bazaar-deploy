import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex">
      <VendorSidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Product Management</h1>
        {/* Product management content here */}
      </div>
    </div>
  );
};

export default ProductManagement;


import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Product Management</h1>
        <p>Add, edit, or remove products from your vendor catalog here.</p>
      </div>
    </div>
  );
};

export default ProductManagement;





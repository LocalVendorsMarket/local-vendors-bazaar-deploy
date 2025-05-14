import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Product Management</h1>
        <p>Manage your product listings here.</p>
      </main>
    </div>
  );
};

export default ProductManagement;




import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 flex flex-col items-center justify-start bg-white">
        <div className="max-w-4xl w-full">
          <h1 className="text-3xl font-bold mb-4">Product Management</h1>
          <p className="text-gray-700">
            Manage your product listings, update pricing, and track inventory from here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;







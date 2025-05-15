import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <main className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Product Management</h1>
          <p className="text-gray-700">Manage your product listings and inventory here.</p>
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;










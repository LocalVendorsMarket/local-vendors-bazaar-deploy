import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Product Management</h1>
        <p className="text-gray-600 text-lg">
          Here you can add, update, or remove products listed in your store.
        </p>
      </main>
    </div>
  );
};

export default ProductManagement;










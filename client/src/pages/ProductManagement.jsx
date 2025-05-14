import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Product Management</h1>
        <p className="text-lg text-gray-700 mb-4">
          Add, edit, or remove products in your store. Manage your inventory and ensure your listings are up to date.
        </p>
        <div className="p-4 bg-white rounded-xl shadow-md">
          {/* Placeholder for product management form or list */}
          <p className="text-gray-500">Your products will be listed here soon.</p>
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;







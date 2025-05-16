import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-xl p-6">
          <h1 className="text-3xl font-semibold text-green-700 mb-4">Product Management</h1>
          <p className="text-gray-600 mb-6">
            Manage your product listings, update inventory, and add new products from this section.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>View and edit existing products</li>
            <li>Upload images and descriptions</li>
            <li>Adjust pricing and stock levels</li>
            <li>Add or remove product categories</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;











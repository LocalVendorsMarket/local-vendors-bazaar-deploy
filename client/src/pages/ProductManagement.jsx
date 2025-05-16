import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Product Management</h1>
        <p className="text-gray-700 mb-4">
          Manage your listed products. You can add, update, or remove products here to keep your store up to date.
        </p>

        <div className="border border-dashed border-gray-300 p-6 rounded-lg text-center bg-white shadow">
          <p className="text-gray-500">No products yet. Start by adding your first product.</p>
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;













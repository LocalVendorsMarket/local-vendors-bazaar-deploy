import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Product Management</h1>
        <p className="text-gray-700 mb-4">
          Manage your listed products, update pricing, and upload new items to your store.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-600 mb-2">Your Products</h2>
          <p className="text-gray-600">This section will display all products you've listed.</p>
          <p className="text-sm text-gray-500 mt-2">You can also edit, delete, or add new products from here.</p>
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;












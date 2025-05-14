import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Product Management</h1>
        <p className="text-gray-700">
          Add, edit, or remove products listed in your store. Ensure your listings are up to date and attractive to buyers.
        </p>
      </main>
    </div>
  );
};

export default ProductManagement;








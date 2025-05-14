import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Product Management</h1>
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-lg">
            Add, update, or remove your products. Keep your catalog fresh and accurate to attract more buyers.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;






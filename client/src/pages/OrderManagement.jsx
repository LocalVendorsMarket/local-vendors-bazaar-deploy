import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-6 flex justify-center items-start">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-semibold mb-4">Order Management</h1>
          <p className="text-gray-700 text-base">
            Track and manage all your orders from this section.
          </p>
        </div>
      </main>
    </div>
  );
};

export default OrderManagement;




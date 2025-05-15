import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <VendorSidebar />
      <main className="flex-1 p-8 flex justify-center items-start">
        <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Order Management</h1>
          <p className="text-gray-600">
            Track and manage all your orders from this section.
          </p>
        </div>
      </main>
    </div>
  );
};

export default OrderManagement;








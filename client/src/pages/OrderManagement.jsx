import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 flex flex-col items-center justify-center">
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-3xl">
          <h1 className="text-2xl font-bold mb-4 text-center">Order Management</h1>
          <p className="text-gray-700 text-center">
            Track and manage all your orders from this section.
          </p>
        </div>
      </main>
    </div>
  );
};

export default OrderManagement;





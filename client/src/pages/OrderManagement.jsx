import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <VendorSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Order Management</h1>
          <p className="text-gray-600">
            Track and manage all your orders from this section.
          </p>
        </div>
      </main>
    </div>
  );
};

export default OrderManagement;










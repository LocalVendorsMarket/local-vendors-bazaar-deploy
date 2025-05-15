import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <VendorSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
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












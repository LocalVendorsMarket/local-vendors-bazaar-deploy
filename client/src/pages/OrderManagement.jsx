import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 max-w-5xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold mb-6">Order Management</h1>
        <p className="text-gray-700">
          Track and manage all your orders from this section.
        </p>
      </main>
    </div>
  );
};

export default OrderManagement;







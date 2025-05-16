import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Management</h1>
        <p className="text-gray-700">Track and manage all your orders from this section.</p>
      </main>
    </div>
  );
};

export default OrderManagement;















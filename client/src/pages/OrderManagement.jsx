import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Order Management</h1>
        <p>Track and manage all your orders from this section.</p>
      </main>
    </div>
  );
};

export default OrderManagement;



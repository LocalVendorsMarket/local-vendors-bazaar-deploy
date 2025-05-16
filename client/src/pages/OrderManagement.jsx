import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Order Management</h1>
        <p className="text-gray-700 mb-4">
          Track and manage all your customer orders here. This panel helps you update order status, view order history,
          and ensure timely deliveries.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-600 mb-2">Recent Orders</h2>
          <p className="text-gray-600">You’ll be able to see real-time updates on new and existing orders.</p>
          <p className="text-sm text-gray-500 mt-2">Order status, shipping, and fulfillment actions go here.</p>
        </div>
      </main>
    </div>
  );
};

export default OrderManagement;















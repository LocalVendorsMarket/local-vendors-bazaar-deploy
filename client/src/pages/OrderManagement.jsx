import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white hidden md:block">
        <VendorSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Management</h1>
          <p className="text-gray-600 text-lg">
            Track and manage all your orders from this section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;













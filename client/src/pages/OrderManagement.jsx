import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const OrderManagement = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-green-700">Order Management</h1>
          <p className="text-gray-700 mb-4">
            Track and manage all your orders from this section.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h2 className="font-semibold text-gray-800">Pending Orders</h2>
              <p>Review and approve recent customer purchases.</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Shipped Orders</h2>
              <p>Track packages that have been dispatched to customers.</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Returned Items</h2>
              <p>Handle customer returns and restocking updates.</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Order History</h2>
              <p>View past orders and transaction details.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderManagement;














import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Vendor Dashboard Overview</h1>
        <p className="text-gray-700 mb-4">
          Welcome to your vendor dashboard! Use the sidebar to manage your store, view performance analytics, and update your account settings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Sales Overview</h2>
            <p className="text-gray-600">View total sales, recent orders, and revenue trends.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Store Stats</h2>
            <p className="text-gray-600">Track visits, engagement, and customer insights.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VendorDashboard;
















import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Vendor Dashboard Overview</h1>
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-lg">
            Welcome to your vendor dashboard! Use the sidebar to manage your store, products, orders, and view reports.
          </p>
        </div>
      </main>
    </div>
  );
};

export default VendorDashboard;







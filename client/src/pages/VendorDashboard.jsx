import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Vendor Dashboard Overview</h1>
        <p className="text-gray-600 text-lg">
          Welcome to your vendor dashboard! Use the sidebar to manage your store, view performance analytics,
          and update your account settings.
        </p>
      </main>
    </div>
  );
};

export default VendorDashboard;














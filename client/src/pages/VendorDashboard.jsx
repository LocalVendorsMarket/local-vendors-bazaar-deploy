// VendorDashboard.jsx
import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Vendor Dashboard Overview</h1>
        <p className="text-gray-700">
          Welcome to your vendor dashboard! Use the sidebar to manage your store, view performance analytics, and update your account settings.
        </p>
      </main>
    </div>
  );
};

export default VendorDashboard;












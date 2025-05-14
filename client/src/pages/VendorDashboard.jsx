import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <main className="flex-1 bg-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Vendor Dashboard Overview</h1>
          <p className="text-lg text-gray-700">
            Welcome to your vendor dashboard! Use the sidebar to manage your store, view performance analytics, and update your account settings.
          </p>
        </div>
      </main>
    </div>
  );
};

export default VendorDashboard;










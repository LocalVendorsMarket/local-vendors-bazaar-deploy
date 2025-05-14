import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 flex flex-col items-center justify-start bg-white">
        <div className="max-w-4xl w-full">
          <h1 className="text-3xl font-bold mb-4">Vendor Dashboard Overview</h1>
          <p className="text-gray-700">
            Welcome to your vendor dashboard! Use the sidebar to manage your store, view performance analytics, and update your account settings.
          </p>
        </div>
      </main>
    </div>
  );
};

export default VendorDashboard;











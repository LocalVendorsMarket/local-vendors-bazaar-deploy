import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 flex flex-col items-center justify-center">
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-3xl">
          <h1 className="text-2xl font-bold mb-4 text-center">Vendor Dashboard Overview</h1>
          <p className="text-gray-700 text-center">
            Welcome to your vendor dashboard! Use the sidebar to manage your store, view performance analytics, and update your account settings.
          </p>
        </div>
      </main>
    </div>
  );
};

export default VendorDashboard;








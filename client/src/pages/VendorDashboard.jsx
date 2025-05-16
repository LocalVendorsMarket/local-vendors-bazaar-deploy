import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-green-700 mb-4">Vendor Dashboard Overview</h1>
          <p className="text-gray-700 text-lg">
            Welcome to your vendor dashboard! Use the sidebar to manage your store,
            view performance analytics, and update your account settings.
          </p>
        </div>
      </main>
    </div>
  );
};

export default VendorDashboard;















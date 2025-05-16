import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AnalyticsReports = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Analytics & Reports</h1>
        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Sales</h2>
            <p className="text-2xl font-bold text-green-600">$12,340</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Monthly Visitors</h2>
            <p className="text-2xl font-bold text-green-600">8,210</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Top Product</h2>
            <p className="text-lg text-gray-700">Organic Lip Balm</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Returning Customers</h2>
            <p className="text-lg text-gray-700">47%</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsReports;











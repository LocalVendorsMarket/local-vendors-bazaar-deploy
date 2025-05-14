import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AnalyticsReports = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 flex flex-col items-center justify-start p-10">
        <div className="w-full max-w-4xl bg-white shadow rounded-2xl p-8">
          <h1 className="text-2xl font-bold mb-4">Analytics & Reports</h1>
          <p className="text-gray-700 mb-4">
            View insights into your store performance, sales, and customer behavior.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-100 rounded-lg shadow text-center">
              <h2 className="text-lg font-semibold mb-2">Total Sales</h2>
              <p className="text-2xl font-bold">$12,340</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg shadow text-center">
              <h2 className="text-lg font-semibold mb-2">Monthly Visitors</h2>
              <p className="text-2xl font-bold">8,210</p>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg shadow text-center">
              <h2 className="text-lg font-semibold mb-2">Top Product</h2>
              <p className="text-2xl font-bold">Organic Lip Balm</p>
            </div>
            <div className="p-4 bg-purple-100 rounded-lg shadow text-center">
              <h2 className="text-lg font-semibold mb-2">Returning Customers</h2>
              <p className="text-2xl font-bold">47%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsReports;










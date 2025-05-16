import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AnalyticsReports = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Analytics & Reports</h1>
        <p className="text-gray-700 mb-4">
          View insights into your store performance, track sales trends, and understand customer behavior to grow your business.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-green-600">Total Sales</h2>
            <p className="text-2xl font-bold text-gray-800">$12,340</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-green-600">Monthly Visitors</h2>
            <p className="text-2xl font-bold text-gray-800">8,210</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-green-600">Top Product</h2>
            <p className="text-gray-800">Organic Lip Balm</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-green-600">Returning Customers</h2>
            <p className="text-gray-800">47%</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsReports;












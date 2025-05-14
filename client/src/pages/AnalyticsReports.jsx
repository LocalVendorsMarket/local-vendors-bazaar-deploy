import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AnalyticsReports = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Analytics & Reports</h1>
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-lg">
            View insights, sales trends, and performance metrics to help grow your business.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsReports;








import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AnalyticsReports = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics & Reports</h1>
        <p className="text-gray-600 text-lg">
          View insights into your store performance, sales, and customer behavior.
        </p>
      </main>
    </div>
  );
};

export default AnalyticsReports;










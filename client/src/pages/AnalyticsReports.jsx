import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AnalyticsReports = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <main className="flex-1 max-w-5xl mx-auto p-8 bg-white shadow rounded-xl mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Analytics & Reports</h1>
        <p className="text-center text-gray-700">
          Monitor your store’s performance, customer engagement, and sales metrics.
        </p>
        {/* Placeholder for future charts or metrics */}
        <div className="mt-8 text-center text-gray-500 italic">
          Charts and reports will be available here soon.
        </div>
      </main>
    </div>
  );
};

export default AnalyticsReports;









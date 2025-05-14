import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AnalyticsReports = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Analytics & Reports</h1>
        <p>Analyze your store’s performance and download reports.</p>
      </main>
    </div>
  );
};

export default AnalyticsReports;






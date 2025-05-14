import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const AnalyticsReports = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Analytics & Reports</h1>
        <p>Track your performance, view reports and gain insights here.</p>
      </div>
    </div>
  );
};

export default AnalyticsReports;







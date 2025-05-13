import React from 'react';
import VendorSidebar from 'components/VendorSidebar';

const AnalyticsReports = () => {
  return (
    <div className="flex">
      <VendorSidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Analytics & Reports</h1>
        {/* Charts, stats, and graphs here */}
      </div>
    </div>
  );
};

export default AnalyticsReports;



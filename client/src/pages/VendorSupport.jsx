import React from 'react';
import VendorSidebar from '../components/VendorSidebar';

const VendorSupport = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <main className="flex-1 p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Support & Help</h1>
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-lg">
            Need assistance? Reach out to our support team or check out the vendor resources here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default VendorSupport;






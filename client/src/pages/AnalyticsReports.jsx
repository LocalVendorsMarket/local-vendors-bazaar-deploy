import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import VendorSidebar from '../components/VendorSidebar';

const salesData = [
  { name: 'Mon', sales: 120 },
  { name: 'Tue', sales: 200 },
  { name: 'Wed', sales: 150 },
  { name: 'Thu', sales: 278 },
  { name: 'Fri', sales: 189 },
  { name: 'Sat', sales: 239 },
  { name: 'Sun', sales: 349 },
];

const summary = {
  totalSales: '$12,400',
  totalOrders: 320,
  topProduct: 'Handmade Necklace',
  activeCustomers: 82,
};

const AnalyticsReports = () => {
  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Analytics & Reports</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white shadow rounded-2xl p-4">
            <h2 className="text-sm text-gray-500">Total Sales</h2>
            <p className="text-xl font-semibold">{summary.totalSales}</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-4">
            <h2 className="text-sm text-gray-500">Total Orders</h2>
            <p className="text-xl font-semibold">{summary.totalOrders}</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-4">
            <h2 className="text-sm text-gray-500">Top Product</h2>
            <p className="text-xl font-semibold">{summary.topProduct}</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-4">
            <h2 className="text-sm text-gray-500">Active Customers</h2>
            <p className="text-xl font-semibold">{summary.activeCustomers}</p>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Weekly Sales</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3B82F6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReports;





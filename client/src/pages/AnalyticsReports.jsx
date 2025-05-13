import React from 'react';
import VendorSidebar from '../../components/VendorSidebar';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const dummySalesData = [
  { date: 'May 1', sales: 120 },
  { date: 'May 2', sales: 90 },
  { date: 'May 3', sales: 150 },
  { date: 'May 4', sales: 200 },
  { date: 'May 5', sales: 170 },
  { date: 'May 6', sales: 240 },
  { date: 'May 7', sales: 300 },
];

const topProducts = [
  { name: 'Organic T-Shirt', sold: 120, revenue: '$2,160', rating: '⭐⭐⭐⭐' },
  { name: 'Handmade Soap', sold: 85, revenue: '$1,275', rating: '⭐⭐⭐⭐⭐' },
  { name: 'Beaded Jewelry Set', sold: 62, revenue: '$1,550', rating: '⭐⭐⭐⭐' },
];

const AnalyticsReports = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <div className="flex-1 p-6 md:p-10">
        <h2 className="text-2xl font-bold mb-6">Analytics & Reports</h2>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow p-4">
            <h4 className="text-gray-500 text-sm">Total Sales</h4>
            <p className="text-2xl font-semibold mt-1">$5,720</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h4 className="text-gray-500 text-sm">Orders This Week</h4>
            <p className="text-2xl font-semibold mt-1">142</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h4 className="text-gray-500 text-sm">Top Product</h4>
            <p className="text-lg font-medium mt-1">Organic T-Shirt</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h4 className="text-gray-500 text-sm">Views This Week</h4>
            <p className="text-2xl font-semibold mt-1">2,318</p>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h3 className="text-lg font-bold mb-4">Sales - Last 7 Days</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={dummySalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Products Table */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-bold mb-4">Top-Selling Products</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 font-semibold text-gray-600">Product</th>
                  <th className="py-2 px-4 font-semibold text-gray-600">Units Sold</th>
                  <th className="py-2 px-4 font-semibold text-gray-600">Revenue</th>
                  <th className="py-2 px-4 font-semibold text-gray-600">Rating</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((item, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.sold}</td>
                    <td className="py-2 px-4">{item.revenue}</td>
                    <td className="py-2 px-4">{item.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReports;




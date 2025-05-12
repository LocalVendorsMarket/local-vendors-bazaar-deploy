import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from 'recharts';

const AnalyticsReports = () => {
  const salesData = [
    { date: 'May 1', sales: 5 },
    { date: 'May 2', sales: 9 },
    { date: 'May 3', sales: 6 },
    { date: 'May 4', sales: 10 },
    { date: 'May 5', sales: 7 },
    { date: 'May 6', sales: 12 },
    { date: 'May 7', sales: 8 },
  ];

  const productPerformance = [
    { name: 'Necklace', units: 18 },
    { name: 'Soap', units: 14 },
    { name: 'T-Shirt', units: 9 },
  ];

  const revenueByCategory = [
    { name: 'Jewelry', value: 320 },
    { name: 'Health & Beauty', value: 210 },
    { name: 'Clothing', value: 180 }
  ];

  const COLORS = ['#003366', '#00509e', '#0096c7'];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f4f8fc', minHeight: '100vh' }}>
      <h1 style={{ color: '#003366', marginBottom: '2rem' }}>Analytics & Reports</h1>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#00509e' }}>Sales Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#003366" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#00509e' }}>Top Product Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productPerformance}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="units" fill="#00509e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 style={{ color: '#00509e' }}>Revenue by Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={revenueByCategory} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label>
              {revenueByCategory.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsReports;

import React from 'react';

const VendorDashboard = () => {
  // Mock stats data
  const stats = {
    totalSales: 128,
    ordersCount: 45,
    revenue: '$3,280.00',
    topProducts: [
      { name: 'Handmade Necklace', unitsSold: 18 },
      { name: 'Organic Soap', unitsSold: 14 },
      { name: 'Custom T-Shirt', unitsSold: 9 },
    ]
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f4f8fc', minHeight: '100vh' }}>
      <h1 style={{ color: '#003366', marginBottom: '2rem' }}>Vendor Dashboard</h1>

      {/* Stats Summary */}
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Total Sales</h2>
          <p style={valueStyle}>{stats.totalSales}</p>
        </div>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Orders</h2>
          <p style={valueStyle}>{stats.ordersCount}</p>
        </div>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Revenue</h2>
          <p style={valueStyle}>{stats.revenue}</p>
        </div>
      </div>

      {/* Top Selling Products */}
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ color: '#003366', marginBottom: '1rem' }}>Top-Selling Products</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
          <thead>
            <tr style={{ backgroundColor: '#00509e', color: 'white' }}>
              <th style={tableHeaderStyle}>Product Name</th>
              <th style={tableHeaderStyle}>Units Sold</th>
            </tr>
          </thead>
          <tbody>
            {stats.topProducts.map((product, index) => (
              <tr key={index} style={{ textAlign: 'center' }}>
                <td style={tableCellStyle}>{product.name}</td>
                <td style={tableCellStyle}>{product.unitsSold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles
const cardStyle = {
  backgroundColor: '#fff',
  padding: '1.5rem',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  flex: '1',
  minWidth: '200px',
};

const titleStyle = {
  fontSize: '1rem',
  color: '#666',
  marginBottom: '0.5rem',
};

const valueStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#003366',
};

const tableHeaderStyle = {
  padding: '12px',
  fontSize: '1rem',
};

const tableCellStyle = {
  padding: '10px',
  fontSize: '0.95rem',
  borderBottom: '1px solid #ddd',
};

export default VendorDashboard;

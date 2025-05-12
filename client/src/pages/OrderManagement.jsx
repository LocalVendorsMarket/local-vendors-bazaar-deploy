import React, { useState } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 101, customer: 'Sarah K.', product: 'Handmade Necklace', date: '2025-05-10', status: 'Pending' },
    { id: 102, customer: 'Jason M.', product: 'Organic Soap', date: '2025-05-09', status: 'Shipped' },
    { id: 103, customer: 'Emily W.', product: 'Custom T-Shirt', date: '2025-05-08', status: 'Delivered' },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f4f8fc', minHeight: '100vh' }}>
      <h1 style={{ color: '#003366', marginBottom: '2rem' }}>Order Management</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
        <thead>
          <tr style={{ backgroundColor: '#00509e', color: 'white' }}>
            <th style={thStyle}>Order ID</th>
            <th style={thStyle}>Customer</th>
            <th style={thStyle}>Product</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Update</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} style={{ textAlign: 'center' }}>
              <td style={tdStyle}>{order.id}</td>
              <td style={tdStyle}>{order.customer}</td>
              <td style={tdStyle}>{order.product}</td>
              <td style={tdStyle}>{order.date}</td>
              <td style={tdStyle}>{order.status}</td>
              <td style={tdStyle}>
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                  style={selectStyle}
                >
                  <option>Pending</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles
const thStyle = { padding: '12px', fontSize: '1rem' };
const tdStyle = { padding: '10px', borderBottom: '1px solid #ddd', fontSize: '0.95rem' };
const selectStyle = { padding: '6px', borderRadius: '6px', fontSize: '0.95rem' };

export default OrderManagement;

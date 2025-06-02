import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VendorSidebar from '../components/VendorSidebar';

const ProductManagement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const vendorId = localStorage.getItem('vendor_id');
    if (!vendorId) {
      navigate('/vendor-login');
    }
  }, [navigate]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <VendorSidebar />
      <main style={{ flexGrow: 1, padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#003366', marginBottom: '1rem' }}>Product Management</h1>
        <p>Here you will upload, update, or delete your products. This section will be enhanced step-by-step.</p>
      </main>
    </div>
  );
};

export default ProductManagement;
















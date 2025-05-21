import React from 'react';

const VendorWelcome = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#003366', marginBottom: '1rem' }}>🎉 Welcome to Local Vendors Bazaar!</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        You’re now part of a growing marketplace built to help local businesses like yours thrive. Here's how your shop benefits:
      </p>

      <ul style={{ lineHeight: '1.8', fontSize: '1rem' }}>
        <li><strong>🌟 Dual Exposure:</strong> Your products appear on both the HomePage (discovery) and ShopPage (search/purchase).</li>
        <li><strong>🛍️ Smart Filtering:</strong> Shoppers can find your products using filters like category, price, ratings, and zip code.</li>
        <li><strong>🖼️ Beautiful Product Displays:</strong> Add up to 5 product images with a polished, Amazon-style modal preview.</li>
        <li><strong>📍 Local Search Visibility:</strong> Buyers near your zip code can discover you through local category filters.</li>
        <li><strong>📈 Coming Soon:</strong> Sales dashboards, newsletters, vendor spotlights, and more to grow your brand.</li>
      </ul>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="/vendor-dashboard/products" style={{
          backgroundColor: '#003366',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontSize: '1.1rem'
        }}>
          🚀 Start Uploading Products
        </a>
      </div>
    </div>
  );
};

export default VendorWelcome;

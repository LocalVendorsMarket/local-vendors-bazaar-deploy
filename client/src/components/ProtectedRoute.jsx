// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import VendorLoginPage from '../pages/VendorLoginPage';
import VendorDashboard from '../pages/VendorDashboard';
import ProductManagement from '../pages/ProductManagement';
import OrderManagement from '../pages/OrderManagement';
import AnalyticsReports from '../pages/AnalyticsReports';
import AccountSettings from '../pages/AccountSettings';
import VendorSupport from '../pages/VendorSupport';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/vendor-login" element={<VendorLoginPage />} />
        <Route
          path="/vendor-dashboard"
          element={
            <ProtectedRoute>
              <VendorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendor-products"
          element={
            <ProtectedRoute>
              <ProductManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendor-orders"
          element={
            <ProtectedRoute>
              <OrderManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendor-analytics"
          element={
            <ProtectedRoute>
              <AnalyticsReports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendor-account"
          element={
            <ProtectedRoute>
              <AccountSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendor-support"
          element={
            <ProtectedRoute>
              <VendorSupport />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;



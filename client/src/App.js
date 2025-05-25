import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import ShopPage from './pages/ShopPage';
import VendorSignupPage from './pages/VendorSignupPage';
import VendorSignupThankYouPage from './pages/VendorSignupThankYouPage';
import VendorWelcome from './components/VendorWelcome';
import VendorLoginPage from './pages/VendorLoginPage';
import VendorDashboard from './pages/VendorDashboard';
import ProductManagement from './pages/ProductManagement';
import AnalyticsReports from './pages/AnalyticsReports';
import AccountSettings from './pages/AccountSettings';
import VendorSupport from './pages/VendorSupport';
import OrderManagement from './pages/OrderManagement';
import ProtectedRoute from './components/ProtectedRoute'; // ✅ NEW

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
      <Route path="/faq" element={<Faq cart={cart} />} />
      <Route path="/blog" element={<Blog cart={cart} />} />
      <Route path="/testimonials" element={<Testimonials cart={cart} />} />
      <Route path="/contact" element={<Contact cart={cart} />} />
      <Route path="/shop" element={<ShopPage cart={cart} setCart={setCart} />} />
      <Route path="/vendor-signup" element={<VendorSignupPage cart={cart} />} />
      <Route path="/vendor-thankyou" element={<VendorSignupThankYouPage cart={cart} />} />
      <Route path="/vendor-welcome" element={<VendorWelcome />} />
      <Route path="/vendor-login" element={<VendorLoginPage />} />

      {/* ✅ Protected Vendor Routes */}
      <Route path="/vendor-dashboard" element={
        <ProtectedRoute>
          <VendorDashboard />
        </ProtectedRoute>
      } />
      <Route path="/vendor-products" element={
        <ProtectedRoute>
          <ProductManagement />
        </ProtectedRoute>
      } />
      <Route path="/vendor-orders" element={
        <ProtectedRoute>
          <OrderManagement />
        </ProtectedRoute>
      } />
      <Route path="/vendor-analytics" element={
        <ProtectedRoute>
          <AnalyticsReports />
        </ProtectedRoute>
      } />
      <Route path="/vendor-settings" element={
        <ProtectedRoute>
          <AccountSettings />
        </ProtectedRoute>
      } />
      <Route path="/vendor-support" element={
        <ProtectedRoute>
          <VendorSupport />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;





















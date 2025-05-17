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
import VendorDashboard from './pages/VendorDashboard';
import ProductManagement from './pages/ProductManagement';
import AnalyticsReports from './pages/AnalyticsReports';
import AccountSettings from './pages/AccountSettings';
import VendorSupport from './pages/VendorSupport';
import OrderManagement from './pages/OrderManagement';

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
      <Route path="/vendor-dashboard" element={<VendorDashboard />} />
      <Route path="/vendor-products" element={<ProductManagement />} />
      <Route path="/vendor-orders" element={<OrderManagement />} />
      <Route path="/vendor-analytics" element={<AnalyticsReports />} />
      <Route path="/vendor-settings" element={<AccountSettings />} />
      <Route path="/vendor-support" element={<VendorSupport />} />
    </Routes>
  );
}

export default App;

















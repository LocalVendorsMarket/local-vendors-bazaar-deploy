import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import VendorSignupPage from './pages/VendorSignupPage';
import ThankYou from './pages/ThankYouPage';
import Shop from './pages/Shop'; // ✅ UPDATED to new Shop.jsx

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<VendorSignupPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/shop" element={<Shop />} /> {/* ✅ NEW SHOP COMPONENT */}
      </Routes>
    </Router>
  );
}

export default App;



















import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // ✅ Capital H
import Blog from './pages/Blog'; // ✅ Capital B
import Faq from './pages/Faq'; // ✅ Capital F
import Contact from './pages/Contact'; // ✅ Capital C
import VendorSignupPage from './pages/VendorSignupPage'; // ✅ Capital V
import ThankYouPage from './pages/ThankYouPage'; // ✅ Capital T
import Products from './pages/Products'; // ✅ Capital P

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<VendorSignupPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/shop" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
























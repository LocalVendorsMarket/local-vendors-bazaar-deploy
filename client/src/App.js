import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import VendorSignupPage from './pages/VendorSignupPage';
import ThankYouPage from './pages/ThankYouPage';
import ShopPage from './pages/ShopPage';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/blog" element={<Blog cart={cart} setCart={setCart} />} />
        <Route path="/faq" element={<Faq cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact cart={cart} setCart={setCart} />} />
        <Route path="/signup" element={<VendorSignupPage cart={cart} setCart={setCart} />} />
        <Route path="/thank-you" element={<ThankYouPage cart={cart} setCart={setCart} />} />
        <Route path="/shop" element={<ShopPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;




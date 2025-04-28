import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact'; // (we'll build soon)
import Shop from './pages/Shop';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
      <Route path="/faq" element={<Faq cart={cart} />} />
      <Route path="/blog" element={<Blog cart={cart} />} />
      <Route path="/testimonials" element={<Testimonials cart={cart} />} />
      <Route path="/contact" element={<Contact cart={cart} />} />
      <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
    </Routes>
  );
}

export default App;








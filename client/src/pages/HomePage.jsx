import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Wedding Photographers', 'Henna Tattoos', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture',
    'Grocery Stores', 'Health & Beauty', 'Local Events', 'Mobile Repair', 'Music & Bands',
    'Party Supplies', 'Pet Services', 'Photobooth Rentals', 'Real Estate Agents', 'Tutors',
    'Yoga Studios', 'Landscaping', 'Auto Repair', 'Travel Agents', 'Accountants'
  ];

  const allProducts = [
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Artwork' },
    { id: 5, name: 'Gourmet Pizza', category: 'Restaurants', price: '$15', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pizza' },
    { id: 6, name: 'Home Repair Service', category: 'Services', price: '$50/hr', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Home+Repair' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productRefs = [useRef(null), useRef(null), useRef(null)];

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  const scrollProducts = (row, direction) => {
    if (direction === 'left') {
      productRefs[row].current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      productRefs[row].current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white' }}>
        <a href="/"><img src="/assets/logo.png" alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ fontSize: '12px', marginLeft: '1rem' }}>
          <span>Delivering to Elgin 60120</span><br />
          <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Update location</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', marginLeft: '2rem' }}>
          <a href="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Home</a>
          <a href="/shop" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Shop</a>
          <a href="/vendor-signup" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Become a Vendor</a>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text" placeholder="Search products..." style={{ width: '250px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <input type="text" placeholder="Zip Code" style={{ width: '120px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <button style={{ backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '14px', cursor: 'pointer' }}>Find Vendors</button>
          <span style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Sign In</span>
          <a href="/cart" style={{ color: 'white', fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </div>
      </header>

      {/* Sub Nav Bar */}
      <div style={{ backgroundColor: '#00509e', padding: '10px', color: 'white', fontSize: '14px', display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {categories.map(cat => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ marginRight: '15px', cursor: 'pointer', textDecoration: selectedCategory === cat ? 'underline' : 'none' }}>{cat}</span>
        ))}
      </div>

      {/* Filter Area */}
      <div style={{ display: 'flex' }}>
        <aside style={{ width: '200px', padding: '1rem', background: '#f5f5f5' }}>
          <h3>Filter by Department</h3>
          {categories.map(cat => (
            <p key={cat} onClick={() => setSelectedCategory(cat)} style={{ cursor: 'pointer' }}>{cat}</p>
          ))}
        </aside>

        <main style={{ flex: 1 }}>
          {[0, 1, 2].map((row) => (
            <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem' }}>
              <button onClick={() => scrollProducts(row, 'left')}>&lt;</button>
              <div ref={productRefs[row]} style={{ display: 'flex', overflowX: 'auto', gap: '1rem' }}>
                {filteredProducts.map(product => (
                  <div key={product.id} onClick={() => handleProductClick(product)} style={{ cursor: 'pointer', minWidth: '220px', backgroundColor: 'white', borderRadius: '8px', padding: '1rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                    <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                    <h3>{product.name}</h3>
                    <p>{product.rating}</p>
                    <p>{product.price}</p>
                    <p>Sold last month: 52</p>
                    <p>In stock: 17</p>
                    <p style={{ fontStyle: 'italic', fontSize: '12px' }}>Customer reviews: ⭐⭐⭐⭐☆</p>
                  </div>
                ))}
              </div>
              <button onClick={() => scrollProducts(row, 'right')}>&gt;</button>
            </div>
          ))}
        </main>
      </div>

      {/* Product Modal */}
      {showModal && selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }} onClick={() => setShowModal(false)}>
          <div style={{ backgroundColor: 'white', display: 'flex', width: '90%', height: '80%', borderRadius: '12px', padding: '2rem', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>❌</button>
            <div style={{ width: '15%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[...Array(5)].map((_, i) => (
                <img key={i} src={selectedProduct.image} alt={`thumb${i}`} style={{ width: '100%', borderRadius: '8px' }} />
              ))}
            </div>
            <div style={{ width: '35%', padding: '0 2rem' }}>
              <img src={selectedProduct.image} alt="main" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.rating}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{selectedProduct.price}</p>
              <p>Sold last month: 52 units</p>
              <p>Remaining: 17 in stock</p>
              <p style={{ fontStyle: 'italic' }}>
                "Customers say it’s reliable and top quality!"
              </p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold' }}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <p>Local Vendors Bazaar © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default HomePage;



































































































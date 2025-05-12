import React, { useState } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Handmade Necklace', price: '$25', category: 'Jewelry' },
    { id: 2, name: 'Organic Soap', price: '$8', category: 'Health & Beauty' },
    { id: 3, name: 'Custom T-Shirt', price: '$18', category: 'Clothing' }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.category) return;
    const nextId = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { id: nextId, ...newProduct }]);
    setNewProduct({ name: '', price: '', category: '' });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f4f8fc', minHeight: '100vh' }}>
      <h1 style={{ color: '#003366', marginBottom: '1.5rem' }}>Product Management</h1>

      <button onClick={() => setShowForm(true)} style={addButtonStyle}>+ Add Product</button>

      <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
        <thead>
          <tr style={{ backgroundColor: '#00509e', color: 'white' }}>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Price</th>
            <th style={tableHeaderStyle}>Category</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} style={{ textAlign: 'center' }}>
              <td style={tableCellStyle}>{product.name}</td>
              <td style={tableCellStyle}>{product.price}</td>
              <td style={tableCellStyle}>{product.category}</td>
              <td style={tableCellStyle}>
                <button onClick={() => handleDelete(product.id)} style={deleteButtonStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div style={modalStyle} onClick={() => setShowForm(false)}>
          <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
            <h2>Add New Product</h2>
            <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                style={inputStyle}
              />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" style={saveButtonStyle}>Save</button>
                <button type="button" onClick={() => setShowForm(false)} style={cancelButtonStyle}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const addButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' };
const deleteButtonStyle = { backgroundColor: '#e63946', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '6px', cursor: 'pointer' };
const saveButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '10px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' };
const cancelButtonStyle = { backgroundColor: '#aaa', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer' };
const tableHeaderStyle = { padding: '12px', fontSize: '1rem' };
const tableCellStyle = { padding: '10px', borderBottom: '1px solid #ddd' };
const inputStyle = { padding: '10px', fontSize: '1rem', borderRadius: '6px', border: '1px solid #ccc' };
const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };
const modalContentStyle = { backgroundColor: 'white', padding: '2rem', borderRadius: '10px', width: '400px', maxWidth: '90%' };

export default ProductManagement;

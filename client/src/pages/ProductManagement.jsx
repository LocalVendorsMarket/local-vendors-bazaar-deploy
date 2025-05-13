import React, { useState } from 'react';
import VendorSidebar from '../components/VendorSidebar';
import NewProductForm from '../components/NewProductForm';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Product Management</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <NewProductForm onAddProduct={handleAddProduct} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Products</h2>
          {products.length === 0 ? (
            <p>No products added yet.</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product, index) => (
                <li key={index} className="border rounded p-4 bg-white shadow">
                  <img
                    src={product.image || 'https://via.placeholder.com/150'}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-sm text-gray-800 mt-1">Price: ${product.price}</p>
                  <p className="text-sm text-gray-500">Category: {product.category}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;



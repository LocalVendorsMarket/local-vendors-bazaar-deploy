import React from 'react';

const Products = () => {
  const categories = ['Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods'];

  const products = [
    { id: 1, name: 'Local Honey', price: '$12' },
    { id: 2, name: 'Handmade Necklace', price: '$25' },
    { id: 3, name: 'Organic T-Shirt', price: '$18' },
    { id: 4, name: 'Custom Artwork', price: '$80' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-green-600 mb-6">
        🛍️ Shop Local and Save Big! 🎉
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg mb-10 text-center">
        Discover amazing products from your local vendors.
      </p>

      {/* Categories Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className="px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition font-semibold"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-6 bg-white shadow-md flex flex-col items-center hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-green-700 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;




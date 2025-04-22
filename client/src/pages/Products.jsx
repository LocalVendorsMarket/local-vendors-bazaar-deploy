import React from 'react';

const Products = () => {
  const categories = ['Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods'];

  const products = [
    { id: 1, name: 'Local Honey', price: '$12', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', price: '$25', image: 'https://via.placeholder.com/300x200?text=Handmade+Necklace' },
    { id: 3, name: 'Organic T-Shirt', price: '$18', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', price: '$80', image: 'https://via.placeholder.com/300x200?text=Custom+Artwork' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-green-600 mb-6 text-center">
        🛍️ Shop Local and Save Big! 🎉
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg mb-10 text-center">
        Discover amazing products from your local vendors.
      </p>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-green-700 mb-2 text-center">{product.name}</h2>
              <p className="text-lg font-bold text-gray-700 mb-4 text-center">{product.price}</p>

              {/* 🚀 BUTTONS WITH GAP */}
              <div className="flex flex-col gap-3 mt-auto">
                <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold">
                  Learn More
                </button>
                <button className="w-full py-2 border border-green-500 text-green-600 rounded-lg hover:bg-green-50 transition font-semibold">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;






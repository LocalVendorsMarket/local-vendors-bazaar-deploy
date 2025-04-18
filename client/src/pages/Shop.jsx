import React from 'react';

const Shop = () => {
  const categories = ['Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods'];

  const products = [
    {
      id: 1,
      name: 'Local Honey',
      image: 'https://via.placeholder.com/300x200?text=Local+Honey',
      price: '$12',
    },
    {
      id: 2,
      name: 'Handmade Necklace',
      image: 'https://via.placeholder.com/300x200?text=Handmade+Necklace',
      price: '$25',
    },
    {
      id: 3,
      name: 'Organic T-Shirt',
      image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt',
      price: '$18',
    },
    {
      id: 4,
      name: 'Custom Artwork',
      image: 'https://via.placeholder.com/300x200?text=Custom+Artwork',
      price: '$80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* 🚀 HERO BANNER */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-600 mb-4">
          Shop Local and Save Big! 🎉
        </h1>
        <p className="text-gray-600 text-lg">
          Discover amazing products from your local vendors.
        </p>
      </div>

      {/* 🚀 CATEGORIES */}
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

      {/* 🚀 PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                {product.name}
              </h2>
              <p className="text-lg font-bold text-gray-700 mb-6">
                {product.price}
              </p>
              <button className="mt-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

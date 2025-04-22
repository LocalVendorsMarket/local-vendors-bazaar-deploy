import React from 'react';

const Products = () => {
  const categories = ['Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods'];

  const products = [
    { id: 1, name: 'Local Honey', price: '$12', rating: 5, image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', price: '$25', rating: 4, image: 'https://via.placeholder.com/300x200?text=Handmade+Necklace' },
    { id: 3, name: 'Organic T-Shirt', price: '$18', rating: 4, image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', price: '$80', rating: 5, image: 'https://via.placeholder.com/300x200?text=Custom+Artwork' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      
      {/* 🚀 HERO SECTION */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-green-600 mb-4">
          🛍️ Shop Local and Save Big! 🎉
        </h1>
        <p className="text-gray-600 text-lg">
          Discover amazing products from your favorite local vendors.
        </p>
      </div>

      {/* 🚀 CATEGORIES BAR */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className="px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition font-semibold text-sm shadow-md"
          >
            {category}
          </button>
        ))}
      </div>

      {/* 🚀 PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="flex flex-col flex-grow p-2">
              <h2 className="text-lg font-semibold text-green-700 mt-2 mb-1 text-center">{product.name}</h2>
              
              {/* ⭐⭐⭐⭐⭐ STARS */}
              <div className="flex justify-center mb-2">
                {Array.from({ length: product.rating }, (_, index) => (
                  <span key={index} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>

              <p className="text-xl font-bold text-gray-700 text-center mb-4">{product.price}</p>

              {/* 🚀 BUTTONS */}
              <div className="flex flex-col gap-2 mt-auto">
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







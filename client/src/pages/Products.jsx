import React from 'react';

const Products = () => {
  const categories = ['Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods'];

  const products = [
    {
      id: 1,
      name: 'Local Honey',
      description: 'Fresh organic honey from local farms.',
      price: '$12',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    },
    {
      id: 2,
      name: 'Handmade Necklace',
      description: 'Beautifully crafted handmade necklace.',
      price: '$25',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1600185365483-26d7b3b31d5e',
    },
    {
      id: 3,
      name: 'Organic T-Shirt',
      description: 'Eco-friendly, comfortable T-shirts.',
      price: '$18',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1618354691373-90c7a4e8437e',
    },
    {
      id: 4,
      name: 'Custom Artwork',
      description: 'Unique, local artist paintings.',
      price: '$80',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4">

      {/* HERO HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-600 mb-2">
          🛍️ Shop Local and Save Big!
        </h1>
        <p className="text-gray-600 text-lg">
          Discover amazing products from your favorite local vendors.
        </p>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition font-semibold text-sm min-w-[120px]"
          >
            {category}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col items-center"
          >
            {/* PRODUCT IMAGE */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            {/* PRODUCT INFO */}
            <h2 className="text-xl font-bold text-green-700 text-center mb-1">{product.name}</h2>

            {/* STARS */}
            <div className="flex justify-center mb-2">
              {Array.from({ length: product.rating }).map((_, idx) => (
                <span key={idx} className="text-yellow-400 text-lg">⭐</span>
              ))}
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm text-center mb-4">{product.description}</p>

            {/* PRICE */}
            <p className="text-lg font-bold text-gray-800 mb-4">{product.price}</p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3 w-full">
              <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold">
                Learn More
              </button>
              <button className="w-full py-2 border border-green-500 text-green-600 rounded-lg hover:bg-green-50 transition font-semibold">
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;









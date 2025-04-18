import React from 'react';
import { motion } from 'framer-motion';

const sampleProducts = [
  {
    id: 1,
    name: 'Handmade Candle',
    price: '$15.00',
    location: 'Chicago, IL',
  },
  {
    id: 2,
    name: 'Organic Honey',
    price: '$12.00',
    location: 'Naperville, IL',
  },
  {
    id: 3,
    name: 'Local Coffee Beans',
    price: '$18.00',
    location: 'Evanston, IL',
  },
  {
    id: 4,
    name: 'Handcrafted Soap',
    price: '$8.00',
    location: 'Aurora, IL',
  },
];

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-green-600 mb-10">
          Shop Local Products 🛍️
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sampleProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-green-500 font-semibold mb-1">
                {product.price}
              </p>
              <p className="text-sm text-gray-500">{product.location}</p>
              <span className="mt-2 inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                Local Seller
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;


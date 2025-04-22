import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-5xl font-extrabold text-green-600 mb-4">📰 Blog</h1>
      <p className="text-gray-600 text-lg mb-8">
        We're preparing exciting articles to help you discover the best local vendors, shopping tips, and more!
      </p>

      {/* Placeholder for future blog posts */}
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">🚧 Coming Soon 🚧</h2>
        <p className="text-gray-500">
          Stay tuned for shopping guides, vendor spotlights, and community stories!
        </p>
      </div>
    </div>
  );
};

export default Blog;




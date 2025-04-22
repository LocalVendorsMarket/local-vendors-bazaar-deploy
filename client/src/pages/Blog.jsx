import React from 'react';
import NavigationBar from '../components/NavigationBar';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NavigationBar />
      <h1 className="text-4xl font-bold text-green-600 mt-20">📰 Latest From Our Blog</h1>
      <p className="mt-4 text-gray-600 text-lg text-center">
        Discover local vendor stories, tips, and updates.
      </p>
    </div>
  );
};

export default Blog;




import React from 'react';
import NavigationBar from '../components/NavigationBar';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NavigationBar />
      <main className="mt-24 text-center px-4">
        <h1 className="text-4xl font-bold text-green-600">📰 Latest from Our Blog</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Discover tips, vendor stories, and local news.
        </p>
      </main>
    </div>
  );
};

export default Blog;





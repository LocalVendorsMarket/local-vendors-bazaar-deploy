import React from 'react';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NavigationBar />
      <h1 className="text-4xl font-bold text-green-600 mt-20">🏡 Welcome to Local Vendors Bazaar!</h1>
      <p className="mt-4 text-gray-600 text-lg text-center">
        Shop and Save Locally — Supporting Chicago and Beyond!
      </p>
    </div>
  );
};

export default Home;






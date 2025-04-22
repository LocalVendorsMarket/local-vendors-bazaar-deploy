import React from 'react';
import NavigationBar from '../components/NavigationBar';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NavigationBar />
      <h1 className="text-4xl font-bold text-green-600 mt-20">📞 Contact Us</h1>
      <p className="mt-4 text-gray-600 text-lg text-center">
        We'd love to hear from you! Reach out with any questions or feedback.
      </p>
    </div>
  );
};

export default Contact;





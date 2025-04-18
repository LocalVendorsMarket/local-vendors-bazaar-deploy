import React from 'react';
import { motion } from 'framer-motion';

const ThankYouPage = () => {
  return (
    <div
      className="min-h-screen w-full bg-gray-50 flex justify-center items-center px-4 py-12"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-10 text-center"
      >
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">
          Thank you for signing up! 🎉
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <strong>LocalVendorsBazaar.com</strong>!
          <br />
          Your application has been received successfully.
        </p>
        <p className="text-md text-gray-600 mb-6">
          If you have any questions, feel free to email us at{' '}
          <a
            href="mailto:localvendorsbazaar@gmail.com"
            className="text-green-600 underline"
          >
            localvendorsbazaar@gmail.com
          </a>{' '}
          or call us at <strong>(your business phone number)</strong>.
        </p>
        <p className="text-md text-gray-600">
          We are excited to help you reach your local community!
        </p>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;



import React from 'react';

const SignInModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
          Sign In or Create Account
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter mobile number or email"
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
          >
            Continue
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to Local Vendors Bazaar's Terms of Use and Privacy Policy.
        </p>

        <div className="text-center mt-6">
          <a href="#" className="text-sm text-green-600 hover:underline">
            Need help?
          </a>
        </div>

        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SignInModal;

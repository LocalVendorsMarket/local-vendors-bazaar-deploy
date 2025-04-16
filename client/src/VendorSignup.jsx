import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const VendorSignupPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/movebonk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        const data = await response.json();
        setError(data?.message || 'Something went wrong. Please try again.');
        setSubmitted(false);
      }
    } catch (err) {
      setError('Submission failed. Please try again later.');
      setSubmitted(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-gray-50 flex justify-center items-center px-4 py-12"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-10"
      >
        <h2 className="text-4xl font-extrabold text-center text-green-600 mb-2">
          Become a Local Vendor
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Reach your local community by listing your business on LocalVendorsBazaar.com
        </p>

        {submitted && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-700 text-lg font-semibold mb-4"
          >
            🎉 Sending your info...
          </motion.div>
        )}

        {error && (
          <div className="text-center text-red-600 font-medium mb-4">{error}</div>
        )}

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitted(true);
  setError(null);

  const form = e.target;

  const data = {
    businessName: form.businessName.value,
    email: form.email.value,
    phone: form.phone.value,
    website: form.website.value,
    description: form.description.value,
  };

  try {
    const response = await fetch('https://hook.us2.make.com/e3tcpelov1gjmey2fs3f4rjtpt107mny', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      navigate('/thank-you');
    } else {
      setError('Something went wrong.');
      setSubmitted(false);
    }
  } catch (err) {
    console.error('Submission error:', err);
    setError('Submission failed. Please try again.');
    setSubmitted(false);
  }
};

  }
};

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <input
              type="text"
              name="businessName"
              required
              placeholder="Your Business Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="123-456-7890"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Website (Optional)</label>
            <input
              type="url"
              name="website"
              placeholder="https://yourbusiness.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Description</label>
            <textarea
              name="description"
              required
              placeholder="What do you sell? What makes you local?"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-green-600 transition"
          >
            Submit Application
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default VendorSignupPage;

















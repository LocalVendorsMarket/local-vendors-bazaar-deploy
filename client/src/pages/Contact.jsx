import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-5xl font-extrabold text-green-600 mb-6">📞 Contact Us</h1>
      <p className="text-gray-600 text-lg mb-8 text-center max-w-2xl">
        Have a question? Need help? We'd love to hear from you! 
        Fill out the form below or reach us directly.
      </p>

      {/* Contact Form */}
      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Message</label>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* Company Info */}
      <div className="mt-12 text-center text-gray-700">
        <p>Email: <a href="mailto:localvendorsbazaar@gmail.com" className="text-green-600 font-semibold">localvendorsbazaar@gmail.com</a></p>
        <p>Phone: <span className="font-semibold">(630) 400-7555</span></p>
      </div>
    </div>
  );
};

export default Contact;




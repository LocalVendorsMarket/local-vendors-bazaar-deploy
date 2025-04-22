import React from 'react';

const Faq = () => {
  const faqs = [
    {
      question: "What is Local Vendors Bazaar?",
      answer: "Local Vendors Bazaar connects buyers and local businesses in your community to support shopping local and saving big.",
    },
    {
      question: "How can I become a vendor?",
      answer: "You can sign up easily using the 'Become a Vendor' button in the navigation. We will review and activate your listing quickly!",
    },
    {
      question: "Is there a fee to join?",
      answer: "Currently, vendor signup is free! As we grow, optional premium features will be available.",
    },
    {
      question: "Can I shop from anywhere?",
      answer: "Yes! Start by entering your ZIP code to discover vendors near you and beyond.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-green-600 mb-8">Frequently Asked Questions</h1>
      <div className="w-full max-w-3xl space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;



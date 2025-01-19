import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle visibility
  };

  const faqData = [
    {
      question: "What is Lorem Ipsum?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer: "It is a long-established fact that a reader will be distracted by the layout.",
    },
    {
      question: "Where can I get some?",
      answer: "There are many variations of passages of Lorem Ipsum available.",
    },
    {
      question: "What are the origins of Lorem Ipsum?",
      answer: "Lorem Ipsum has roots in classical Latin literature from 45 BC.",
    },
    {
      question: "Is Lorem Ipsum safe to use?",
      answer: "Yes, it is completely safe and commonly used for mockups and templates.",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gray-900 relative overflow-hidden">
      {/* FAQ Section */}
      <div className="relative max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          Frequently Asked Questions
        </h1>
        <div className="divide-y divide-gray-800">
          {faqData.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="w-full flex justify-between items-center text-lg font-medium text-white focus:outline-none hover:text-blue-400 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <span
                  className={`transform transition-transform text-2xl ${
                    openIndex === index ? "rotate-45 text-blue-400" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
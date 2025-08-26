"use client";
import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function WhyFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Presented own highly to in offers surprise of ear chair?",
      answer:
        "Create text automations and flows based on custom prebuilt audiences. Capture abandoned carts. You cannot spend 2 months.",
    },
    {
      question: "The even a the man, used to and surprised that at incentive?",
      answer: "This is a placeholder answer for demonstration purposes.",
    },
    {
      question:
        "Dishonourable mellower and we their visuals theoretically produce?",
      answer: "This is another example answer.",
    },
    {
      question: "For structure seeing to a room as his right in?",
      answer: "Simple answer text goes here.",
    },
    {
      question:
        "The clear my a of from the reey time how new times because that?",
      answer: "Example answer text.",
    },
  ];

  return (
    <div className="bg-white py-20 px-30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Our platform is built to help you work smarter, not harder. It adapts
          to your needs and supports your goals. Make the most of every feature.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl p-4 shadow-sm transition bg-white ${
                activeIndex === index
                  ? "border-blue-500 shadow-md"
                  : "border-gray-200"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <h3 className="text-gray-800 font-medium">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaTimes className="text-gray-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </div>

              {activeIndex === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

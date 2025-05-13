import React, { useState } from "react";
import "../styles/FAQSection.css";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the best time to visit Morocco?",
      answer: "The best time to visit Morocco is during spring (March to May) or autumn (September to November) when the weather is pleasant.",
    },
    {
      question: "Is Morocco safe for tourists?",
      answer: "Yes, Morocco is generally safe for tourists. However, it's always advisable to stay aware of your surroundings and follow local guidelines.",
    },
    {
      question: "What should I wear in Morocco?",
      answer: "Modest clothing is recommended, especially for women. Loose-fitting clothes that cover shoulders and knees are ideal.",
    },
    {
      question: "What currency is used in Morocco?",
      answer: "The official currency of Morocco is the Moroccan Dirham (MAD).",
    },
    {
      question: "Do I need a visa for Morocco?",
      answer: "It depends on your nationality. Many countries, including the US and EU members, do not require a visa for stays up to 90 days.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqSection">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faqItem">
          <div className="faqQuestion" onClick={() => toggleAnswer(index)}>
            <h3>{faq.question}</h3>
            <span className="toggleIcon">{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && <p className="faqAnswer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
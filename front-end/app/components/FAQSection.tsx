'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from '../styles/FAQSection.module.css';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            className={styles.faqItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className={styles.faqQuestion}
              onClick={() => toggleAnswer(index)}
              whileTap={{ scale: 0.98 }}
            >
              <h3>{faq.question}</h3>
              <motion.span 
                className={styles.toggleIcon}
                animate={{ rotate: activeIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </motion.div>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className={styles.faqAnswerWrapper}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
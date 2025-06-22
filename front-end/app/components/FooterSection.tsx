"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import axios from "axios";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" }
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: "Tours", url: "/tours" },
    { name: "Cultural Experiences", url: "/culture" },
    { name: "Adventure Trips", url: "/adventure" }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "123 Sahara Ave, Marrakech, Morocco" },
    { icon: <FaPhone />, text: "+212 6 12 34 56 78" },
    { icon: <FaEnvelope />, text: "contact@exploremorocco.com" },
    { icon: <FaClock />, text: "Mon-Fri: 9AM - 6PM" }
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/newsletter", { email }, {
        headers: { Accept: "application/json" },
      });

      setSuccessMsg("✅subscribed successfully!");
      setEmail("");
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (error: any) {
      if (error.response?.status === 422) {
        setErrorMsg("❌ email is already subscribed.");
      } else {
        setErrorMsg("❌ something went wrong.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.footer 
      className="py-16 bg-gradient-to-r from-blue-50 to-amber-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-200 opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-200 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-amber-600 w-6 h-6 rounded-full mr-3"></span>
              Explore Morocco
            </h3>
            <p className="text-gray-600 mb-6">
              Your premier guide to the rich culture, stunning landscapes, and unforgettable experiences in Morocco.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={link.url} 
                    className="text-gray-600 hover:text-amber-600 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-600 mr-3 mt-1">{info.icon}</span>
                  <span className="text-gray-600">{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter with axios POST */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Newsletter</h4>
            <p className="text-gray-600 mb-4">
              Subscribe to get updates on our latest tours and special offers.
            </p>

            {successMsg && (
              <motion.p
                className="text-green-600 mb-2 bg-green-100 px-4 py-2 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {successMsg}
              </motion.p>
            )}

            {errorMsg && (
              <motion.p
                className="text-red-600 mb-2 bg-red-100 px-4 py-2 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errorMsg}
              </motion.p>
            )}

            <form className="flex flex-col space-y-4" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiSend className="mr-2" />
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-200 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Explore Morocco. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
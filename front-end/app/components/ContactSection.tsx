import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setErrorMessage("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/messages", formData, {
        headers: {
          Accept: "application/json",
        },
      });

      console.log("✅ message sent successfully :", response.data);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitSuccess(false), 4000);
    } catch (error: any) {
      console.error("❌ message sending failed:", error);
      setErrorMessage("An error occurred while sending your message. Please ensure all fields are filled out correctly or check the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-amber-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss your next Moroccan adventure?
            We&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* النموذج */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="md:flex">
            {/* معلومات الاتصال */}
            <div className="hidden md:block md:w-1/3 bg-gradient-to-b from-amber-500 to-amber-600 relative overflow-hidden">
              <div className="absolute inset-0  bg-cover opacity-10"></div>
              <motion.div
                className="p-8 h-full flex flex-col justify-center"
                initial={{ x: -30 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-amber-100 mb-6">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-white bg-opacity-20 mr-4">
                      <FiMail className="text-white text-xl" />
                    </div>
                    <span className="text-white">contact@moroccotravel.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-white bg-opacity-20 mr-4">
                      <FiUser className="text-white text-xl" />
                    </div>
                    <span className="text-white">+212 6 12 34 56 78</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* النموذج الفعلي */}
            <div className="md:w-2/3 p-8 md:p-10">
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg"
                >
                  ✅ message sent successfully :           
                      </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg"
                >
                  {errorMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                {/* الاسم */}
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 px-4 border bg-gray-50"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                {/* البريد الإلكتروني */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 px-4 border bg-gray-50"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* الرسالة */}
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <div className="relative">
                    <div className="absolute top-4 left-3">
                      <FiMessageSquare className="text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 px-4 border bg-gray-50"
                      placeholder="Tell us about your travel plans..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* زر الإرسال */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 ${
                      isSubmitting
                        ? "bg-amber-700 cursor-not-allowed"
                        : "bg-amber-600 hover:bg-amber-700"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

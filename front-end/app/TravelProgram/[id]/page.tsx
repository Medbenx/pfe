"use client";
import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";
import { programs } from "@/app/data/travelProgram";
import "../../styles/TravelProgramDetails.css";

export default function TravelProgramDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const program = programs.find((p) => p.id === Number(id));

  if (!program) {
    return notFound();
  }

  return (
    <div className="travel-program-details">
      {/* Hero Section with 3D Parallax Effect */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-image-container">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="hero-image"
            priority
          />
          <div className="hero-overlay">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1>{program.title}</h1>
              <div className="hero-meta">
                <span>{program.duration}</span>
                <span>{program.price}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Program Overview */}
        <motion.section
          className="program-overview mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2>About This Adventure</h2>
          <p>{program.description}</p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Itinerary Section */}
          <motion.section
            className="itinerary-section lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2>Detailed Itinerary</h2>
            <div className="timeline">
              {program.itinerary.map((day, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="timeline-day">DAY {day.day}</div>
                  <div className="timeline-content">
                    <h3>{day.title}</h3>
                    <p>{day.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Includes/Excludes */}
            <motion.div
              className="includes-excludes mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="includes">
                <h3>What's Included</h3>
                <ul>
                  {program.includes.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                    >
                      <span className="check-icon">✓</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="excludes">
                <h3>Not Included</h3>
                <ul>
                  {program.excludes.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                    >
                      <span className="cross-icon">✗</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="map-section mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3>Tour Route Map</h3>
              <div className="map-image-container">
                <Image
                  src={program.mapImage}
                  alt="Tour route map"
                  fill
                  className="map-image"
                />
              </div>
            </motion.div>

            {/* Booking CTA - Updated */}
            <motion.div
              className="booking-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3>Ready for Adventure?</h3>
              <button
                className="cta-button"
                onClick={() => setShowBookingForm(true)}
              >
                Book This Program
              </button>
            </motion.div>

            {/* 3D Booking Modal */}
            <AnimatePresence>
              {showBookingForm && (
                <motion.div
                  className="fixed inset-0 mt-20 z-50 overflow-y-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background overlay */}
                  <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={() => setShowBookingForm(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  ></motion.div>

                  {/* Modal container */}
                  <div className="flex min-h-screen items-center justify-center p-4 text-center">
                    <motion.div
                      className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all"
                      initial={{ opacity: 0, y: 20, rotateX: -15 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: 20, rotateX: -15 }}
                      transition={{
                        duration: 0.4,
                        type: "spring",
                        damping: 25,
                      }}
                      style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Gradient background */}
                      <div className="py-16 bg-gradient-to-r from-blue-50 to-amber-50 px-8">
                        {/* Close button with 3D effect */}
                        <motion.button
                          onClick={() => setShowBookingForm(false)}
                          className="absolute right-8 top-8 z-10 rounded-full p-2 focus:outline-none"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <div className="relative h-12 w-12">
                            <motion.div
                              className="absolute inset-0 bg-amber-500 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            ></motion.div>
                            <svg
                              className="relative h-full w-full text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </motion.button>

                        {/* Booking Form Content */}
                        <div className="mx-auto max-w-lg">
                          <motion.h2
                            className="text-3xl font-bold text-center mb-8 text-gray-800"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            Book {program.title}
                          </motion.h2>

                          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="font-semibold text-lg">
                                {program.duration}
                              </h3>
                              <span className="text-amber-600 font-bold text-xl">
                                {program.price}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">
                              {program.description.substring(0, 100)}...
                            </p>
                          </div>

                          <form className="space-y-6">
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              <label className="block text-gray-700 mb-2">
                                Travel Dates
                              </label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                  type="date"
                                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                  placeholder="Start Date"
                                />
                                <input
                                  type="date"
                                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                  placeholder="End Date"
                                />
                              </div>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 }}
                            >
                              <label className="block text-gray-700 mb-2">
                                Travelers
                              </label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                                    {[1, 2, 3, 4, 5, 6].map((num) => (
                                      <option key={num} value={num}>
                                        {num} {num === 1 ? "Adult" : "Adults"}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div>
                                  <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                                    {[0, 1, 2, 3, 4].map((num) => (
                                      <option key={num} value={num}>
                                        {num} {num === 1 ? "Child" : "Children"}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <label className="block text-gray-700 mb-2">
                                Contact Information
                              </label>
                              <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              />
                              <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              />
                              <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              />
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 }}
                              className="pt-4"
                            >
                              <button
                                type="submit"
                                className="w-full orange-button-3d py-4 px-6 rounded-xl text-lg font-bold transition-all duration-300"
                              >
                                Complete Booking
                                <svg
                                  className="w-5 h-5 ml-2 inline-block"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  />
                                </svg>
                              </button>
                            </motion.div>
                          </form>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Gallery Section */}
        <motion.section
          className="gallery-section mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {program.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="gallery-image"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

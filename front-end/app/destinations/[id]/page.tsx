
'use client';

import { trendingItems } from "../../data/destination";
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { use, useState } from 'react';
import Link from "next/link";

export default function DestinationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const destination = trendingItems.find(item => item.id.toString() === id);
  const [showBookingForm, setShowBookingForm] = useState(false);

  if (!destination) {
    return notFound();
  }

  
  return (
    <main className="min-h-screen mt-20 py-12 bg-gradient-to-b from-blue-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Link href="/destinations" className="inline-flex items-center text-amber-600 hover:text-amber-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Destinations
            </Link>
          </div>

          {/* Destination Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={destination.image}
                alt={destination.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{destination.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{destination.fullDescription}</p>
              <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-6">
                <p className="font-medium text-amber-800">Best time to visit: {destination.bestTimeToVisit}</p>
              </div>
              
              {/* Booking CTA with Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="inline-block"
              >
                <button 
                  onClick={() => setShowBookingForm(true)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Book a Tour
                </button>
              </motion.div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {destination.highlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900">{highlight}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

         {/* Gallery Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {destination.images.map((image, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative h-48 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={image}
                    alt={`${destination.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
                      Book {destination.title}
                    </motion.h2>

                    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg">
                          {destination.duration || 'Custom Tour'}
                        </h3>
                        <span className="text-amber-600 font-bold text-xl">
                          {destination.price || 'Contact for pricing'}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {destination.fullDescription.substring(0, 100)}...
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
                          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 px-6 rounded-xl text-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg"
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
    </main>
  );
}
// components/HotelDetails.tsx
'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { FaStar, FaMapMarkerAlt, FaWifi, FaSwimmingPool, FaSpa, FaParking, FaUtensils, FaCalendarAlt, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoBedOutline } from 'react-icons/io5';
import { GiDesk } from 'react-icons/gi';

const HotelDetails = ({ hotel }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const nextStep = () => setBookingStep(prev => prev + 1);
  const prevStep = () => setBookingStep(prev => prev - 1);

  return (
    <div className="min-h-screen py-16 bg-gradient-to-r from-blue-50 to-amber-50">
      {/* Hero Section with Parallax Effect */}
      <div ref={ref} className="relative h-[60vh] overflow-hidden">
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </motion.div>
        
        <motion.div 
          style={{ y: yText }}
          className="relative z-10 flex flex-col justify-end h-full px-6 pb-12 text-white md:px-12 lg:px-24"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold md:text-5xl lg:text-6xl drop-shadow-xl"
          >
            {hotel.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center mt-4 text-xl"
          >
            <FaMapMarkerAlt className="mr-2" />
            <span>{hotel.location}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center mt-2"
          >
            <div className="flex items-center px-3 py-1 bg-amber-500 rounded-full">
              <FaStar className="mr-1" />
              <span>{hotel.rating.toFixed(1)}</span>
            </div>
            <span className="ml-2">({hotel.reviews.toLocaleString()} reviews)</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container px-6 mx-auto mt-8 md:px-12 lg:px-24">
        {/* Price and Booking Card - Updated */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 mb-12 bg-white rounded-xl shadow-lg"
        >
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-800">${hotel.price}</h3>
              <p className="text-gray-600">per night (including taxes)</p>
            </div>
            <motion.button
              onClick={() => setShowBookingForm(true)}
              className="px-8 py-3 font-medium text-white transition-all duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>

        {/* Hotel Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-800">About {hotel.name}</h2>
          <p className="mb-4 text-gray-700">
            Nestled in the heart of Morocco, {hotel.name} offers an unparalleled luxury experience. 
            With breathtaking views and world-class amenities, this hotel redefines hospitality.
          </p>
          <p className="text-gray-700">
            Our meticulously designed rooms and suites blend traditional Moroccan architecture 
            with contemporary comfort, creating a serene oasis for discerning travelers.
          </p>
        </motion.div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Amenities</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              { icon: <FaWifi size={24} />, name: 'Free WiFi' },
              { icon: <FaSwimmingPool size={24} />, name: 'Pool' },
              { icon: <FaSpa size={24} />, name: 'Spa' },
              { icon: <FaParking size={24} />, name: 'Parking' },
              { icon: <FaUtensils size={24} />, name: 'Restaurant' },
              { icon: <IoBedOutline size={24} />, name: 'Luxury Beds' },
              { icon: <GiDesk size={24} />, name: 'Work Desk' },
            ].map((amenity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
              >
                <div className="mb-2 text-orange-500">{amenity.icon}</div>
                <span className="text-sm font-medium text-gray-700">{amenity.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fascinating Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Fascinating Facts</h2>
          {/* Key Facts Cards */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl shadow-md"
            >
              <h3 className="mb-2 text-lg font-bold text-orange-500">Year Built</h3>
              <p className="text-3xl font-bold text-gray-800">{hotel.yearBuilt}</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl shadow-md"
            >
              <h3 className="mb-2 text-lg font-bold text-orange-500">Rooms & Suites</h3>
              <p className="text-3xl font-bold text-gray-800">{hotel.rooms}</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl shadow-md"
            >
              <h3 className="mb-2 text-lg font-bold text-orange-500">Architecture</h3>
              <p className="text-xl font-medium text-gray-800">{hotel.architectureStyle}</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl shadow-md"
            >
              <h3 className="mb-2 text-lg font-bold text-orange-500">Notable Features</h3>
              <ul className="space-y-1">
                {hotel.notableFeatures?.slice(0, 2).map((feature, i) => (
                  <li key={i} className="text-gray-700">✓ {feature}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Interesting Facts List */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="mb-4 text-xl font-bold text-gray-800">Did You Know?</h3>
            <ul className="space-y-3">
              {hotel.facts?.map((fact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start pl-4 border-l-4 border-orange-500"
                >
                  <span className="mr-3 text-orange-500">✦</span>
                  <span className="text-gray-700">{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Gallery with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Gallery</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.03, rotate: item % 2 === 0 ? 1 : -1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative h-64 overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src={`/images/hotels/gallery-${item}.jpg`}
                  alt={`Hotel view ${item}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Guest Reviews</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                name: 'Sarah Johnson',
                rating: 5,
                comment: 'Absolutely stunning property with exceptional service. The attention to detail was remarkable!',
                date: 'March 2023'
              },
              {
                name: 'Michael Chen',
                rating: 4,
                comment: 'Beautiful location and amenities. The spa was particularly relaxing after a day of exploring.',
                date: 'February 2023'
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${i < review.rating ? 'text-amber-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="font-medium text-gray-700">{review.date}</span>
                </div>
                <p className="mb-4 text-gray-700">{review.comment}</p>
                <p className="font-medium text-gray-800">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Location</h2>
          <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
            {/* This would be replaced with an actual map component */}
            <div className="flex items-center justify-center w-full h-full bg-gray-200">
              <p className="text-lg font-medium text-gray-600">Interactive Map Here</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-4 right-4 px-4 py-2 bg-white rounded-lg shadow-md"
            >
              <span className="text-sm font-medium text-gray-700">View on Google Maps</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 3D Booking Modal */}
      <AnimatePresence>
        {showBookingForm && (
          <motion.div
            className="fixed mt-20 inset-0 z-50 overflow-y-auto"
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
                <div className="py-12 bg-gradient-to-r from-blue-50 to-amber-50 px-8">
                  {/* Close button with 3D effect */}
                  <motion.button
                    onClick={() => {
                      setShowBookingForm(false);
                      setBookingStep(1);
                    }}
                    className="absolute right-8 top-8 z-10 rounded-full p-2 focus:outline-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="relative h-10 w-10">
                      <motion.div
                        className="absolute inset-0 bg-orange-500 rounded-full"
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
                      Book {hotel.name}
                    </motion.h2>

                    {/* Progress Steps */}
                    <div className="flex justify-between mb-8">
                      {[1, 2, 3].map((step) => (
                        <div key={step} className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                              bookingStep >= step
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-200 text-gray-600'
                            }`}
                          >
                            {step}
                          </div>
                          <span
                            className={`text-sm ${
                              bookingStep >= step
                                ? 'text-orange-600 font-medium'
                                : 'text-gray-500'
                            }`}
                          >
                            {step === 1 && 'Dates'}
                            {step === 2 && 'Guests'}
                            {step === 3 && 'Details'}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Step 1: Dates */}
                    {bookingStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                      >
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-lg">
                              {hotel.name}
                            </h3>
                            <span className="text-orange-600 font-bold text-xl">
                              ${hotel.price}/night
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {hotel.location}
                          </p>
                        </div>

                        <div>
                          <label className="block text-gray-700 mb-2 flex items-center">
                            <FaCalendarAlt className="mr-2 text-orange-500" />
                            Select Dates
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                              <input
                                type="date"
                                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Check-in"
                              />
                              <FaCalendarAlt className="absolute left-3 top-4 text-gray-400" />
                            </div>
                            <div className="relative">
                              <input
                                type="date"
                                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Check-out"
                              />
                              <FaCalendarAlt className="absolute left-3 top-4 text-gray-400" />
                            </div>
                          </div>
                        </div>

                        <div className="pt-4">
                          <button
                            onClick={nextStep}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300"
                          >
                            Continue
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
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Guests */}
                    {bookingStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-gray-700 mb-2 flex items-center">
                            <FaUser className="mr-2 text-orange-500" />
                            Number of Guests
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                  <option key={num} value={num}>
                                    {num} {num === 1 ? "Adult" : "Adults"}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                {[0, 1, 2, 3, 4].map((num) => (
                                  <option key={num} value={num}>
                                    {num} {num === 1 ? "Child" : "Children"}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex gap-4">
                          <button
                            onClick={prevStep}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg transition-all duration-300"
                          >
                            Back
                          </button>
                          <button
                            onClick={nextStep}
                            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg transition-all duration-300"
                          >
                            Continue
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Contact Details */}
                    {bookingStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-gray-700 mb-2 flex items-center">
                            <FaUser className="mr-2 text-orange-500" />
                            Contact Information
                          </label>
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                          <div className="relative mb-4">
                            <input
                              type="email"
                              placeholder="Email Address"
                              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                          </div>
                          <div className="relative">
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <FaPhone className="absolute left-3 top-4 text-gray-400" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-700 mb-2">
                            Special Requests (Optional)
                          </label>
                          <textarea
                            rows={3}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Any special requirements or preferences..."
                          ></textarea>
                        </div>

                        <div className="pt-4 flex gap-4">
                          <button
                            onClick={prevStep}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg transition-all duration-300"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300"
                          >
                            Complete Booking
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HotelDetails;
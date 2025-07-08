// // app/trips/[id]/page.tsx
// "use client";

// import { notFound } from "next/navigation";
// import { trips } from "../../data/trips-data";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";   
// import { use } from 'react'; // ✅ Required for unwrapping


// export default function TripDetailPage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params); // ✅ Proper unwrapping
//   const trip = trips.find((t) => t.id === Number(id));

//   if (!trip) return notFound();

//   return (
//     <motion.main
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-screen mt-20 bg-white py-12"
//     >
//       <div className="container  mx-auto px-4 max-w-6xl">
//         {/* Back Button */}
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="mb-8"
//         >
//           <Link
//             href="/trips"
//             className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
//           >
//             <svg
//               className="w-5 h-5 mr-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M10 19l-7-7m0 0l7-7m-7 7h18"
//               />
//             </svg>
//             Back to all trips
//           </Link>
//         </motion.div>

//         {/* Trip Header */}
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mb-12"
//         >
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             {trip.title}
//           </h1>
//           <div className="flex items-center">
//             <div className="flex text-amber-400 mr-2">
//               {[...Array(5)].map((_, i) => (
//                 <svg
//                   key={i}
//                   className={`w-5 h-5 ${
//                     i < Math.floor(trip.rating)
//                       ? "fill-current"
//                       : "fill-gray-300"
//                   }`}
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>
//             <span className="text-gray-600">
//               {trip.rating} ({trip.reviews.toLocaleString()} reviews) •{" "}
//               {trip.city}
//             </span>
//           </div>
//         </motion.div>

//         {/* Trip Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Image Gallery */}
//           <motion.div
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="space-y-4"
//           >
//             <div className="relative h-96 rounded-xl overflow-hidden">
//               <Image
//                 src={trip.image}
//                 alt={trip.title}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {[1, 2, 3, 4].map((i) => (
//                 <div
//                   key={i}
//                   className="relative h-32 rounded-lg overflow-hidden"
//                 >
//                   <Image
//                     src={`/images/destination/${trip.id}-${i}.jpg`}
//                     alt={`${trip.title} ${i}`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Trip Details */}
//           <motion.div
//             initial={{ x: 20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="space-y-6"
//           >
//             <div className="bg-gray-50 p-6 rounded-xl">
//               <h2 className="text-xl font-semibold mb-4">
//                 About this experience
//               </h2>
//               <p className="text-gray-700">{trip.description}</p>
//             </div>

//             <div className="bg-gray-50 p-6 rounded-xl">
//               <h2 className="text-xl font-semibold mb-4">Highlights</h2>
//               <ul className="space-y-2">
//                 {trip.highlights.map((highlight, i) => (
//                   <li key={i} className="flex items-start">
//                     <svg
//                       className="w-5 h-5 text-green-500 mr-2 mt-0.5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     <span className="text-gray-700">{highlight}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//               <div className="flex justify-between items-center mb-4">
//                 <div>
//                   <p className="text-sm text-blue-600">Starting from</p>
//                   <p className="text-3xl font-bold text-blue-700">
//                     ${trip.price}
//                   </p>
//                   <p className="text-sm text-gray-500">per person</p>
//                 </div>
//                 <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:shadow-md transition-all">
//                   Book Now
//                 </button>
//               </div>
//               <p className="text-sm text-gray-600">Duration: {trip.duration}</p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.main>
//   );
// }


"use client";

import { notFound } from "next/navigation";
import { trips } from "../../data/trips-data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { use, useState } from 'react';

export default function TripDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const trip = trips.find((t) => t.id === Number(id));
  const [showBookingForm, setShowBookingForm] = useState(false);

  if (!trip) return notFound();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen mt-20 bg-white py-12"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Link
            href="/trips"
            className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all trips
          </Link>
        </motion.div>

        {/* Trip Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {trip.title}
          </h1>
          <div className="flex items-center">
            <div className="flex text-amber-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(trip.rating)
                      ? "fill-current"
                      : "fill-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600">
              {trip.rating} ({trip.reviews.toLocaleString()} reviews) •{" "}
              {trip.city}
            </span>
          </div>
        </motion.div>

        {/* Trip Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-32 rounded-lg overflow-hidden"
                >
                  <Image
                    src={`/images/destination/${trip.id}-${i}.jpg`}
                    alt={`${trip.title} ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trip Details */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">
                About this experience
              </h2>
              <p className="text-gray-700">{trip.description}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Highlights</h2>
              <ul className="space-y-2">
                {trip.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-orange-600">Starting from</p>
                  <p className="text-3xl font-bold text-orange-700">
                    ${trip.price}
                  </p>
                  <p className="text-sm text-gray-500">per person</p>
                </div>
                <motion.button 
                  onClick={() => setShowBookingForm(true)}
                  className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-medium rounded-lg hover:shadow-md transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                </motion.button>
              </div>
              <p className="text-sm text-gray-600">Duration: {trip.duration}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingForm && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto"
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
                {/* Modal content */}
                <div className="py-12 px-8 bg-gradient-to-b from-orange-50 to-white">
                  {/* Close button */}
                  <motion.button
                    onClick={() => setShowBookingForm(false)}
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

                  {/* Booking Form */}
                  <div className="mx-auto max-w-lg">
                    <motion.h2
                      className="text-3xl font-bold text-center mb-8 text-gray-800"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Book Your Trip to {trip.city}
                    </motion.h2>

                    {/* Trip Summary */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{trip.title}</h3>
                          <p className="text-gray-600">{trip.duration}</p>
                        </div>
                        <span className="text-orange-600 font-bold text-xl">
                          ${trip.price}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {trip.description.substring(0, 120)}...
                      </p>
                    </div>

                    {/* Booking Form */}
                    <form className="space-y-6">
                      {/* Travel Dates */}
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
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Start Date"
                            required
                          />
                          <input
                            type="date"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="End Date"
                            required
                          />
                        </div>
                      </motion.div>

                      {/* Travelers */}
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
                            <select 
                              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              required
                            >
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
                      </motion.div>

                      {/* Contact Information */}
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
                          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          required
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          required
                        />
                      </motion.div>

                      {/* Special Requests */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <label className="block text-gray-700 mb-2">
                          Special Requests (Optional)
                        </label>
                        <textarea
                          rows={3}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Dietary restrictions, accessibility needs, etc."
                        ></textarea>
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="pt-4"
                      >
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-4 px-6 rounded-xl text-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          Confirm Booking
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
                              d="M5 13l4 4L19 7"
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
    </motion.main>
  );
}
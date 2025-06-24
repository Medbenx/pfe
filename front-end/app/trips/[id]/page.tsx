// app/trips/[id]/page.tsx
"use client";

import { notFound } from "next/navigation";
import { trips } from "../../data/trips-data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";   
import { use } from 'react'; // ✅ Required for unwrapping


export default function TripDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // ✅ Proper unwrapping
  const trip = trips.find((t) => t.id === Number(id));

  if (!trip) return notFound();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white py-12"
    >
      <div className="container mt-20 mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Link
            href="/trips"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
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

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-blue-600">Starting from</p>
                  <p className="text-3xl font-bold text-blue-700">
                    ${trip.price}
                  </p>
                  <p className="text-sm text-gray-500">per person</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:shadow-md transition-all">
                  Book Now
                </button>
              </div>
              <p className="text-sm text-gray-600">Duration: {trip.duration}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}

// app/trips/page.tsx

"use client";

import { TripCard } from "../components/TripCard";
import { trips } from "../data/trips-data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AllTripsPage() {
  return (
    <main className="min-h-screen mt-20 bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Back Button - Fixed to top left */}
        <div className="fixed top-24 left-4 z-30">
          <Link
            href="/#featured-trips"
            className="flex items-center gap-2 bg-gradient-to-r  from-blue-600 to-amber-500 text-white backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-orange transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Back to Featured Trips</span>
          </Link>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Moroccan Adventures
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our complete collection of handpicked Moroccan experiences
          </p>
        </motion.div>

        {/* Trips Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {trips.map((trip) => (
            <TripCard key={trip.id} {...trip} layoutId={`trip-${trip.id}`} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}

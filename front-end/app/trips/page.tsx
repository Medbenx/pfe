// app/trips/page.tsx

'use client';

import { TripCard } from '../components/TripCard';
import { trips } from '../data/trips-data';
import { motion } from 'framer-motion';

export default function AllTripsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
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
            <TripCard 
              key={trip.id} 
              {...trip}
              layoutId={`trip-${trip.id}`}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
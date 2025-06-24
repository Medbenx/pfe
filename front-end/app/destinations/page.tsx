"use client";
import { trendingItems } from "../data/destination"; // Adjust the import path as needed
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AllDestinations() {
  return (
    <main className="min-h-screen mt-20 py-12 bg-gradient-to-b from-blue-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <div className="mb-8">
          <Link
            href="/#trending-destinations"
            className="inline-flex items-center text-amber-600 hover:text-amber-800 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Trending Destinations
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          All Moroccan Destinations
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover the rich culture, stunning landscapes, and vibrant cities of
          Morocco
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trendingItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="mt-auto">
                  <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {item.tours}
                  </span>
                  <Link
                    href={`/destinations/${item.id}`}
                    className="block text-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

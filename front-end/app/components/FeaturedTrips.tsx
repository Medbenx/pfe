/* {
      id: 1,
      city: 'Marrakech, Morocco',
      title: 'Atlas Mountains & Berber Villages Day Trip',
      rating: 4.8,
      reviews: 243,
      duration: '1 day',
      price: 75,
      image: '/images/destination/atlas-trip.jpg'
    },
    {
      id: 2,
      city: 'Chefchaouen, Morocco',
      title: 'Blue City Photography Tour with Local Guide',
      rating: 4.9,
      reviews: 187,
      duration: '2 days',
      price: 120,
      image: '/images/destination/chefchaouen-trip.jpg'
    },
    {
      id: 3,
      city: 'Sahara Desert, Morocco',
      title: 'Overnight Luxury Desert Camp with Camel Trek',
      rating: 5.0,
      reviews: 325,
      duration: '2 days',
      price: 199,
      image: '/images/destination/sahara-trip.jpg'
    },
    {
      id: 4,
      city: 'Fes, Morocco',
      title: 'Medieval Medina Cultural Walking Tour',
      rating: 4.7,
      reviews: 215,
      duration: '1 day',
      price: 65,
      image: '/images/destination/fes-trip.jpg'
    },
    {
      id: 5,
      city: 'Essaouira, Morocco',
      title: 'Coastal Food & Market Tour with Cooking Class',
      rating: 4.9,
      reviews: 178,
      duration: '1 day',
      price: 89,
      image: '/images/destination/essaouira-trip.jpg'
    },
    {
      id: 6,
      city: 'Casablanca, Morocco',
      title: 'Hassan II Mosque & Coastal City Tour',
      rating: 4.7,
      reviews: 198,
      duration: '1 day',
      price: 85,
      image: '/images/destination/casablanca-trip.jpg'
    },
    {
      id: 7,
      city: 'Tangier, Morocco',
      title: 'Mediterranean Culture & Cave of Hercules',
      rating: 4.6,
      reviews: 176,
      duration: '1 day',
      price: 95,
      image: '/images/destination/tangier-trip.jpg'
    },
    {
      id: 8,
      city: 'Meknes, Morocco',
      title: 'Imperial City & Roman Ruins of Volubilis',
      rating: 4.8,
      reviews: 154,
      duration: '1 day',
      price: 70,
      image: '/images/destination/meknes-trip.jpg'
    } */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FeaturedTrips = () => {
  const trips = [
    {
      id: 1,
      city: "Marrakech, Morocco",
      title: "Atlas Mountains & Berber Villages Day Trip",
      rating: 4.8,
      reviews: 243,
      duration: "1 day",
      price: 75,
      image: "/images/destination/atlas-trip.jpg",
    },
    {
      id: 2,
      city: "Chefchaouen, Morocco",
      title: "Blue City Photography Tour with Local Guide",
      rating: 4.9,
      reviews: 187,
      duration: "2 days",
      price: 120,
      image: "/images/destination/chefchaouen-trip.jpg",
    },
    {
      id: 3,
      city: "Sahara Desert, Morocco",
      title: "Overnight Luxury Desert Camp with Camel Trek",
      rating: 5.0,
      reviews: 325,
      duration: "2 days",
      price: 199,
      image: "/images/destination/sahara-trip.jpg",
    },
    {
      id: 4,
      city: "Fes, Morocco",
      title: "Medieval Medina Cultural Walking Tour",
      rating: 4.7,
      reviews: 215,
      duration: "1 day",
      price: 65,
      image: "/images/destination/fes-trip.jpg",
    },
    {
      id: 5,
      city: "Essaouira, Morocco",
      title: "Coastal Food & Market Tour with Cooking Class",
      rating: 4.9,
      reviews: 178,
      duration: "1 day",
      price: 89,
      image: "/images/destination/essaouira-trip.jpg",
    },
    {
      id: 6,
      city: "Casablanca, Morocco",
      title: "Hassan II Mosque & Coastal City Tour",
      rating: 4.7,
      reviews: 198,
      duration: "1 day",
      price: 85,
      image: "/images/destination/casablanca-trip.jpg",
    },
    {
      id: 7,
      city: "Tangier, Morocco",
      title: "Mediterranean Culture & Cave of Hercules",
      rating: 4.6,
      reviews: 176,
      duration: "1 day",
      price: 95,
      image: "/images/destination/tangier-trip.jpg",
    },
    {
      id: 8,
      city: "Meknes, Morocco",
      title: "Imperial City & Roman Ruins of Volubilis",
      rating: 4.8,
      reviews: 154,
      duration: "1 day",
      price: 70,
      image: "/images/destination/meknes-trip.jpg",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with "See All" link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <p className="text-blue-600 font-medium mb-2">Explore Morocco</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                Trips
              </span>
            </h2>
          </div>
          {/* <Link href="/trips" passHref>
            <motion.a
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(to right, #2563eb, #f59e0b)",
                backgroundSize: "200% auto",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-md hover:shadow-lg transition-all"
            >
              See All Trips
            </motion.a>
          </Link> */}
          <Link href="/trips" passHref legacyBehavior>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              See All Trips
            </motion.div>
          </Link>
        </motion.div>

        {/* Trip Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {trips.slice(0, 4).map((trip) => (
            <motion.div
              key={trip.id}
              variants={item}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image with overlay effect */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {trip.city}
                  </span>
                  <span className="text-xs font-medium text-gray-500">
                    {trip.duration}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {trip.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(trip.rating)
                            ? "text-amber-400 fill-current"
                            : "text-gray-300 fill-current"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {trip.rating} ({trip.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Starting from</span>
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                    ${trip.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTrips;

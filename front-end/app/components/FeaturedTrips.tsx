'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturedTrips = () => {
  const trips = [
    {
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
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Featured Trips
          </motion.h2>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            See all →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">{trip.city}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{trip.title}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(trip.rating) ? 'fill-current' : 'fill-gray-300'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">
                    {trip.rating} ({trip.reviews})
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{trip.duration}</span>
                  <span className="text-lg font-bold text-blue-600">From ${trip.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;
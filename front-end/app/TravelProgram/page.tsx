// import Link from 'next/link';
// import Image from 'next/image';
// import '../styles/TravelProgram.css';

// export default function TravelProgram() {
//   // Moroccan destinations data
//   const destinations = [
//     { 
//       id: 1, 
//       city: 'Marrakech', 
//       duration: '3 DAYS 2 NIGHTS',
//       title: 'Exploring Marrakech: A Vibrant 3D2N City Adventure',
//       image: '/images/marrakech.jpg'
//     },
//     { 
//       id: 2, 
//       city: 'Chefchaouen', 
//       duration: '3 DAYS 2 NIGHTS',
//       title: 'The Blue Pearl: A 3D2N Exploration of Chefchaouen',
//       image: '/images/chefchaouen.jpg'
//     },
//     { 
//       id: 3, 
//       city: 'Sahara', 
//       duration: '4 DAYS 3 NIGHTS',
//       title: '4D3N Sahara Adventure: Experience the Desert Wonders',
//       image: '/images/sahara.jpg'
//     },
//     { 
//       id: 4, 
//       city: 'Fes', 
//       duration: '4 DAYS 3 NIGHTS',
//       title: '4D3N in Fes: Morocco\'s Cultural Capital',
//       image: '/images/fes.jpg'
//     },
//     { 
//       id: 5, 
//       city: 'Casablanca', 
//       duration: '3 DAYS 2 NIGHTS',
//       title: '3D2N in Casablanca: Modern Meets Traditional',
//       image: '/images/casablanca.jpg'
//     },
//     { 
//       id: 6, 
//       city: 'Atlas', 
//       duration: '3 DAYS 2 NIGHTS',
//       title: '3D2N Atlas Trek: Unforgettable Mountain Journey',
//       image: '/images/atlas.jpg'
//     }
//   ];

//   const durations = [
//     '3 Days 2 Nights',
//     '4 Days 3 Nights',
//     '5 Days 4 Nights',
//     '6 Days 5 Nights',
//     '7 Days 6 Nights',
//     'Day Trip'
//   ];

//   return (
//     <div className="experience-page">
//       <div className="hero-section">
//         <h1>Enjoy one of our carefully curated adventures to be cherished forever.</h1>
//       </div>

//       <div className="content-wrapper">
//         <div className="filters-section">
//           <div className="filter-group">
//             <h2>State</h2>
//             <select className="dropdown">
//               <option>SELECT STATE</option>
//               <option>Marrakech</option>
//               <option>Chefchaouen</option>
//               <option>Sahara Desert</option>
//               <option>Fes</option>
//               <option>Casablanca</option>
//               <option>Atlas Mountains</option>
//             </select>
//           </div>

//           <div className="filter-group">
//             <h2>Duration</h2>
//             <div className="duration-options">
//               {durations.map((duration, index) => (
//                 <div key={index} className="duration-option">
//                   <input type="radio" id={`duration-${index}`} name="duration" />
//                   <label htmlFor={`duration-${index}`}>{duration}</label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="destinations-grid">
//           {destinations.map(destination => (
//             <Link href={`/experience/${destination.id}`} key={destination.id} className="destination-card">
//               <div className="destination-image">
//                 <Image 
//                   src={destination.image} 
//                   alt={destination.city} 
//                   fill
//                   className="image"
//                 />
//                 <div className="duration-badge">{destination.duration}</div>
//               </div>
//               <div className="destination-info">
//                 <h3>{destination.city}</h3>
//                 <p>{destination.title}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function TravelProgram() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeDuration, setActiveDuration] = useState<string | null>(null);

  // Moroccan destinations data with video previews
  const destinations = [
    { 
      id: 1, 
      city: 'Marrakech', 
      duration: '3 DAYS 2 NIGHTS',
      title: 'Exploring Marrakech: A Vibrant 3D2N City Adventure',
      image: '/images/marrakech.jpg',
      videoPreview: '/videos/marrakech-preview.mp4',
      price: 'From 1200 MED',
      state: 'Marrakech'
    },
    { 
      id: 2, 
      city: 'Chefchaouen', 
      duration: '3 DAYS 2 NIGHTS',
      title: 'The Blue Pearl: A 3D2N Exploration of Chefchaouen',
      image: '/images/chefchaouen.jpg',
      videoPreview: '/videos/chefchaouen-preview.mp4',
      price: 'From 1100 AED',
      state: 'Chefchaouen'
    },
    { 
      id: 3, 
      city: 'Sahara', 
      duration: '4 DAYS 3 NIGHTS',
      title: '4D3N Sahara Adventure: Experience the Desert Wonders',
      image: '/images/sahara.jpg',
      videoPreview: '/videos/sahara-preview.mp4',
      price: 'From 1800 AED',
      state: 'Sahara Desert'
    },
    { 
      id: 4, 
      city: 'Fes', 
      duration: '4 DAYS 3 NIGHTS',
      title: '4D3N in Fes: Morocco\'s Cultural Capital',
      image: '/images/fes.jpg',
      videoPreview: '/videos/fes-preview.mp4',
      price: 'From 1500 AED',
      state: 'Fes'
    },
    { 
      id: 5, 
      city: 'Casablanca', 
      duration: '3 DAYS 2 NIGHTS',
      title: '3D2N in Casablanca: Modern Meets Traditional',
      image: '/images/casablanca.jpg',
      videoPreview: '/videos/casablanca-preview.mp4',
      price: 'From 1000 AED',
      state: 'Casablanca'
    },
    { 
      id: 6, 
      city: 'Atlas', 
      duration: '3 DAYS 2 NIGHTS',
      title: '3D2N Atlas Trek: Unforgettable Mountain Journey',
      image: '/images/atlas.jpg',
      videoPreview: '/videos/atlas-preview.mp4',
      price: 'From 1300 AED',
      state: 'Atlas Mountains'
    }
  ];

  const states = [
    'Marrakech',
    'Chefchaouen',
    'Sahara Desert',
    'Fes',
    'Casablanca',
    'Atlas Mountains'
  ];

  const durations = [
    '3 Days 2 Nights',
    '4 Days 3 Nights',
    '5 Days 4 Nights',
    '6 Days 5 Nights',
    '7 Days 6 Nights',
    'Day Trip'
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesState = !activeFilter || destination.state === activeFilter;
    const matchesDuration = !activeDuration || destination.duration.toLowerCase().includes(activeDuration.toLowerCase());
    return matchesState && matchesDuration;
  });

  const clearFilters = () => {
    setActiveFilter(null);
    setActiveDuration(null);
  };

  return (
    <div className="travel-progra mt-[10px] py-16 bg-gradient-to-r from-blue-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[500px] w-full">
        <Image 
          src="/images/programs/morocco-hero.jpg" 
          alt="Moroccan landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover the Splendor of Morocco Through Our Special Programs
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 mt-12">
        {/* Filters Section */}
        <motion.div 
          className="bg-white p-6 rounded-2xl shadow-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* State Filter */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">State</h2>
              <div className="flex flex-wrap gap-3">
                {states.map((state, index) => (
                  <motion.button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === state ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    onClick={() => setActiveFilter(activeFilter === state ? null : state)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {state}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Duration</h2>
              <div className="flex flex-wrap gap-3">
                {durations.map((duration, index) => (
                  <motion.button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeDuration === duration ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    onClick={() => setActiveDuration(activeDuration === duration ? null : duration)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {duration}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(activeFilter || activeDuration) && (
            <motion.div 
              className="mt-6 pt-6 border-t border-gray-200 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="text-gray-600 mr-4">Active filters:</span>
              {activeFilter && (
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm flex items-center mr-2">
                  {activeFilter}
                  <button 
                    onClick={() => setActiveFilter(null)}
                    className="ml-2 text-amber-600 hover:text-amber-800"
                  >
                    ✕
                  </button>
                </span>
              )}
              {activeDuration && (
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm flex items-center">
                  {activeDuration}
                  <button 
                    onClick={() => setActiveDuration(null)}
                    className="ml-2 text-amber-600 hover:text-amber-800"
                  >
                    ✕
                  </button>
                </span>
              )}
              <button 
                onClick={clearFilters}
                className="ml-auto text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.p 
          className="text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Showing {filteredDestinations.length} of {destinations.length} programs
        </motion.p>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/TravelProgram/${destination.id}`} passHref>
                  <div className="destination-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col cursor-pointer">
                    <div className="relative h-64 overflow-hidden group">
                      {/* Static Image */}
                      <Image
                        src={destination.image}
                        alt={destination.city}
                        fill
                        className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                      />
                      
                      {/* Video Preview on Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={destination.videoPreview} type="video/mp4" />
                        </video>
                      </div>
                      
                      <div className="absolute top-4 right-4 bg-white/90 text-amber-600 px-3 py-1 rounded-full text-xs font-bold">
                        {destination.price}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {destination.duration}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.city}</h3>
                      <p className="text-gray-600 mb-4 flex-1">{destination.title}</p>
                      <div className="mt-auto">
                        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center py-16 bg-white rounded-2xl shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No programs match your filters
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search criteria
            </p>
            <button 
              onClick={clearFilters}
              className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
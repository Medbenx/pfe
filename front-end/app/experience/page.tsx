// import Link from 'next/link';
// import Image from 'next/image';
// import '../styles/Experience.css';

// export default function Experience() {
//   // Moroccan destinations data
//   const destinations = [
//     {
//       id: 1,
//       city: 'Marrakech',
//       topic: 'Culture & Heritage',
//       title: 'Discovering Marrakech Through Its Rich Heritage & Local Markets',
//       image: '/images/marrakech.jpg'
//     },
//     {
//       id: 2,
//       city: 'Chefchaouen',
//       topic: 'Nature & Adventure',
//       title: 'Relaxing Getaways to Explore in the Blue City',
//       image: '/images/chefchaouen.jpg'
//     },
//     {
//       id: 3,
//       city: 'Sahara Desert',
//       topic: 'Adventure',
//       title: 'Desert Escapes: Top 9 Retreats in the Sahara',
//       image: '/images/sahara.jpg'
//     },
//     {
//       id: 4,
//       city: 'Essaouira',
//       topic: 'Island & Beaches',
//       title: 'Exploring Essaouira: Top Beachfront Activities',
//       image: '/images/essaouira.jpg'
//     },
//     {
//       id: 5,
//       city: 'Fes',
//       topic: 'Culture & Heritage',
//       title: '9 Best Riads & Cultural Stays in Fes',
//       image: '/images/fes.jpg'
//     },
//     {
//       id: 6,
//       city: 'Atlas Mountains',
//       topic: 'Nature & Adventure',
//       title: 'Cool Escapes: Atlas Mountain Retreats',
//       image: '/images/atlas.jpg'
//     }
//   ];

//   const topics = [
//     'Island & Beaches',
//     'Culture & Heritage',
//     'Food & Drinks',
//     'Family Fun',
//     'City Excitement',
//     'Nature & Adventure',
//     'Stay'
//   ];

//   const cities = [
//     'Marrakech',
//     'Chefchaouen',
//     'Sahara Desert',
//     'Essaouira',
//     'Fes',
//     'Atlas Mountains',
//     'Casablanca',
//     'Rabat'
//   ];

//   return (
//     <div className="experience-page">
//       <div className="hero-section">
//         <h1>Be an explorer and experience the beauty of diversity in Morocco.</h1>
//       </div>

//       <div className="content-wrapper">
//         <div className="filters-section">
//           <div className="filter-group">
//             <h2>State</h2>
//             <select className="dropdown">
//               <option>SELECT STATE</option>
//               {cities.map((city, index) => (
//                 <option key={index}>{city}</option>
//               ))}
//             </select>
//           </div>

//           <div className="filter-group">
//             <h2>Topics</h2>
//             <ul className="topics-list">
//               {topics.map((topic, index) => (
//                 <li key={index}>
//                   <Link href={`/experience?topic=${topic.toLowerCase().replace(' & ', '-')}`}>
//                     {topic}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
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
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//               <div className="destination-info">
//                 <span className="destination-city">{destination.city}</span>
//                 <h3>{destination.title}</h3>
//                 <span className="destination-topic">{destination.topic}</span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaFilter } from "react-icons/fa";
import "../styles/Experience.css"; // Ensure you have the correct path to your CSS file
import Link from "next/link";




export default function Experience() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [activeCities, setActiveCities] = useState<string[]>([]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Moroccan destinations data with video previews
  const destinations = [
    {
      id: 1,
      city: "Marrakech",
      topic: "Culture & Heritage",
      title: "Discovering Marrakech Through Its Rich Heritage & Local Markets",
      image: "/images/marrakech.jpg",
      videoPreview: "/videos/marrakech-preview.mp4",
    },
    {
      id: 2,
      city: "Chefchaouen",
      topic: "Nature & Adventure",
      title: "Relaxing Getaways to Explore in the Blue City",
      image: "/images/chefchaouen.jpg",
      videoPreview: "/videos/chefchaouen-preview.mp4",
    },
    {
      id: 3,
      city: "Sahara Desert",
      topic: "Adventure",
      title: "Desert Escapes: Top 9 Retreats in the Sahara",
      image: "/images/sahara.jpg",
      videoPreview: "/videos/sahara-preview.mp4",
    },
    {
      id: 4,
      city: "Essaouira",
      topic: "Island & Beaches",
      title: "Exploring Essaouira: Top Beachfront Activities",
      image: "/images/essaouira.jpg",
      videoPreview: "/videos/essaouira-preview.mp4",
    },
    {
      id: 5,
      city: "Fes",
      topic: "Culture & Heritage",
      title: "9 Best Riads & Cultural Stays in Fes",
      image: "/images/fes.jpg",
      videoPreview: "/videos/fes-preview.mp4",
    },
    {
      id: 6,
      city: "Atlas Mountains",
      topic: "Nature & Adventure",
      title: "Cool Escapes: Atlas Mountain Retreats",
      image: "/images/atlas.jpg",
      videoPreview: "/videos/atlas-preview.mp4",
    },
  ];

  const topics = [
    "Island & Beaches",
    "Culture & Heritage",
    "Food & Drinks",
    "Family Fun",
    "City Excitement",
    "Nature & Adventure",
    "Stay",
  ];

  const cities = [
    "Marrakech",
    "Chefchaouen",
    "Sahara Desert",
    "Essaouira",
    "Fes",
    "Atlas Mountains",
    "Casablanca",
    "Rabat",
  ];

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const toggleCity = (city: string) => {
    setActiveCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setActiveCities([]);
  };

  const filteredDestinations = destinations.filter((destination) => {
    const matchesTopic =
      activeFilters.length === 0 || activeFilters.includes(destination.topic);
    const matchesCity =
      activeCities.length === 0 || activeCities.includes(destination.city);
    return matchesTopic && matchesCity;
  });

  return (
    <div className="experience-page py-16 bg-gradient-to-r from-blue-50 to-amber-50">
      {/* Hero Section */}
      <motion.div
        className="hero-section max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mt-24 mb-6">
          Be an explorer and experience the beauty of diversity in Morocco.
        </h1>

        {/* Mobile Filter Toggle */}
        <button
          className="md:hidden mt-2  bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg flex items-center gap-2 mx-auto mb-6"
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        >
          <FaFilter /> Filters
        </button>
      </motion.div>

      <div className="content-wrapper max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Filters Section - Desktop */}
        <motion.div
          className="hidden md:block w-full md:w-72 bg-white p-6 rounded-xl shadow-lg h-fit sticky top-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
            {activeFilters.length > 0 || activeCities.length > 0 ? (
              <button
                onClick={clearFilters}
                className="text-sm text-amber-600 hover:text-amber-700"
              >
                Clear all
              </button>
            ) : null}
          </div>

          {/* Cities Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Cities</h3>
            <div className="space-y-2">
              {cities.map((city, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={activeCities.includes(city)}
                    onChange={() => toggleCity(city)}
                    className="form-checkbox h-5 w-5 text-amber-600 rounded focus:ring-amber-500"
                  />
                  <span className="text-gray-700">{city}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Topics Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Topics</h3>
            <div className="space-y-2">
              {topics.map((topic, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={activeFilters.includes(topic)}
                    onChange={() => toggleFilter(topic)}
                    className="form-checkbox h-5 w-5 text-amber-600 rounded focus:ring-amber-500"
                  />
                  <span className="text-gray-700">{topic}</span>
                </label>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Filters */}
        <AnimatePresence>
          {isMobileFiltersOpen && (
            <motion.div
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
            >
              <motion.div
                className="bg-white w-4/5 h-[790px] mt-16 p-6 "
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-1  mt-2">
                  <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                  <button
                    onClick=  {() => setIsMobileFiltersOpen(false)}
                    className="text-gray-900 mt-10 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                {/* Cities Filter */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-gray-700">
                    Cities
                  </h3>
                  <div className="space-y-2">
                    {cities.map((city, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={activeCities.includes(city)}
                          onChange={() => toggleCity(city)}
                          className="form-checkbox h-5 w-5 text-amber-600 rounded focus:ring-amber-500"
                        />
                        <span className="text-gray-700">{city}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Topics Filter */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-700">
                    Topics
                  </h3>
                  <div className="space-y-2">
                    {topics.map((topic, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={activeFilters.includes(topic)}
                          onChange={() => toggleFilter(topic)}
                          className="form-checkbox h-5 w-5 text-amber-600 rounded focus:ring-amber-500"
                        />
                        <span className="text-gray-700">{topic}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg"
                  onClick={() => setIsMobileFiltersOpen(false)}
                >
                  Apply Filters
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Destinations Grid */}
        <div className="flex-1">
          {/* Active Filters */}
          {(activeFilters.length > 0 || activeCities.length > 0) && (
            <motion.div
              className="mb-6 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {activeCities.map((city) => (
                <span
                  key={city}
                  className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {city}
                  <button
                    onClick={() => toggleCity(city)}
                    className="ml-2 text-amber-600 hover:text-amber-800"
                  >
                    ✕
                  </button>
                </span>
              ))}
              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {filter}
                  <button
                    onClick={() => toggleFilter(filter)}
                    className="ml-2 text-amber-600 hover:text-amber-800"
                  >
                    ✕
                  </button>
                </span>
              ))}
              <button
                onClick={clearFilters}
                className="text-sm text-amber-600 hover:text-amber-700 ml-2"
              >
                Clear all
              </button>
            </motion.div>
          )}

          {/* Results Count */}
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Showing {filteredDestinations.length} of {destinations.length}{" "}
            experiences
          </motion.p>

          {/* Destinations */}
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredDestinations.map((destination, index) => (
                <Link
                  href={`/experience/${destination.id}`}
                  key={destination.id}
                  passHref
                  legacyBehavior
                >
                  <motion.div
                    className="destination-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
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
                          <source
                            src={destination.videoPreview}
                            type="video/mp4"
                          />
                        </video>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <span className="text-white font-medium text-sm">
                          {destination.city}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {destination.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                        {destination.topic}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-12 bg-white rounded-xl shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No experiences match your filters
              </h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search criteria
              </p>
              <button
                onClick={clearFilters}
                className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-6 rounded-lg"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

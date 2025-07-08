// import TouristGallery from "../components/Gallery";

// export default function GalleryPage() {
//   return <TouristGallery />;
// }


// app/gallery/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiFilter, FiX } from 'react-icons/fi';

// Sample data for gallery images with city information
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/marrakech-1.jpg',
    city: 'Marrakech',
    caption: 'Majorelle Garden beauty',
    author: 'Traveler123',
    likes: 1245
  },
  {
    id: 2,
    src: '/images/gallery/chefchaouen-1.jpg',
    city: 'Chefchaouen',
    caption: 'Blue pearl of Morocco',
    author: 'Wanderlust22',
    likes: 892
  },
  {
    id: 3,
    src: '/images/gallery/fes-1.jpg',
    city: 'Fes',
    caption: 'Historic Medina streets',
    author: 'CultureExplorer',
    likes: 1567
  },
  {
    id: 4,
    src: '/images/gallery/marrakech-2.jpg',
    city: 'Marrakech',
    caption: 'Koutoubia Mosque at sunset',
    author: 'SunsetChaser',
    likes: 2043
  },
  {
    id: 5,
    src: '/images/gallery/essaouira-1.jpg',
    city: 'Essaouira',
    caption: 'Coastal fortress walls',
    author: 'OceanLover',
    likes: 732
  },
  {
    id: 6,
    src: '/images/gallery/chefchaouen-2.jpg',
    city: 'Chefchaouen',
    caption: 'Stairway to heaven',
    author: 'PhotoPro',
    likes: 1890
  },
  {
    id: 7,
    src: '/images/gallery/fes-2.jpg',
    city: 'Fes',
    caption: 'Traditional tanneries',
    author: 'AuthenticTravels',
    likes: 1123
  },
  {
    id: 8,
    src: '/images/gallery/essaouira-2.jpg',
    city: 'Essaouira',
    caption: 'Fishing port vibes',
    author: 'SeafoodFan',
    likes: 645
  },
  // Add more images as needed...
];

// Get unique cities for filter
const cities = [...new Set(galleryImages.map(image => image.city))];

export default function GalleryPage() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter images based on selected city
  const filteredImages = selectedCity
    ? galleryImages.filter(image => image.city === selectedCity)
    : galleryImages;

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-blue-50 to-amber-50">
      <div className="container mt-20 px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Morocco Through Your Lens</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover stunning photos captured by travelers across Morocco's most beautiful cities
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="relative flex justify-between items-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md"
          >
            <FiFilter />
            <span>{selectedCity ? `Filter: ${selectedCity}` : 'Filter by City'}</span>
          </motion.button>

          {selectedCity && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCity(null)}
              className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-200 rounded-full"
            >
              <FiX />
              Clear filter
            </motion.button>
          )}
        </div>

        {/* Filter Dropdown */}
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-3 p-4 bg-white rounded-lg shadow-md sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {cities.map(city => (
                <motion.button
                  key={city}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCity(city);
                    setIsFilterOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-center ${
                    selectedCity === city
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {city}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredImages.map(image => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden bg-white rounded-xl shadow-lg"
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 text-xs font-medium text-white bg-orange-500 rounded-full">
                    {image.city}
                  </span>
                  <span className="flex items-center text-sm text-gray-600">
                    ❤️ {image.likes.toLocaleString()}
                  </span>
                </div>
                <h3 className="font-medium text-gray-900">{image.caption}</h3>
                <p className="text-sm text-gray-500">by @{image.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No photos found for {selectedCity}
            </h3>
            <button
              onClick={() => setSelectedCity(null)}
              className="text-orange-500 hover:underline"
            >
              Clear filter
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
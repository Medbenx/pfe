"'use client';"

import { trendingItems } from "../../data/destination"; // Adjust the import path as needed
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function DestinationDetail({ params }: { params: { id: string } }) {
  const destination = trendingItems.find(item => item.id.toString() === params.id);

  if (!destination) {
    return notFound();
  }

  return (
    <main className="min-h-screen mt-20 py-12 bg-gradient-to-b from-blue-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <a href="/destinations" className="inline-flex items-center text-amber-600 hover:text-amber-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Destinations
            </a>
          </div>

          {/* Destination Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={destination.image}
                alt={destination.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{destination.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{destination.fullDescription}</p>
              <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-6">
                <p className="font-medium text-amber-800">Best time to visit: {destination.bestTimeToVisit}</p>
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors">
                Book a Tour
              </button>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {destination.highlights.map((highlight, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900">{highlight}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* You would replace these with actual gallery images */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative h-48 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={destination.image} // Replace with gallery images
                    alt={`${destination.title} ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
import { Compass } from 'lucide-react';

const destinations = [
  { name: 'Bali', image: '/bali.jpg' },
  { name: 'Paris', image: '/paris.jpg' },
  { name: 'Tokyo', image: '/tokyo.jpg' },
  { name: 'Rome', image: '/rome.jpg' },
];

export default function TravelInspiration() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Compass className="w-5 h-5 mr-2 text-teal-600 dark:text-teal-400" />
          Travel Inspiration
        </h2>
        <button className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
          View More
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {destinations.map((destination) => (
          <div key={destination.name} className="group cursor-pointer">
            <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-2 overflow-hidden">
              {/* Replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-teal-500 transition-colors">
                {destination.name}
              </div>
            </div>
            <p className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
              {destination.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
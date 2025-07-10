import {  MapPin, Star, User } from 'lucide-react';
import { Button } from '../components/ui/button';

const favorites = [
  {
    id: 1,
    type: "guide",
    name: "Mohamed Ali",
    location: "Dubai, UAE",
    rating: 4.9,
    specialty: "City Tours"
  },
  {
    id: 2,
    type: "city",
    name: "Abu Dhabi",
    country: "UAE",
    tours: 24
  },
  {
    id: 3,
    type: "guide",
    name: "Fatima Ahmed",
    location: "Sharjah, UAE",
    rating: 4.8,
    specialty: "Cultural Tours"
  }
];

export default function Favorites() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Favorites</h2>
      
      <div className="space-y-3">
        {favorites.map((item) => (
          <div key={item.id} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
            {item.type === "guide" ? (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                  <User className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="mr-2">{item.location}</span>
                    <Star className="w-3 h-3 mr-1 text-yellow-500" />
                    <span>{item.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.specialty}</p>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  Book Now
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.country}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.tours} tours available
                  </p>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  Explore
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <Button variant="ghost" className="mt-3 w-full text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
        View All Favorites
      </Button>
    </div>
  );
}
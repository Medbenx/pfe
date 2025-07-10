import { CalendarDays, Plane, Hotel } from 'lucide-react';

const upcomingTrips = [
  {
    date: 'June 15-20, 2023',
    title: 'Bali Adventure',
    type: 'Flight',
    location: 'Denpasar, Indonesia',
    status: 'Confirmed'
  },
  {
    date: 'July 5-12, 2023',
    title: 'Paris Getaway',
    type: 'Hotel',
    location: 'Paris, France',
    status: 'Paid'
  },
  {
    date: 'August 10-15, 2023',
    title: 'Tokyo Exploration',
    type: 'Flight',
    location: 'Tokyo, Japan',
    status: 'Pending'
  },
];

export default function TripCalendar() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Upcoming Trips
      </h2>
      <div className="space-y-4">
        {upcomingTrips.map((trip, index) => (
          <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <CalendarDays className="w-4 h-4" />
              <span>{trip.date}</span>
            </div>
            <h3 className="mt-2 font-medium text-gray-900 dark:text-white">
              {trip.title}
            </h3>
            <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-300">
              {trip.type === 'Flight' ? (
                <Plane className="w-4 h-4 mr-1" />
              ) : (
                <Hotel className="w-4 h-4 mr-1" />
              )}
              {trip.location}
            </div>
            <div className={`mt-2 text-xs px-2 py-1 rounded-full inline-block ${
              trip.status === 'Confirmed' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
              trip.status === 'Paid' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
              'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
            }`}>
              {trip.status}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        View All Trips
      </button>
    </div>
  );
}
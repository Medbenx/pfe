import { CalendarDays, MapPin } from 'lucide-react';

const upcomingTours = [
  {
    date: 'June 10, 2023',
    time: '9:00 AM - 12:00 PM',
    title: 'Historic Downtown Walk',
    location: 'Main Square',
    group: '8 people'
  },
  {
    date: 'June 12, 2023',
    time: '2:00 PM - 5:00 PM',
    title: 'Food Tasting Tour',
    location: 'Market District',
    group: '6 people'
  },
  {
    date: 'June 15, 2023',
    time: '5:00 PM - 8:00 PM',
    title: 'Sunset Mountain Hike',
    location: 'Green Hills Trail',
    group: '4 people'
  },
];

export default function TourCalendar() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Upcoming Tours
      </h2>
      <div className="space-y-4">
        {upcomingTours.map((tour, index) => (
          <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <CalendarDays className="w-4 h-4" />
              <span>{tour.date}</span>
              <span>•</span>
              <span>{tour.time}</span>
            </div>
            <h3 className="mt-1 font-medium text-gray-900 dark:text-white">
              {tour.title}
            </h3>
            <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-300">
              <MapPin className="w-4 h-4 mr-1" />
              {tour.location}
            </div>
            <div className="mt-2 text-xs px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full inline-block">
              {tour.group}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        View Full Calendar
      </button>
    </div>
  );
}
import { Star, Bell, CreditCard, MessageSquare } from 'lucide-react';

const activities = [
  {
    type: 'review',
    title: 'Your review was posted',
    content: 'You rated "Bali Cultural Tour" 5 stars',
    time: '2 hours ago',
    icon: Star,
    color: 'text-yellow-500'
  },
  {
    type: 'alert',
    title: 'Price drop alert',
    content: 'Flights to Tokyo decreased by 15%',
    time: '5 hours ago',
    icon: Bell,
    color: 'text-red-500'
  },
  {
    type: 'payment',
    title: 'Payment processed',
    content: 'Your Paris hotel booking is confirmed',
    time: '1 day ago',
    icon: CreditCard,
    color: 'text-green-500'
  },
  {
    type: 'message',
    title: 'New message',
    content: 'Tour guide responded to your question',
    time: '2 days ago',
    icon: MessageSquare,
    color: 'text-blue-500'
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h2>
        <button className="text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
          Filter
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`flex-shrink-0 p-2 rounded-lg ${activity.color} bg-opacity-10`}>
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {activity.content}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
        View all activity →
      </button>
    </div>
  );
}
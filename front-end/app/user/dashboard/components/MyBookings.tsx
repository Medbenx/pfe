import { Bookmark, MessageSquare, Bell, CreditCard } from 'lucide-react';

const activities = [
  {
    type: "booking",
    title: "New booking confirmed",
    description: "You booked 'Dubai City Tour' with Mohamed Ali",
    time: "2 hours ago",
    icon: Bookmark,
    color: "text-blue-500"
  },
  {
    type: "message",
    title: "New message from guide",
    description: "Fatima sent: 'Please bring comfortable shoes'",
    time: "5 hours ago",
    icon: MessageSquare,
    color: "text-green-500"
  },
  {
    type: "notification",
    title: "Tour update",
    description: "Your 'Desert Safari' time changed to 4:00 PM",
    time: "1 day ago",
    icon: Bell,
    color: "text-yellow-500"
  },
  {
    type: "payment",
    title: "Payment processed",
    description: "Your card was charged $95.00 for Abu Dhabi tour",
    time: "2 days ago",
    icon: CreditCard,
    color: "text-purple-500"
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Recent Activity
      </h2>
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
                {activity.description}
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
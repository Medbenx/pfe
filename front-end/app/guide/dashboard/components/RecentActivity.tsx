import { Star, User, MessageSquare, ThumbsUp } from 'lucide-react';

const activities = [
  {
    type: 'review',
    user: 'Michael Chen',
    content: 'Left a 5-star review for your "Historic Downtown" tour',
    time: '2 hours ago',
    icon: Star,
    color: 'text-yellow-500'
  },
  {
    type: 'booking',
    user: 'Travel Group (4 people)',
    content: 'Booked your "Sunset Hike" for June 15',
    time: '5 hours ago',
    icon: User,
    color: 'text-teal-500'
  },
  {
    type: 'message',
    user: 'Lisa Rodriguez',
    content: 'Sent a message about dietary restrictions',
    time: '1 day ago',
    icon: MessageSquare,
    color: 'text-blue-500'
  },
  {
    type: 'like',
    user: '124 people',
    content: 'Liked your new "Hidden Gems" tour listing',
    time: '2 days ago',
    icon: ThumbsUp,
    color: 'text-pink-500'
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
                {activity.user}
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
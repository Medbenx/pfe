import {  Check, X, AlertTriangle } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: "Booking accepted",
    message: "Your Dubai tour booking was confirmed by Mohamed",
    time: "10 min ago",
    read: false,
    type: "success"
  },
  {
    id: 2,
    title: "Tour update",
    message: "Meeting point changed for your Abu Dhabi tour",
    time: "2 hours ago",
    read: true,
    type: "info"
  },
  {
    id: 3,
    title: "Payment failed",
    message: "Your card was declined for the Sharjah tour",
    time: "1 day ago",
    read: true,
    type: "error"
  }
];

export default function Notifications() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
        <button className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
          Mark all as read
        </button>
      </div>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-3 rounded-lg ${!notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-50 dark:bg-gray-700'}`}
          >
            <div className="flex items-start space-x-2">
              <div className={`mt-1 flex-shrink-0 ${
                notification.type === "success" ? "text-green-500" :
                notification.type === "error" ? "text-red-500" :
                "text-yellow-500"
              }`}>
                {notification.type === "success" ? <Check className="w-5 h-5" /> :
                 notification.type === "error" ? <X className="w-5 h-5" /> :
                 <AlertTriangle className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {notification.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {notification.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {notification.time}
                </p>
              </div>
              {!notification.read && (
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-3 w-full py-2 text-sm font-medium text-center text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
        View all notifications
      </button>
    </div>
  );
}
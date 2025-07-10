import { Plane, MapPin, Star, MessageSquare } from 'lucide-react';

const stats = [
  { title: "Booked Tours", value: "12", icon: Plane, change: "+3 this month", trend: "up" },
  { title: "Cities Visited", value: "8", icon: MapPin, change: "2 new cities", trend: "up" },
  { title: "Tourist Rating", value: "4.7/5", icon: Star, change: "+0.2 points", trend: "up" },
  { title: "Reviews Written", value: "9", icon: MessageSquare, change: "1 this week", trend: "neutral" },
];

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                {stat.value}
              </h3>
            </div>
            <div className={`p-3 rounded-lg ${
              stat.trend === "up" ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400" :
              stat.trend === "down" ? "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400" :
              "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
            }`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
          <p className={`mt-3 text-xs ${
            stat.trend === "up" ? "text-teal-600 dark:text-teal-400" :
            stat.trend === "down" ? "text-red-600 dark:text-red-400" :
            "text-blue-600 dark:text-blue-400"
          }`}>
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}
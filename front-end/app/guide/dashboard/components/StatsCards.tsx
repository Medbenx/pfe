import { Map, CalendarDays, Star, Wallet } from 'lucide-react';

interface StatCard {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

export default function StatsCards() {
  const stats: StatCard[] = [
    { title: 'Total Tours', value: '24', icon: Map, change: '+3 from last month', trend: 'up' },
    { title: 'Upcoming Bookings', value: '7', icon: CalendarDays, change: '2 tomorrow', trend: 'neutral' },
    { title: 'Rating Average', value: '4.8', icon: Star, change: '+0.1 from last month', trend: 'up' },
    { title: 'Total Earnings', value: '$3,240', icon: Wallet, change: '+12% from last month', trend: 'up' },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
        >
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
              stat.trend === 'up' ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400' :
              stat.trend === 'down' ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
              'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
            }`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
          <p className={`mt-3 text-xs ${
            stat.trend === 'up' ? 'text-teal-600 dark:text-teal-400' :
            stat.trend === 'down' ? 'text-red-600 dark:text-red-400' :
            'text-blue-600 dark:text-blue-400'
          }`}>
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}
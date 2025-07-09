'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Bookmark, 
  Calendar, 
  Star, 
  Bell, 
  MessageSquare, 
  Heart, 
  CreditCard, 
  Settings,
  User
} from 'lucide-react';

const navItems = [
  { name: "Dashboard", icon: Home, href: "/user-dashboard" },
  { name: "My Bookings", icon: Bookmark, href: "/user-dashboard/bookings" },
  { name: "Calendar", icon: Calendar, href: "/user-dashboard/calendar" },
  { name: "My Reviews", icon: Star, href: "/user-dashboard/reviews" },
  { name: "Notifications", icon: Bell, href: "/user-dashboard/notifications" },
  { name: "Messages", icon: MessageSquare, href: "/user-dashboard/messages" },
  { name: "Favorites", icon: Heart, href: "/user-dashboard/favorites" },
  { name: "Payments", icon: CreditCard, href: "/user-dashboard/payments" },
  { name: "Settings", icon: Settings, href: "/user-dashboard/settings" },
  { name: "Profile", icon: User, href: "/user-dashboard/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-teal-600 dark:text-teal-400">
            TravelGuide
          </h1>
        </div>
        <div className="flex flex-col flex-grow p-4 overflow-y-auto">
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-teal-50 text-teal-700 dark:bg-gray-700 dark:text-teal-400'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
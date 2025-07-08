import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiCalendar,
  FiMap,
  FiUsers,
  FiSettings,
  FiPieChart,
  FiFileText,
  FiBriefcase,
} from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: <FiHome className="w-5 h-5" />,
    },
    {
      name: "Events",
      href: "/admin/events",
      icon: <FiCalendar className="w-5 h-5" />,
    },
    {
      name: "Travel Programs",
      href: "/admin/travel",
      icon: <FiMap className="w-5 h-5" />,
    },
    {
      name: "Bookings",
      href: "/admin/bookings",
      icon: <FiFileText className="w-5 h-5" />,
    },
    {
      name: "Customers",
      href: "/admin/customers",
      icon: <FiUsers className="w-5 h-5" />,
    },
    {
      name: "Reports",
      href: "/admin/reports",
      icon: <FiPieChart className="w-5 h-5" />,
    },
    {
      name: "Staff",
      href: "/admin/staff",
      icon: <FiBriefcase className="w-5 h-5" />,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: <FiSettings className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex flex-shrink-0"> {/* Removed hidden lg:flex */}
      <div className="flex w-64 flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-800 bg-black"> {/* Changed bg-white to bg-black */}
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <h1 className="text-xl font-bold text-white">Admin Panel</h1> {/* Text white */}
            </div>
            <nav className="mt-5 flex-1 space-y-1 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                    pathname === item.href
                      ? "bg-gray-900 text-white" // Darker gray for active item
                      : "text-gray-300 hover:bg-gray-800 hover:text-white" // Lighter gray for inactive
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-800 p-4"> {/* Darker border */}
            <div className="flex items-center">
              <div>
                <div className="text-sm font-medium text-white">Admin User</div> {/* Text white */}
                <div className="text-xs text-gray-400">admin@example.com</div> {/* Lighter gray */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { FiDollarSign, FiUsers, FiCalendar, FiMap } from "react-icons/fi";

const stats = [
  {
    name: "Total Revenue",
    value: "$12,345",
    change: "+12%",
    changeType: "positive",
    icon: FiDollarSign,
  },
  {
    name: "Total Bookings",
    value: "134",
    change: "+8%",
    changeType: "positive",
    icon: FiCalendar,
  },
  {
    name: "Active Customers",
    value: "89",
    change: "+5%",
    changeType: "positive",
    icon: FiUsers,
  },
  {
    name: "Active Programs",
    value: "15",
    change: "-2%",
    changeType: "negative",
    icon: FiMap,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
        >
          <div className="flex items-center">
            <div className="rounded-md bg-amber-50 p-3">
              <stat.icon className="h-6 w-6 text-amber-600" />
            </div>
            <div className="ml-4">
              <dt className="text-sm font-medium text-gray-500 truncate">
                {stat.name}
              </dt>
              <dd className="mt-1 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-medium ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </p>
              </dd>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
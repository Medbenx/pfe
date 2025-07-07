
import DashboardStats from "./DashboardStats";
import PopularPrograms from "./PopularPrograms";
import RecentBookings from "./RecentBookings";
import UpcomingEvents from "./UpcomingEvents";


export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-gray-600">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentBookings />
        <UpcomingEvents />
      </div>

      <PopularPrograms />
    </div>
  );
}
import StatsCards from "./components/StatsCards";
import RecentActivity from "./components/RecentActivity";
import TourCalendar from "./components/TourCalendar";

export default function GuideDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        Dashboard Overview
      </h1>
      
      {/* Imported StatsCards component */}
      <StatsCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div className="lg:col-span-1">
          <TourCalendar />
        </div>
      </div>
    </div>
  );
}
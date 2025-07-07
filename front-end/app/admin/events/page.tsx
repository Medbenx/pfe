import EventTable from "@/app/components/admin/EventTable";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events Management</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage all events and happenings
          </p>
        </div>
        <Link href="/admin/events/new">
          <Button>Add New Event</Button>
        </Link>
      </div>

      <EventTable />
    </div>
  );
}
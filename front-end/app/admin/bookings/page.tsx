import { BookingsTable } from "@/app/components/admin/BookingsTable";

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Bookings Management</h1>
        <p className="mt-1 text-sm text-gray-600">
          View and manage all customer bookings
        </p>
      </div>

      <BookingsTable />
    </div>
  );
}
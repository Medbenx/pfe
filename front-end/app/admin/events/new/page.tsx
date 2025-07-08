import EventForm from "@/app/components/admin/EventForm";

export default function NewEventPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Create New Event</h1>
        <p className="mt-1 text-sm text-gray-600">
          Fill in the details below to create a new event
        </p>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <EventForm />
      </div>
    </div>
  );
}
import { FiMapPin, FiClock, FiUsers } from "react-icons/fi";

export default function UpcomingEvents() {
  const events = [
    {
      id: "EV-1001",
      title: "Gnaoua World Music Festival",
      date: "June 27-29, 2024",
      location: "Essaouira",
      attendees: 124,
      status: "upcoming",
    },
    {
      id: "EV-1002",
      title: "Marrakech Film Festival",
      date: "Nov 29 - Dec 7, 2024",
      location: "Marrakech",
      attendees: 89,
      status: "upcoming",
    },
    {
      id: "EV-1003",
      title: "Rose Festival",
      date: "May 10-12, 2024",
      location: "Kelaat M'Gouna",
      attendees: 56,
      status: "ongoing",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "ongoing":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
        <button className="text-sm text-amber-600 hover:text-amber-700">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-3 border rounded-lg hover:bg-gray-50"
          >
            <h3 className="font-medium text-gray-900 mb-1">{event.title}</h3>
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
              <span className="flex items-center">
                <FiClock className="mr-1 w-3 h-3" />
                {event.date}
              </span>
              <span className="flex items-center">
                <FiMapPin className="mr-1 w-3 h-3" />
                {event.location}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center text-sm text-gray-500">
                <FiUsers className="mr-1 w-3 h-3" />
                {event.attendees} attendees
              </span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                  event.status
                )}`}
              >
                {event.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
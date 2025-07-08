import { FiCalendar, FiUser } from "react-icons/fi";

export default function RecentBookings() {
  const bookings = [
    {
      id: "BK-1001",
      customer: "John Doe",
      type: "Event",
      item: "Gnaoua Festival",
      date: "2024-06-15",
      amount: "$120",
      status: "confirmed",
    },
    {
      id: "BK-1002",
      customer: "Sarah Smith",
      type: "Travel",
      item: "Desert Adventure",
      date: "2024-06-18",
      amount: "$350",
      status: "pending",
    },
    {
      id: "BK-1003",
      customer: "Michael Johnson",
      type: "Event",
      item: "Film Festival",
      date: "2024-06-20",
      amount: "$85",
      status: "confirmed",
    },
    {
      id: "BK-1004",
      customer: "Emily Wilson",
      type: "Travel",
      item: "Mountain Trek",
      date: "2024-06-22",
      amount: "$275",
      status: "cancelled",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
        <button className="text-sm text-amber-600 hover:text-amber-700">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-amber-50 text-amber-600">
                <FiCalendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{booking.item}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <FiUser className="mr-1 w-3 h-3" />
                  {booking.customer}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">{booking.amount}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                  booking.status
                )}`}
              >
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
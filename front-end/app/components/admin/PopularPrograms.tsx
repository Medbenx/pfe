import { FiStar, FiMap, FiUsers, FiDollarSign } from "react-icons/fi";

export default function PopularPrograms() {
  const programs = [
    {
      id: "TP-1001",
      title: "Desert Adventure",
      location: "Sahara Desert",
      bookings: 42,
      revenue: "$12,600",
      rating: 4.8,
    },
    {
      id: "TP-1002",
      title: "Mountain Trek",
      location: "Atlas Mountains",
      bookings: 35,
      revenue: "$9,450",
      rating: 4.7,
    },
    {
      id: "TP-1003",
      title: "Coastal Explorer",
      location: "Essaouira",
      bookings: 28,
      revenue: "$7,560",
      rating: 4.9,
    },
  ];

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Popular Travel Programs
        </h2>
        <button className="text-sm text-amber-600 hover:text-amber-700">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {programs.map((program) => (
          <div
            key={program.id}
            className="p-3 border rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{program.title}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <FiMap className="mr-1 w-3 h-3" />
                  {program.location}
                </p>
              </div>
              <div className="flex items-center bg-amber-50 text-amber-600 px-2 py-1 rounded-full text-xs">
                <FiStar className="mr-1 w-3 h-3" />
                {program.rating}
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 text-sm">
              <span className="flex items-center text-gray-500">
                <FiUsers className="mr-1 w-3 h-3" />
                {program.bookings} bookings
              </span>
              <span className="flex items-center font-medium">
                <FiDollarSign className="mr-1 w-3 h-3" />
                {program.revenue}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
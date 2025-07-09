"use client";
import { useState } from 'react';
import { FiHome, FiCalendar, FiUser, FiSettings, FiHeart, FiMapPin, FiBell } from 'react-icons/fi';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [notifications] = useState([
    { id: 1, text: "Your trip to Marrakech is confirmed", time: "2 hours ago", read: false },
    { id: 2, text: "Special offer: 20% off Sahara Desert tours", time: "1 day ago", read: true }
  ]);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <div className="w-20 md:w-64 bg-white shadow-md flex flex-col items-center md:items-start p-4">
        <div className="mb-10 mt-4 flex items-center">
          <FiMapPin className="text-2xl text-amber-600" />
          <span className="hidden md:block ml-2 text-xl font-bold text-amber-800">MoroccoTrips</span>
        </div>
        
        <nav className="flex-1 w-full">
          {[
            { icon: <FiHome />, label: "Home", id: "home" },
            { icon: <FiCalendar />, label: "Bookings", id: "bookings" },
            { icon: <FiHeart />, label: "Wishlist", id: "wishlist" },
            { icon: <FiUser />, label: "Profile", id: "profile" },
            { icon: <FiSettings />, label: "Settings", id: "settings" }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center w-full p-3 mb-2 rounded-lg transition-all ${activeTab === item.id ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-100'}`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden md:block ml-3">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="mt-auto mb-4 hidden md:block">
          <div className="flex items-center p-3">
            <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
              <span className="text-amber-700 font-medium">AK</span>
            </div>
            <div className="ml-3">
              <p className="font-medium">Ahmed Khalid</p>
              <p className="text-xs text-gray-500">Premium Member</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-amber-900">Welcome back, Ahmed</h1>
          <div className="relative">
            <FiBell className="text-2xl text-gray-600" />
            {notifications.some(n => !n.read) && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            )}
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Upcoming Trips", value: 2, color: "bg-blue-100 text-blue-700" },
            { title: "Saved Hotels", value: 5, color: "bg-purple-100 text-purple-700" },
            { title: "Wishlist", value: 7, color: "bg-green-100 text-green-700" },
            { title: "Loyalty Points", value: 1240, color: "bg-amber-100 text-amber-700" }
          ].map((stat, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-sm ${stat.color} transition-transform hover:scale-[1.02]`}>
              <h3 className="text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <button className="text-sm text-amber-600 hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { action: "Booked", item: "3-night stay in Chefchaouen", date: "Today", icon: "🏨" },
              { action: "Saved", item: "Atlas Mountain Trekking Tour", date: "Yesterday", icon: "⛰️" },
              { action: "Reviewed", item: "Riad Dar Anika in Marrakech", date: "2 days ago", icon: "⭐" }
            ].map((activity, index) => (
              <div key={index} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-2xl mr-3">{activity.icon}</span>
                <div className="flex-1">
                  <p className="font-medium">{activity.action}: {activity.item}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Destinations */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recommended for You</h2>
            <button className="text-sm text-amber-600 hover:underline">See More</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sahara Desert", location: "Merzouga", price: "$120", image: "desert" },
              { name: "Blue Pearl", location: "Chefchaouen", price: "$85", image: "blue-city" },
              { name: "Majorelle Garden", location: "Marrakech", price: "$15", image: "garden" }
            ].map((destination, index) => (
              <div key={index} className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className={`h-48 bg-${destination.image}-500 relative`}>
                  {/* Placeholder for image - would be replaced with actual image */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4`}>
                    <div>
                      <h3 className="text-white font-bold text-xl">{destination.name}</h3>
                      <p className="text-white/90">{destination.location}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <span className="font-medium text-gray-900">{destination.price} <span className="text-gray-500 text-sm">/ night</span></span>
                  <button className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm hover:bg-amber-200 transition-colors">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
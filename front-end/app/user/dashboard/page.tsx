'use client';
import { useState } from 'react';
import { FiUser, FiSettings, FiBell, FiCalendar, FiPieChart, FiCreditCard, FiHelpCircle } from 'react-icons/fi';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Your order has been shipped', time: '2 hours ago', read: false },
    { id: 2, text: 'New message from support', time: '1 day ago', read: true },
    { id: 3, text: 'Payment received', time: '3 days ago', read: true },
  ]);

  const recentActivities = [
    { id: 1, action: 'Logged in', time: 'Just now', icon: <FiUser /> },
    { id: 2, action: 'Updated profile', time: '30 minutes ago', icon: <FiSettings /> },
    { id: 3, action: 'Placed order #12345', time: '2 hours ago', icon: <FiCreditCard /> },
  ];

  const stats = [
    { title: 'Total Orders', value: 24, change: '+12%', trend: 'up' },
    { title: 'Account Balance', value: '$1,250', change: '+5%', trend: 'up' },
    { title: 'Pending Tasks', value: 3, change: '-2', trend: 'down' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-indigo-600">Dashboard</h1>
        </div>
        <nav className="mt-6">
          <div 
            className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'dashboard' ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <FiPieChart className="mr-3" />
            <span>Dashboard</span>
          </div>
          <div 
            className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'profile' ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('profile')}
          >
            <FiUser className="mr-3" />
            <span>Profile</span>
          </div>
          <div 
            className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'settings' ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('settings')}
          >
            <FiSettings className="mr-3" />
            <span>Settings</span>
          </div>
          <div 
            className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'billing' ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('billing')}
          >
            <FiCreditCard className="mr-3" />
            <span>Billing</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome back, User!</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FiBell className="text-2xl text-gray-600 cursor-pointer" />
              {notifications.some(n => !n.read) && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <FiUser className="text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${stat.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
            <button className="text-indigo-600 text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mr-4">
                  {activity.icon}
                </div>
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-gray-500 text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <button className="text-indigo-600 text-sm">Mark All as Read</button>
          </div>
          <div className="space-y-4">
            {notifications.map(notification => (
              <div 
                key={notification.id} 
                className={`p-4 rounded-lg ${notification.read ? 'bg-white' : 'bg-indigo-50'}`}
              >
                <div className="flex justify-between">
                  <p className={`${notification.read ? 'text-gray-600' : 'font-medium'}`}>
                    {notification.text}
                  </p>
                  {!notification.read && (
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  )}
                </div>
                <p className="text-gray-500 text-sm mt-1">{notification.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
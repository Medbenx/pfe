"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showDepromote, setShowDepromote] = useState(false); // ل
  const [depromoteEmail, setDepromoteEmail] = useState("");  // 
  const [depromoteStatus, setDepromoteStatus] = useState<any>(null); //

  

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedRole = localStorage.getItem("role");

    if (storedUser && storedRole === "admin") {
      setUser(JSON.parse(storedUser));
      setIsAdmin(true);

      axios
        .get("http://localhost:8000/api/admin/stats", { withCredentials: true })
        .then((res) => setStats(res.data))
        .catch(() => setError("Failed to load statistics"))
        .finally(() => setLoading(false));
    } else {
      setIsAdmin(false);
      setLoading(false);
    }
  }, []);
  const handleDepromoteAdmin = () => {
  if (!depromoteEmail.trim()) {
    setDepromoteStatus({
      success: false,
      message: "Please enter a valid email.",
    });
    return;
  }

  axios
    .post(
      "http://localhost:8000/api/admin/depromote",
      { email: depromoteEmail },
      { withCredentials: true }
    )
    .then(() => {
      setDepromoteStatus({
        success: true,
        message: `${depromoteEmail} is no longer an admin.`,
      });
      setDepromoteEmail("");
      setTimeout(() => setShowDepromote(false), 2000);
    })
    .catch((err) => {
      setDepromoteStatus({
        success: false,
        message: err.response?.data?.message || "Failed to depromote admin.",
      });
    });
};


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="text-white text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
          <p className="mt-4">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="text-center p-8 bg-gray-800/90 rounded-xl border border-gray-700 shadow-2xl">
          <p className="text-2xl font-bold text-red-400 mb-4">⛔ Access Denied</p>
          <p className="text-gray-300">You are not authorized to view this page</p>
          <Link
            href="/admin/login"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="text-center p-8 bg-gray-800/90 rounded-xl border border-gray-700 shadow-2xl">
          <p className="text-red-400 text-xl">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Spacer for navbar */}
      <div className="h-16"></div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome section */}
        <div className="relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20"></div>
          <div className="relative bg-gray-800/80 border border-gray-700 rounded-lg p-6 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              👋 Welcome back, <span className="text-blue-400">{user?.name}</span>!
            </h1>
            <p className="text-gray-400">Here's what's happening with your platform today</p>
          </div>
        </div>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Users Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-gray-800/80 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 h-full">
              <h2 className="text-xl font-semibold mb-3 text-blue-400">Users</h2>
              <p className="text-4xl font-bold">{stats?.usersCount || 0}</p>
              <p className="text-gray-400 mt-2">Total registered users</p>
            </div>
          </div>

          {/* Guides Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-gray-800/80 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 h-full">
              <h2 className="text-xl font-semibold mb-3 text-purple-400">Tourist Guides</h2>
              <p className="text-4xl font-bold">{stats?.guidesCount || 0}</p>
              <p className="text-gray-400 mt-2">Active guides in system</p>
            </div>
          </div>

          {/* Messages Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-gray-800/80 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition-all duration-300 h-full">
              <h2 className="text-xl font-semibold mb-3 text-green-400">Messages</h2>
              <p className="text-4xl font-bold">{stats?.messagesCount || 0}</p>
              <p className="text-gray-400 mt-2">Customer inquiries</p>
            </div>
          </div>

          {/* Newsletter Subscribers Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-gray-800/80 border border-gray-700 rounded-lg p-6 hover:border-amber-500 transition-all duration-300 h-full">
              <h2 className="text-xl font-semibold mb-3 text-amber-400">Newsletter Subscribers</h2>
              <p className="text-4xl font-bold">{stats?.newslettersCount || 0}</p>
              <p className="text-gray-400 mt-2"> newsletter subscribers</p>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="flex flex-wrap gap-4">
          <Link
            href="/admin/users"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            👤 Manage Users
          </Link>

          <Link
            href="/admin/guides"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            🧭 Manage Guides
          </Link>

          <Link
            href="/admin/dashboard/messages"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            💬 Contact Messages
          </Link>

          <Link
            href="/admin/dashboard/newsletter"
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            📧 Newsletter Subscribers
          </Link>
          <Link
  href="/admin/dashboard/create-admin"
  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
>
  ➕ Create Admin
</Link>
<button
  onClick={() => setShowDepromote(!showDepromote)}
  className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
>
  {showDepromote ? "Cancel Depromote" : "🧹 Depromote Admin"}
</button>
{showDepromote && (
  <div className="mt-6 bg-gray-800/50 border border-gray-700 rounded-lg p-6 w-full">
    <h2 className="text-xl font-semibold mb-4 text-pink-400">Depromote Admin</h2>
    <div className="flex gap-4">
      <input
        type="email"
        value={depromoteEmail}
        onChange={(e) => setDepromoteEmail(e.target.value)}
        placeholder="Enter admin's email"
        className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        onClick={handleDepromoteAdmin}
        className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all"
      >
        Remove Admin Rights
      </button>
    </div>
    {depromoteStatus && (
      <p
        className={`mt-2 text-sm ${
          depromoteStatus.success ? "text-green-400" : "text-red-400"
        }`}
      >
        {depromoteStatus.message}
      </p>
    )}
  </div>
)}


        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
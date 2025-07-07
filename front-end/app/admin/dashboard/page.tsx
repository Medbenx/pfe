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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedRole = localStorage.getItem("role");

    if (storedUser && storedRole === "admin") {
      setUser(JSON.parse(storedUser));
      setIsAdmin(true);

      // جلب الإحصائيات من API
      
      axios
        .get("http://localhost:8000/api/stats", 
          { withCredentials: true })
        .then((res) => setStats(res.data))
        .catch(() => setError("Failed to load statistics"))
        .finally(() => setLoading(false));
    } else {
      setIsAdmin(false);
      setLoading(false);
    }
  }, []);

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl text-red-500">⛔ Access Denied: You are not an admin</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">👋 Hello Admin, {user?.name}!</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p>Total Users: {stats?.usersCount}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Tourist Guides</h2>
          <p>Total Guides: {stats?.guidesCount}</p>
        
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Messages</h2>
          <p>Total Messages: {stats?.messagesCount}</p>

        </div>
      </section>

      <section className="space-x-4">
        <Link href="/admin/users" className="btn-primary">
          Manage Users
        </Link>
        <Link href="/admin/guides" className="btn-primary">
          Manage Guides
        </Link>
        <Link href="/admin/messages" className="btn-primary">
          Manage Messages
        </Link>
      </section>
    </div>
  );
};

export default AdminDashboard;

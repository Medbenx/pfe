"use client";

import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedRole = localStorage.getItem("role");

    if (storedUser && storedRole === "admin") {
      setUser(JSON.parse(storedUser));
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      {isAdmin ? (
        <h1 className="text-3xl font-bold">👋 Hello Admin, {user?.name}!</h1>
      ) : (
        <p className="text-xl text-red-500">⛔ Access Denied: You are not an admin</p>
      )}
    </div>
  );
};

export default AdminDashboard;

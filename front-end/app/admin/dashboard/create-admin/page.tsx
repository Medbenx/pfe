"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateAdmin = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus({ success: false, message: "Please enter a valid email." });
      return;
    }

    try {
      await axios.post(
        "http://localhost:8000/api/admin/promote",
        { email },
        { withCredentials: true }
      );
      setStatus({ success: true, message: `${email} promoted to admin successfully.` });
      setEmail("");
      // Optionally, redirect or update UI after success
      // router.push('/admin/dashboard');
    } catch (error: any) {
      setStatus({
        success: false,
        message: error.response?.data?.message || "Failed to promote user.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-4">
      <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-8 w-full max-w-md shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-indigo-400">Promote User to Admin</h1>
        {status && (
          <div
            className={`mb-4 p-3 rounded ${
              status.success ? "bg-green-900/60 border border-green-500" : "bg-red-900/60 border border-red-500"
            }`}
          >
            {status.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="User email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded transition"
          >
            Promote to Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAdmin;

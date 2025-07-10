"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
  updated_at: string;
};

const MessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    axios.get("http://localhost:8000/api/admin/messages", { 
      withCredentials: true 
    })
    .then(res => setMessages(res.data))
    .catch(err => console.error("Failed to fetch messages", err));
  };

  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    axios.delete(`http://localhost:8000/api/admin/messages/${id}`, {
      withCredentials: true
    })
    .then(() => {
      setMessages(prev => prev.filter(msg => msg.id !== id));
    })
    .catch(err => {
      alert("Failed to delete message");
      console.error(err);
    });
  };

  const handleExportCSV = () => {
    window.open(
      "http://localhost:8000/api/admin/messages/export-csv", 
      "_blank"
    );
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString();
  };

  return (
    <div className="mt-20 p-6 bg-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <span className="text-green-400">📩</span>
              Contact Messages
            </h1>
            <p className="text-gray-400 mt-1">
              {messages.length} total messages
            </p>
          </div>
          <button
            onClick={handleExportCSV}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition flex items-center gap-2"
          >
            <span>📄</span> Export CSV
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Message</th>
                  <th className="p-4 text-left">Sent At</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr 
                    key={msg.id}
                    className="border-t border-gray-700 hover:bg-gray-750 transition"
                  >
                    <td className="p-4">{msg.id}</td>
                    <td className="p-4 font-medium">{msg.name}</td>
                    <td className="p-4 text-blue-400">{msg.email}</td>
                    <td className="p-4 max-w-xs truncate hover:max-w-none">
                      {msg.message}
                    </td>
                    <td className="p-4">{formatDate(msg.created_at)}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {messages.length === 0 && (
            <div className="p-8 text-center text-gray-400">
              No messages found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
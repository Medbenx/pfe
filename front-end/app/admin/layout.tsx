// app/admin/layout.tsx

import { ReactNode } from "react";
import AdminHeader from "../components/admin/AdminHeader";
import Sidebar from "../components/admin/Sidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <AdminHeader />
        <main className="p-4 md:p-6 pt-20">{children}</main>
      </div>
    </div>
  );
}

import { TravelProgramTable } from "@/app/components/admin/TravelProgramTable";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function TravelProgramsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Travel Programs</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage all travel programs and packages
          </p>
        </div>
        <Link href="/admin/travel/new">
          <Button>Add New Program</Button>
        </Link>
      </div>

      <TravelProgramTable />
    </div>
  );
}
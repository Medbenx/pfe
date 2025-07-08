"use client";

import {
  FiEdit,
  FiTrash2,
  FiEye,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";

type Event = {
  id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  status: "active" | "draft" | "archived";
  bookings: number;
};

const data: Event[] = [
  {
    id: "1",
    title: "Gnaoua World Music Festival",
    type: "Music",
    date: "June 27-29, 2024",
    location: "Essaouira",
    status: "active",
    bookings: 124,
  },
  {
    id: "2",
    title: "Marrakech International Film Festival",
    type: "Film",
    date: "Nov 29 - Dec 7, 2024",
    location: "Marrakech",
    status: "active",
    bookings: 89,
  },
  {
    id: "3",
    title: "Tan-Tan Moussem",
    type: "Cultural",
    date: "May 15-20, 2024",
    location: "Tan-Tan",
    status: "active",
    bookings: 67,
  },
  {
    id: "4",
    title: "Fes Festival of World Sacred Music",
    type: "Music",
    date: "June 7-15, 2024",
    location: "Fes",
    status: "active",
    bookings: 112,
  },
  {
    id: "5",
    title: "Rose Festival",
    type: "Cultural",
    date: "May 10-12, 2024",
    location: "Kelaat M'Gouna",
    status: "active",
    bookings: 56,
  },
  {
    id: "6",
    title: "Marathon des Sables",
    type: "Sports",
    date: "April 12-22, 2024",
    location: "Sahara Desert",
    status: "active",
    bookings: 42,
  },
];

const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "title",
    header: "Event Title",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            status === "active"
              ? "bg-green-100 text-green-800"
              : status === "draft"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {String(status).charAt(0).toUpperCase() + String(status).slice(1)}
        </span>
      );
    },
  },
  {
    accessorKey: "bookings",
    header: "Bookings",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const event = row.original;

      return (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="h-8">
            <FiEye className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            <FiEdit className="h-4 w-4" />
          </Button>
          <Button variant="destructive" size="sm" className="h-8">
            <FiTrash2 className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
];

export default function EventTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end space-x-2 p-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <FiChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <FiChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <FiChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <FiChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
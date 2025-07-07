// components/admin/BookingsTable.tsx
"use client";

import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
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
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreHorizontal, ArrowUpDown, Search } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { format } from "date-fns";

export type Booking = {
  id: string;
  customerName: string;
  email: string;
  programTitle: string;
  bookingDate: string;
  travelDate: string;
  status: "confirmed" | "pending" | "cancelled" | "completed";
  totalAmount: number;
  paymentMethod: string;
};

const data: Booking[] = [
  {
    id: "BK-001",
    customerName: "John Smith",
    email: "john.smith@example.com",
    programTitle: "Summer in Bali",
    bookingDate: "2023-05-10",
    travelDate: "2023-07-15",
    status: "confirmed",
    totalAmount: 1200,
    paymentMethod: "Credit Card",
  },
  {
    id: "BK-002",
    customerName: "Sarah Johnson",
    email: "sarah.j@example.com",
    programTitle: "European Adventure",
    bookingDate: "2023-04-05",
    travelDate: "2023-08-20",
    status: "pending",
    totalAmount: 2500,
    paymentMethod: "PayPal",
  },
  {
    id: "BK-003",
    customerName: "Michael Brown",
    email: "michael.b@example.com",
    programTitle: "Japan Cherry Blossom",
    bookingDate: "2023-06-18",
    travelDate: "2023-09-05",
    status: "completed",
    totalAmount: 1800,
    paymentMethod: "Bank Transfer",
  },
  {
    id: "BK-004",
    customerName: "Emily Davis",
    email: "emily.d@example.com",
    programTitle: "Summer in Bali",
    bookingDate: "2023-05-22",
    travelDate: "2023-07-30",
    status: "cancelled",
    totalAmount: 1200,
    paymentMethod: "Credit Card",
  },
];

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "id",
    header: "Booking ID",
    cell: ({ row }) => (
      <Link
        href={`/admin/bookings/${row.original.id}`}
        className="font-medium hover:underline"
      >
        {row.getValue("id")}
      </Link>
    ),
  },
  {
    accessorKey: "customerName",
    header: "Customer",
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.getValue("customerName")}</div>
        <div className="text-sm text-muted-foreground">
          {row.original.email}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "programTitle",
    header: "Program",
  },
  {
    accessorKey: "bookingDate",
    header: "Booking Date",
    cell: ({ row }) => format(new Date(row.getValue("bookingDate")), "MMM dd, yyyy"),
  },
  {
    accessorKey: "travelDate",
    header: "Travel Date",
    cell: ({ row }) => format(new Date(row.getValue("travelDate")), "MMM dd, yyyy"),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const variant = {
        confirmed: "default",
        pending: "secondary",
        cancelled: "destructive",
        completed: "success",
      }[status];

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    accessorKey: "totalAmount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const booking = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/admin/bookings/${booking.id}`}>View Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Send Confirmation</DropdownMenuItem>
            <DropdownMenuItem>Update Status</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Cancel Booking
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function BookingsTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search bookings..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="pl-8"
          />
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Export</Button>
          <Button>Create Booking</Button>
        </div>
      </div>

      <div className="rounded-md border">
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No bookings found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {table.getRowModel().rows.length} of {data.length} bookings
        </div>
        <div className="flex items-center justify-end space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
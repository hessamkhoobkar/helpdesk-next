"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import type { Ticket } from "@prisma/client";
import { useRouter } from "next/navigation";

const columns = [
  {
    key: "subject",
    label: "subject",
  },
  {
    key: "createdAt",
    label: "createdAt",
  },
  {
    key: "updatedAt",
    label: "updatedAt",
  },
  {
    key: "status",
    label: "status",
  },
  {
    key: "priority",
    label: "priority",
  },
];

// todo: limit subject to 50 characters
// todo: format createdAt and updatedAt to be more human readable
// todo: format status and priority to be more human readable (e.g. "open" instead of "OPEN")
// todo: Convert status and priority to be a badge instead of text
// todo: add pagination MAYBE
// todo: add sorting MAYBE
// todo: Rethink the structure of this component. It's a bit messy. and how

export default function TicketList({ tickets }: { tickets: Ticket[] }) {
  const router = useRouter();

  const handleTicketClick = (ticketId: number | string | bigint) => {
    console.log("ticketId", ticketId);

    router.push(`/tickets/${ticketId}`);
  };

  return (
    <Table
      aria-label="Example static collection table"
      selectionMode="single"
      selectionBehavior="toggle"
      onRowAction={(key) => handleTicketClick(key)}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      {tickets.length > 0 ? (
        <TableBody items={tickets}>
          {(item) => (
            <TableRow className="cursor-pointer" key={item.id}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      ) : (
        <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
      )}
    </Table>
  );
}

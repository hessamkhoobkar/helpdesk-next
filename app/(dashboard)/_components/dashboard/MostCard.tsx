"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import DashboardCard from "./DashboardCard";
import { Ticket, User } from "@prisma/client";

interface TableUser {
  id: string;
  name: string;
  role: string;
  ticketCount: number;
}

type ExtendedTicket = Ticket & { User: User };

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "ticketCount",
    label: "ticketCount",
  },
];

export default function MostCard({ tickets }: { tickets: ExtendedTicket[] }) {
  let users: TableUser[] = [];

  tickets.forEach((ticket) => {
    const isFound = users.some((user) => {
      if (user.id === ticket.userId) {
        return true;
      }

      return false;
    });

    if (isFound) {
      return;
    }

    users.push({
      id: ticket.userId,

      name: ticket.User.first_name + " " + ticket.User.last_name,
      role: ticket.User.role,
      ticketCount: 0,
    });
  });

  tickets.forEach((ticket) => {
    users.forEach((user) => {
      if (user.id === ticket.userId) {
        user.ticketCount++;
      }
    });
  });

  const rows = users.sort((a, b) => b.ticketCount - a.ticketCount).slice(0, 5);

  return (
    <DashboardCard title="Your tickets created mostly by">
      <Table
        hideHeader
        removeWrapper
        aria-label="Example table with dynamic content"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </DashboardCard>
  );
}

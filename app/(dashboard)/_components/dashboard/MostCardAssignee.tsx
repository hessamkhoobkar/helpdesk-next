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

type ExtendedTicket = Ticket & { assignee: User };

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

export default function MostCardAssignee({
  tickets,
}: {
  tickets: ExtendedTicket[];
}) {
  const assigneesObj: {
    [key: string]: {
      id: string;
      name: string;
      role: string;
      ticketCount: number;
    };
  } = {};

  tickets.forEach((ticket) => {
    if (!ticket.assignee) {
      return;
    }

    if (!assigneesObj[ticket.assignee.id]) {
      assigneesObj[ticket.assignee.id] = {
        id: ticket.assignee.id,
        name: ticket.assignee.first_name + " " + ticket.assignee.last_name,
        role: ticket.assignee.role,
        ticketCount: 1,
      };
    }

    assigneesObj[ticket.assignee.id].ticketCount++;
  });

  const assignees = Object.values(assigneesObj)
    .sort((a, b) => b.ticketCount - a.ticketCount)
    .slice(0, 5);

  return (
    <DashboardCard title="Your tickets answered mostly by">
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
        <TableBody items={assignees}>
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

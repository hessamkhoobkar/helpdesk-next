"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
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
import { Ticket } from "@prisma/client";
import DateParser from "../utils/DateParser";
import Link from "next/link";
import PriorityChip from "../../tickets/_components/PriorityChip";
import { StatInProgress } from "@/app/_assets/icons/progress/InProgress";
import StatusChip from "../../tickets/_components/StatusChip";

const columns = [
  {
    key: "subject",
    label: "Subject",
  },
  {
    key: "createdAt",
    label: "Created at",
  },
  {
    key: "priority",
    label: "Priority",
  },
  {
    key: "status",
    label: "Status",
  },
];

export default function LatestCard({ tickets }: { tickets: Ticket[] }) {
  const rows = tickets.slice(0, 5).map((ticket) => {
    return {
      key: ticket.id,
      subject: ticket.subject,
      createdAt: ticket.createdAt,
      priority: ticket.priority,
      status: ticket.status,
    };
  });

  return (
    <DashboardCard title="Last five tickets">
      <Table removeWrapper aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) =>
                columnKey === "subject" ? (
                  <TableCell>
                    <Link
                      className="w-full h-full block text-primary hover:underline hover:text-primary-600 dark:text-primary-600 dark:hover:text-primary-700 transition-all duration-200 ease-in-out"
                      href={`/tickets/${item.key}`}
                    >
                      {getKeyValue(item, columnKey)}
                    </Link>
                  </TableCell>
                ) : columnKey === "createdAt" ? (
                  <TableCell>
                    <DateParser date={item.createdAt} />
                  </TableCell>
                ) : columnKey === "createdAt" ? (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                ) : columnKey === "priority" ? (
                  <TableCell>
                    <PriorityChip priority={item.priority} />
                  </TableCell>
                ) : (
                  <TableCell>
                    <StatusChip status={item.status} />
                  </TableCell>
                )
              }
            </TableRow>
          )}
        </TableBody>
      </Table>
    </DashboardCard>
  );
}

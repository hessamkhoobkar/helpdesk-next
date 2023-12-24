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

const rows = [
  {
    key: "1",
    subject: "Software Installation Error",
    createdAt: "Tuesday, Sep 21, 2021",
    priority: "Medium",
  },
  {
    key: "2",
    subject: "Missing Files in Shared Drive",
    createdAt: "Monday, Aug 26, 2019",
    priority: "High",
  },
  {
    key: "3",
    subject: "Outlook Calendar Sync Issue",
    createdAt: "Saturday, Mar 23, 2019",
    priority: "High",
  },
  {
    key: "4",
    subject: "Browser Compatibility Issue",
    createdAt: "Sunday, Jun 27, 2021",
    priority: "Low",
  },
  {
    key: "5",
    subject: "Unable to Access Email Account",
    createdAt: "Friday, Jul 19, 2019",
    priority: "Low",
  },
];

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
];

export default function LatestCard() {
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

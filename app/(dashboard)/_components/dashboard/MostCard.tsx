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
    name: "Tony Reichert",
    role: "CEO",
    number: "8",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    number: "7",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    number: "4",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    number: "4",
  },
  {
    key: "5",
    name: "William Howard",
    role: "Community Manager",
    number: "2",
  },
];

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
    key: "number",
    label: "number",
  },
];

export default function MostCard() {
  return (
    <DashboardCard title="Your tickets created by">
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

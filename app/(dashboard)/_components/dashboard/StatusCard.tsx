"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import type { Ticket } from "@prisma/client";

export default function StatusCard({ tickets }: { tickets: Ticket[] }) {
  const totalTickets = tickets.length;
  const totalOpenTickets = tickets.filter(
    (ticket) => ticket.status === "OPEN"
  ).length;
  const totalProgressTickets = tickets.filter(
    (ticket) => ticket.status === "IN_PROGRESS"
  ).length;
  const totalCompletedTickets = tickets.filter(
    (ticket) => ticket.status === "COMPLETED"
  ).length;
  const totalClosedTickets = tickets.filter(
    (ticket) => ticket.status === "CLOSED"
  ).length;

  const openPercentage = (totalOpenTickets / totalTickets) * 100;
  const progressPercentage = (totalProgressTickets / totalTickets) * 100;
  const closedPercentage =
    ((totalCompletedTickets + totalClosedTickets) / totalTickets) * 100;

  return (
    <Card className="shadow">
      <CardHeader className="font-bold">My tickets by status</CardHeader>
      <Divider />
      <CardBody className="p-8">
        <div className="flex justify-around gap-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-5xl font-black text-danger">
              {totalOpenTickets}
            </span>
            <span className="text-xs font-bold text-default dark:text-default-600">
              Open Tickets
            </span>
          </div>
          <div className="flex flex-col justify-center text-warning items-center gap-2">
            <span className="text-5xl font-black">{totalProgressTickets}</span>
            <span className="text-xs font-bold text-default dark:text-default-600">
              In-Progress Tickets
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-5xl font-black text-primary">
              {totalCompletedTickets + totalClosedTickets}
            </span>
            <span className="text-xs font-bold text-default dark:text-default-600">
              Completed Tickets
            </span>
          </div>
        </div>
      </CardBody>
      <div className="flex h-12 gap-1">
        <div
          className="bg-danger h-full"
          style={{ width: `${openPercentage}%` }}
        ></div>
        <div
          className="bg-warning h-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        <div
          className="bg-primary h-full"
          style={{ width: `${closedPercentage}%` }}
        ></div>
      </div>
    </Card>
  );
}

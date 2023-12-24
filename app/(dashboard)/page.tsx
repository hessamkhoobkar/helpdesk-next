import axios from "axios";
import type { Ticket } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import StatusCard from "./dashboard/StatusCard";
import CategoryCard from "./dashboard/CategoryCard";
import DayCard from "./dashboard/DayCard";
import LatestCard from "./dashboard/LatestCard";
import MostCard from "./dashboard/MostCard";

export default async function Home() {
  let allTickets: Ticket[] = [];

  const session = await getServerSession(authOptions);
  // @ts-ignore // Ignoreing the error as the session type does not get updated with ID
  const cuurentUserId = session!.user!.id;

  const response = await axios.get(
    `http://localhost:3000/api/tickets?userId=${cuurentUserId}`
  );
  allTickets = response.data;

  // report card - Total
  const totalTickets = allTickets.length;
  const totalOpenTickets = allTickets.filter(
    (ticket) => ticket.status === "OPEN"
  ).length;
  const totalProgressTickets = allTickets.filter(
    (ticket) => ticket.status === "IN_PROGRESS"
  ).length;
  const totalCompletedTickets = allTickets.filter(
    (ticket) => ticket.status === "COMPLETED"
  ).length;
  const totalClosedTickets = allTickets.filter(
    (ticket) => ticket.status === "CLOSED"
  ).length;

  const openPercentage = (totalOpenTickets / totalTickets) * 100;
  const progressPercentage = (totalProgressTickets / totalTickets) * 100;
  const closedPercentage =
    ((totalCompletedTickets + totalClosedTickets) / totalTickets) * 100;

  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <StatusCard />
        </div>
        <div className="col-span-4">
          <CategoryCard />
        </div>
        <div className="col-span-4">
          <DayCard />
        </div>
        <div className="col-span-6">
          <Card className="shadow">
            <CardHeader>My Tickets by status</CardHeader>
            <Divider className="opacity-50" />
            <CardBody className="p-8">
              <div className="flex justify-around gap-4">
                <div className="flex flex-col justify-center items-center gap-2">
                  <span className="text-5xl font-black text-danger">
                    {totalOpenTickets}
                  </span>
                  <span className="text-xs font-medium text-default-400">
                    Open Tickets
                  </span>
                </div>
                <div className="flex flex-col justify-center text-default items-center gap-2">
                  <span className="text-5xl font-black">
                    {totalProgressTickets}
                  </span>
                  <span className="text-xs font-medium text-default-400">
                    In-Progress Tickets
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <span className="text-5xl font-black text-primary">
                    {totalCompletedTickets + totalClosedTickets}
                  </span>
                  <span className="text-xs font-medium text-default-400">
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
                className="bg-default h-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
              <div
                className="bg-primary h-full"
                style={{ width: `${closedPercentage}%` }}
              ></div>
            </div>
          </Card>
        </div>
        <div className="col-span-6">
          <MostCard />
        </div>
        <div className="col-span-12">
          <LatestCard />
        </div>
      </div>
    </div>
  );
}

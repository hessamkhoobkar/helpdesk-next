import axios from "axios";
import type { Ticket } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import StatusCard from "./_components/dashboard/StatusCard";
import CategoryCard from "./_components/dashboard/CategoryCard";
import DayCard from "./_components/dashboard/DayCard";
import LatestCard from "./_components/dashboard/LatestCard";
import MostCard from "./_components/dashboard/MostCard";
import PriorityCard from "./_components/dashboard/PriorityCard";

export default async function Home() {
  let allTickets: Ticket[] = [];

  const session = await getServerSession(authOptions);
  // @ts-ignore // Ignoreing the error as the session type does not get updated with ID
  const cuurentUserId = session!.user!.id;

  const response = await axios.get(
    `http://localhost:3000/api/tickets?userId=${cuurentUserId}`
  );
  allTickets = response.data;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        <div className="col-span-1 lg:col-span-4">
          <PriorityCard />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <CategoryCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <DayCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-6">
          <StatusCard tickets={allTickets} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-6">
          <MostCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-12">
          <LatestCard />
        </div>
      </div>
    </div>
  );
}

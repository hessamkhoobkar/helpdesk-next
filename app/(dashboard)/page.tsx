import axios from "axios";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";

import type { Category, Ticket, User } from "@prisma/client";

import DayCard from "./_components/dashboard/DayCard";
import MostCard from "./_components/dashboard/MostCard";
import LatestCard from "./_components/dashboard/LatestCard";
import StatusCard from "./_components/dashboard/StatusCard";
import CategoryCard from "./_components/dashboard/CategoryCard";
import PriorityCard from "./_components/dashboard/PriorityCard";
import MostCardAssignee from "./_components/dashboard/MostCardAssignee";

type ExtendedTicket = Ticket & { User: User } & { assignee: User };
interface ExtendedSession extends Session {
  user: User & { userType: string };
}

export default async function Home() {
  let tickets: ExtendedTicket[] = [];
  let categories: Category[] = [];
  let currentUserId: string;
  let currentUserType: string;

  try {
    const session: ExtendedSession | null = await getServerSession(authOptions);
    currentUserId = session?.user.id!;
    currentUserType = session?.user.userType!;
  } catch (error) {
    console.error("Error getting session:", error);
    throw new Error(`Error getting session: ${error}`);
  }

  try {
    const queryString =
      currentUserType === "CLIENT"
        ? `userId=${currentUserId}`
        : `assigneeId=${currentUserId}`;

    const response = await axios.get(
      `${process.env.BASE_URL}/api/tickets?${queryString}`
    );
    tickets = response.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw new Error(`Error fetching tickets: ${error}`);
  }

  try {
    const categoryResponse = await axios.get(
      `${process.env.BASE_URL}/api/categories`
    );
    categories = categoryResponse.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error(`Error fetching categories: ${error}`);
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        <div className="col-span-1 lg:col-span-4">
          <PriorityCard tickets={tickets} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <CategoryCard tickets={tickets} categories={categories} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <DayCard tickets={tickets} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-6">
          <StatusCard tickets={tickets} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-6">
          {currentUserType === "CLIENT" ? (
            <MostCardAssignee tickets={tickets} />
          ) : (
            <MostCard tickets={tickets} />
          )}
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-12">
          <LatestCard tickets={tickets} />
        </div>
      </div>
    </div>
  );
}

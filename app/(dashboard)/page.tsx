import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import type { Category, Ticket, User } from "@prisma/client";

import DayCard from "./_components/dashboard/DayCard";
import MostCard from "./_components/dashboard/MostCard";
import LatestCard from "./_components/dashboard/LatestCard";
import StatusCard from "./_components/dashboard/StatusCard";
import CategoryCard from "./_components/dashboard/CategoryCard";
import PriorityCard from "./_components/dashboard/PriorityCard";

type ExtendedTicket = Ticket & { User: User };

// TODO: Write and update markdown file
// TODO: Loading pages for tickets, users, single ticket view, add and edit ticket page

export default async function Home() {
  let tickets: ExtendedTicket[] = [];
  let categories: Category[] = [];
  let currentUserId: string;

  try {
    const session = await getServerSession(authOptions);
    // @ts-ignore // Ignoreing the error as the session type does not get updated with ID
    currentUserId = session.user.id;

    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/api/tickets?userId=${currentUserId}`
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
  } catch (error) {
    console.error("Error getting session:", error);
    throw new Error(`Error getting session: ${error}`);
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
          <MostCard tickets={tickets} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-12">
          <LatestCard tickets={tickets} />
        </div>
      </div>
    </div>
  );
}

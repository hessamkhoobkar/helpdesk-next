import axios from "axios";
import TicketList from "./TicketList";
import type { Ticket } from "@prisma/client";
import PageHero from "./PageHero";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// todo: handle error states and show user friendly error messages

export default async function TicketsPage() {
  let allTickets: Ticket[] = [];
  const session = await getServerSession(authOptions);
  const cuurentUserId = session?.user?.id;

  try {
    const response = await axios.get(
      `http://localhost:3000/api/tickets?userId=${cuurentUserId}`
    );
    allTickets = response.data;
  } catch (error: any) {
    if ((error as any).response) {
      // Request made but the server responded with an error
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Request made but no response is received from the server.
      console.log(error.request);
    } else {
      // Error occured while setting up the request
      console.log("Error", error.message);
    }
  }

  return (
    <>
      <PageHero />
      <div className="w-full flex flex-col justify-start items-start gap-4">
        {allTickets.length > 0 ? (
          <TicketList tickets={allTickets} />
        ) : (
          <div>No tickets found</div>
        )}
      </div>
    </>
  );
}

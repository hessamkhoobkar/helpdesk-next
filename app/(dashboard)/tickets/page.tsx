import axios from "axios";
import Link from "next/link";
import type { Ticket } from "@prisma/client";
import TicketList from "./TicketList";
import { Button } from "@nextui-org/react";

// todo: handle error states and show user friendly error messages

export default async function TicketsPage() {
  let allTickets: Ticket[] = [];

  try {
    const response = await axios.get("http://localhost:3000/api/tickets");
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
    <div className="flex flex-col justify-start items-start">
      <div className="flex justify-start items-center pb-2 mb-2 w-full">
        <h1 className="text-xl font-bold">Tickets</h1>
        <Button className="ms-auto" color="primary" href="/tickets/new">
          <Link href="/tickets/new">Create new ticket</Link>
        </Button>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-2">
        {allTickets.length > 0 ? (
          <TicketList tickets={allTickets} />
        ) : (
          <div>No tickets found</div>
        )}
      </div>
    </div>
  );
}

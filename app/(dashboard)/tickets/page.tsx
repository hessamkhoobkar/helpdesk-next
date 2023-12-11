import axios from "axios";
import type { Ticket } from "@prisma/client";
import TicketList from "./TicketList";

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
    <div>
      <h1>Tickets</h1>
      <div className="flex flex-col justify-start items-start gap-2">
        {allTickets.length > 0 ? (
          <TicketList tickets={allTickets} />
        ) : (
          <div>No tickets found</div>
        )}
      </div>
    </div>
  );
}

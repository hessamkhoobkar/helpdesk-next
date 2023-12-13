import TicketListItem from "./TicketListItem";
import type { Ticket } from "@prisma/client";

export default function TicketList({ tickets }: { tickets: Ticket[] }) {
  return (
    <>
      {tickets &&
        tickets.map((ticket) => {
          return <TicketListItem key={ticket.id} ticket={ticket} />;
        })}
    </>
  );
}

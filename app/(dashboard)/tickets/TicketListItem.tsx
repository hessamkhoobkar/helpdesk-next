import type { Ticket } from "@prisma/client";

export default function TicketListItem({ ticket }: { ticket: Ticket }) {
  return (
    <div
      key={ticket.id}
      className="flex flex-col justify-start items-start py-4"
    >
      <div>{ticket.subject}</div>
      <div>{ticket.content}</div>
      <div>{ticket.status}</div>
      <div>{ticket.priority}</div>
    </div>
  );
}

import { Category, Ticket, User } from "@prisma/client";
import TicketCard from "./_components/TicketCard";

type ExtendedTicket = Ticket & { User: User } & { assignee: User } & {
  category: Category;
};

export default function TicketList({ tickets }: { tickets: ExtendedTicket[] }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} withLink={true} />
      ))}
    </div>
  );
}

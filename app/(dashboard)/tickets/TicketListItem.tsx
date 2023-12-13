import { Card, Chip } from "@nextui-org/react";
import type { Ticket } from "@prisma/client";

export default function TicketListItem({ ticket }: { ticket: Ticket }) {
  return (
    <Card className="w-full px-4">
      <div className="w-full flex flex-col justify-start items-start gap-4 py-4">
        <span>Title</span>
        <h3 className="text-lg font-medium">{ticket.subject}</h3>
        <Chip
          radius="sm"
          size="lg"
          color={
            ticket.status === "OPEN"
              ? "danger"
              : ticket.status === "IN_PROGRESS"
              ? "warning"
              : ticket.status === "CLOSED"
              ? "success"
              : "primary"
          }
        >
          <span className="p-4 text-sm">{ticket.status}</span>
        </Chip>
        <Chip
          radius="sm"
          size="lg"
          color={
            ticket.priority === "LOW"
              ? "primary"
              : ticket.priority === "MEDIUM"
              ? "warning"
              : "danger"
          }
        >
          <span className="p-4 text-sm">{ticket.priority}</span>
        </Chip>
      </div>
    </Card>
  );
}

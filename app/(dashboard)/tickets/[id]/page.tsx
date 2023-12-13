import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

export default async function TicketPage(params: { params: { id: string } }) {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: params.params.id,
    },
  });

  console.log("ticket", ticket);

  if (!ticket) {
    notFound();
  }

  return (
    <div>
      <h1>TicketPage</h1>

      <div>
        <h2>ID</h2>

        <p>{ticket.id}</p>
      </div>
      <div>
        <h2>Subject</h2>
        <p>{ticket.subject}</p>
      </div>
      <div>
        <h2>Body</h2>
        <p>{ticket.content}</p>
      </div>
    </div>
  );
}

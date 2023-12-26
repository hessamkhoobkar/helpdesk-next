import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

import TicketCard from "../_components/TicketCard";
import CommentsList from "../_components/CommentsList";
import { Category, Ticket, User } from "@prisma/client";

type ExtendedTicket = Ticket & { User: User } & { assignee: User } & {
  category: Category;
};

export default async function TicketPage(params: { params: { id: string } }) {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: params.params.id,
    },
    include: {
      User: {
        select: {
          first_name: true,
          last_name: true,
          avatar: true,
        },
      },
      assignee: {
        select: {
          first_name: true,
          last_name: true,
          avatar: true,
        },
      },
      category: true,
    },
  });

  if (!ticket) {
    notFound();
  }

  return (
    <>
      <TicketCard ticket={ticket as ExtendedTicket} />
      <CommentsList
        firstComment={{
          user: ticket.User,
          date: ticket.createdAt,
          comment: ticket.description,
        }}
      />
    </>
  );
}

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

import axios from "axios";
import type { User } from "@prisma/client";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
import TicketForm from "../../_components/TicketForm";

const priorities: string[] = ["LOW", "MEDIUM", "HIGH"];
const status: string[] = ["OPEN", "IN_PROGRESS", "COMPLETED", "CLOSED"];

interface ExtendedSession extends Session {
  user: User & { userType: string };
}

export default async function EditTicketsPage(params: {
  params: { id: string };
}) {
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
          id: true,
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

  const categoriesResponse = await axios.get(
    `${process.env.BASE_URL}/api/categories`
  );
  const categories = categoriesResponse.data;

  const userResponse = await axios.get(`${process.env.BASE_URL}/api/users`);
  const users = userResponse.data;

  const session: ExtendedSession | null = await getServerSession(authOptions);
  const currentUserId = session?.user.id!;

  return (
    <TicketForm
      formTitle="Edit ticket"
      categories={categories}
      priorities={priorities}
      status={status}
      currentUserId={currentUserId}
      users={users}
      ticket={ticket}
      reqType="PUT"
    />
  );
}

export const dynamic = "force-dynamic";

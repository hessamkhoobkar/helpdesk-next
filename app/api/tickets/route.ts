import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createTicketSchema = z.object({
  subject: z.string().min(3).max(250),
  content: z.string().min(3).max(5000),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatoin = createTicketSchema.safeParse(body);
  if (!validatoin.success) {
    return NextResponse.json(validatoin.error.format(), { status: 400 });
  }

  const newTicket = await prisma.ticket.create({
    data: {
      subject: body.subject,
      content: body.content,
      priority: body.priority,
    },
  });

  return NextResponse.json(newTicket, { status: 201 });
}

export async function GET(request: NextRequest) {
  const params = new URLSearchParams(request.nextUrl.searchParams);

  const allTickets = await prisma.ticket.findMany({
    where: {
      assigneeId: params.get("userId"),
    },
    orderBy: {
      status: "asc",
    },
    include: {
      category: true,
      assignee: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
        },
      },
      User: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
        },
      },
    },
  });

  return NextResponse.json(allTickets, { status: 200 });
}

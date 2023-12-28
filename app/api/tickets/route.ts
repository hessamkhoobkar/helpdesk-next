import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createTicketSchema = z.object({
  subject: z.string().min(5).max(60),
  description: z.string().min(5).max(250),
  userId: z.string().cuid(),
  status: z.enum(["OPEN", "IN_PROGRESS", "COMPLETED", "CLOSED"]),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  categoryId: z.number(),
  assigneeId: z.string().cuid().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatoin = createTicketSchema.safeParse({
    ...body,
    categoryId: parseInt(body.categoryId),
  });

  if (!validatoin.success) {
    return NextResponse.json(validatoin.error.format(), { status: 400 });
  }

  const newTicket = await prisma.ticket.create({
    data: {
      subject: body.subject,
      description: body.description,
      userId: body.userId,
      status: body.status,
      priority: body.priority,
      categoryId: parseInt(body.categoryId),
      assigneeId: body.assigneeId,
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
          role: true,
        },
      },
    },
  });

  return NextResponse.json(allTickets, { status: 200 });
}

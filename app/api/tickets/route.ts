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

export async function GET() {
  const allTickets = await prisma.ticket.findMany();

  return NextResponse.json(allTickets, { status: 200 });
}

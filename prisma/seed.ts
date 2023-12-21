import {
  PrismaClient,
  UserType,
  TicketStatus,
  TicketPriority,
} from "@prisma/client";
import { users } from "./users";
import { tickets } from "./tickets";
import { categories } from "./categories";

const typedUserData = users.map((user) => ({
  ...user,
  type: user.type as UserType | undefined,
}));

const typedTicketsData = tickets.map((ticket) => ({
  ...ticket,
  priority: ticket.priority as TicketPriority | undefined,
  status: ticket.status as TicketStatus | undefined,
}));

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: typedUserData,
  });
  await prisma.category.createMany({
    data: categories,
  });
  await prisma.ticket.createMany({
    data: typedTicketsData,
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient, UserType } from "@prisma/client";
import { users } from "./users";

const typedUserData = users.map((user) => ({
  ...user,
  type: user.type as UserType | undefined,
}));

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: typedUserData,
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

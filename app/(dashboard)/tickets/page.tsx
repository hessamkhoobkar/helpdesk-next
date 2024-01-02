import type { User } from "@prisma/client";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import TicketPageClient from "./TicketPageClient";

interface ExtendedSession extends Session {
  user: User & { userType: string };
}

export default async function TicketsPage() {
  const session: ExtendedSession | null = await getServerSession(authOptions);
  const currentUserId = session?.user.id!;
  const currentUserType = session?.user.userType!;

  return (
    <>
      <TicketPageClient
        currentUserId={currentUserId}
        currentUserType={currentUserType}
      />
    </>
  );
}

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import TicketPageClient from "./TicketPageClient";

export default async function TicketsPage() {
  const session = await getServerSession(authOptions);
  // @ts-ignore // Ignoreing the error as the session type does not get updated with ID
  const currentUserId = session.user.id;

  return (
    <>
      <TicketPageClient currentUserId={currentUserId} />
    </>
  );
}

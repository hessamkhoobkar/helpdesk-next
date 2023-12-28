import axios from "axios";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import TicketForm from "../_components/TicketForm";

const priorities: string[] = ["LOW", "MEDIUM", "HIGH"];
const status: string[] = ["OPEN", "IN_PROGRESS", "COMPLETED", "CLOSED"];

export default async function NewTicketsPage() {
  const categoriesResponse = await axios.get(
    `${process.env.BASE_URL}/api/categories`
  );
  const categories = categoriesResponse.data;

  const userResponse = await axios.get(`${process.env.BASE_URL}/api/users`);
  const users = userResponse.data;

  const session = await getServerSession(authOptions);
  // @ts-ignore // Ignoreing the error as the session type does not get updated with ID
  const cuurentUserId = session.user.id;

  return (
    <TicketForm
      formTitle="Create a new ticket"
      categories={categories}
      priorities={priorities}
      status={status}
      cuurentUserId={cuurentUserId}
      users={users}
    />
  );
}

import axios from "axios";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import TicketForm from "../_components/TicketForm";
interface UserWithId extends Session {
  id: string;
}

const priorities: string[] = ["LOW", "MEDIUM", "HIGH"];

export default async function NewTicketsPage() {
  const response = await axios(`${process.env.BASE_URL}/api/categories`);
  const categories = response.data;

  const session = await getServerSession(authOptions);
  const cuurentUserId = (session?.user as UserWithId)?.id;

  return (
    <TicketForm
      formTitle="Create a new ticket"
      categories={categories}
      priorities={priorities}
      cuurentUserId={cuurentUserId}
    />
  );
}

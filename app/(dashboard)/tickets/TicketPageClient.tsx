"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Category, Ticket, User } from "@prisma/client";

import TicketList from "./TicketList";
import PageHero from "../_components/PageHero";
import HeroAcrions from "./_components/HeroAcrions";
import { Button } from "@nextui-org/react";

type ExtendedTicket = Ticket & { User: User } & { assignee: User } & {
  category: Category;
};

export default function TicketPageClient({
  currentUserId,
  currentUserType,
}: {
  currentUserId: string;
  currentUserType: string;
}) {
  const [tickets, setTickets] = useState<ExtendedTicket[]>([]);
  const [status, setStatus] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  async function fetchTickets(
    currentUserId: string,
    currentUserType: string,
    status?: string,
    priority?: string,
    categoryId?: string
  ) {
    let params;

    if (currentUserType === "CLIENT") {
      params = {
        userId: currentUserId,
        ...(status && { status }),
        ...(priority && { priority }),
        ...(categoryId && { categoryId }),
      };
    } else {
      params = {
        assigneeId: currentUserId,
        ...(status && { status }),
        ...(priority && { priority }),
        ...(categoryId && { categoryId }),
      };
    }

    const response = await axios.get("/api/tickets", { params });
    const tickets = response.data;

    return tickets;
  }

  useEffect(() => {
    fetchTickets(
      currentUserId,
      currentUserType,
      status,
      priority,
      category
    ).then((tickets) => setTickets(tickets));
  }, [currentUserId, currentUserType, status, priority, category]);

  return (
    <>
      <PageHero
        title="Tickets"
        cardActions={
          <Button className="ms-auto" color="primary" href="/tickets/new">
            <Link href="/tickets/new">Create new ticket</Link>
          </Button>
        }
        footerActions={
          <HeroAcrions
            setStatus={setStatus}
            setPriority={setPriority}
            setCategory={setCategory}
          />
        }
      />
      {tickets && <TicketList tickets={tickets} />}
    </>
  );
}

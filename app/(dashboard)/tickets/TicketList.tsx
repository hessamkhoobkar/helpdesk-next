import Link from "next/link";
import type { Ticket } from "@prisma/client";
import StatusChip from "./_components/StatusChip";
import PriorityChip from "./_components/PriorityChip";
import DateParser from "../_components/utils/DateParser";
import { Card, CardBody, Divider } from "@nextui-org/react";

export default function TicketList({ tickets }: { tickets: Ticket[] }) {
  return tickets.map((ticket) => (
    <Card key={ticket.id} className="w-full shadow">
      <CardBody className="p-6">
        <div className="flex flex-col gap-1" key={ticket.id}>
          <Link
            href={`/tickets/${ticket.id}`}
            className="font-bold text-xl hover:text-primary transition-all duration-200 ease-in-out"
          >
            {ticket.subject}
          </Link>
          <div className="font-medium text-sm text-default-400 flex gap-2">
            <span>Created at</span>
            <span>
              <DateParser date={ticket.createdAt} />
            </span>
            <span>by</span>
            <span className="text-primary-300 hover:text-primary cursor-pointer">
              {ticket.User.first_name} {ticket.User.last_name}
            </span>
          </div>
        </div>
      </CardBody>
      <Divider className="opacity-40" />
      <CardBody className="p-6 pt-5 pb-4">
        <div className="flex gap-2 w-full">
          <div className="flex flex-col gap-1 pe-8 border-r-2 border-default-100">
            <span className="text-sm font-medium text-primary-400">
              Status:
            </span>
            <span>
              <StatusChip status={ticket.status} />
            </span>
          </div>
          <div className="flex flex-col gap-1 px-8 border-r-2 border-default-100">
            <span className="text-sm font-medium text-primary-400">
              Assigned to:
            </span>
            <span className="font-medium py-1">
              {ticket.assignee ? (
                <span>
                  {ticket.assignee.first_name} {ticket.assignee.last_name}
                </span>
              ) : (
                <span className="text-default-400">Unassigned</span>
              )}
            </span>
          </div>
          <div className="flex flex-col gap-1 px-8 border-r-2 border-default-100">
            <span className="text-sm font-medium text-primary-400">
              Priority:
            </span>
            <span>
              <PriorityChip priority={ticket.priority} />
            </span>
          </div>
          <div className="flex flex-col gap-1 px-8 border-r-2 border-default-100">
            <span className="text-sm font-medium text-primary-400">
              Category:
            </span>
            <span className="font-medium">{ticket.category.name}</span>
          </div>
          <div className="flex flex-col gap-1 px-8">
            <span className="text-sm font-medium text-primary-400">
              Last updated:
            </span>
            <span className="font-medium text-sm text-default-400 py-1">
              <DateParser date={ticket.updatedAt} />
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  ));
}

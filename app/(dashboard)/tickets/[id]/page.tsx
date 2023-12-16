import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Chip, Input, Textarea } from "@nextui-org/react";
import DateCard from "../../_components/DateCard";
import { HashtagSquareIcon } from "@/app/_assets/icons/HashSquare";

export default async function TicketPage(params: { params: { id: string } }) {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: params.params.id,
    },
  });

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex flex-col justify-start items-start gap-4">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div>
          <h2 className="font-bold text-lg">{ticket?.subject}</h2>
        </div>
        <div className="w-full flex justify-start items-start gap-4">
          <DateCard date={ticket?.createdAt} title="Created at :" />

          <DateCard date={ticket?.updatedAt} title="Last updated at:" />

          <div className="w-full flex flex-col justify-start items-start gap-1 px-4 py-2 border rounded-2xl">
            <span className="text-xs text-foreground-400">Status :</span>
            <Chip
              color="primary"
              variant="flat"
              radius="md"
              startContent={<HashtagSquareIcon className="text-lg" />}
            >
              {ticket?.status}
            </Chip>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-1 px-4 py-2 border rounded-2xl">
            <span className="text-xs text-foreground-400">Priority :</span>
            <Chip
              color="primary"
              variant="flat"
              radius="md"
              startContent={<HashtagSquareIcon className="text-lg" />}
            >
              {ticket?.priority}
            </Chip>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-1 px-4 py-2 border rounded-2xl">
            <span className="text-xs text-foreground-400">Assignee :</span>
            <Chip
              color="primary"
              variant="flat"
              radius="md"
              startContent={<HashtagSquareIcon className="text-lg" />}
            >
              {ticket?.priority}
            </Chip>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-1 px-4 py-2 border rounded-2xl">
            <span className="text-xs text-foreground-400">Category :</span>
            <Chip
              color="primary"
              variant="flat"
              radius="md"
              startContent={<HashtagSquareIcon className="text-lg" />}
            >
              {ticket?.priority}
            </Chip>
          </div>
        </div>

        {/* <Chip color="primary">{ticket?.categoryId}</Chip> */}
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <p>Ticket comments will be here and will be implemented soon.</p>
        <div className="w-full">
          <Textarea label="Description" value={ticket?.description} readOnly />
        </div>
      </div>
    </div>
  );
}

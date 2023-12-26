import { Category, Ticket, User } from "@prisma/client";
import { Card, CardBody, Divider } from "@nextui-org/react";

import HeadInfo from "./ticketcard/HeadInfo";
import HeadActions from "./ticketcard/HeadActions";
import InfoSection from "./ticketcard/InfoSection";

type ExtendedTicket = Ticket & { User: User } & { assignee: User } & {
  category: Category;
};

interface InfoSectionData {
  variant: "Status" | "Assigned" | "Priority" | "Category" | "Updated";
  title: string;
  value: any;
}

export default function TicketCard({ ticket }: { ticket: ExtendedTicket }) {
  const username = ticket.User.first_name + " " + ticket.User.last_name;
  const assigneeName =
    ticket.assignee.first_name + " " + ticket.assignee.last_name;

  const infoArray: InfoSectionData[] = [
    { variant: "Status", title: "Status:", value: ticket.status },
    { variant: "Assigned", title: "Assigned to:", value: assigneeName },
    { variant: "Priority", title: "Priority:", value: ticket.priority },
    { variant: "Category", title: "Category:", value: ticket.category.name },
    { variant: "Updated", title: "Last updated:", value: ticket.updatedAt },
  ];

  return (
    <Card key={ticket.id} className="w-full shadow">
      <CardBody className="p-4">
        <div className="flex">
          <HeadInfo
            subject={ticket.subject}
            createdAt={ticket.createdAt}
            user={username}
          />
          <HeadActions />
        </div>
      </CardBody>
      <Divider />
      <CardBody className="p-6 pt-5 pb-4">
        <div className="flex gap-2 w-full">
          {infoArray.map((info, index) => (
            <InfoSection
              key={info.variant}
              index={index}
              variant={info.variant}
              title={info.title}
              value={info.value}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

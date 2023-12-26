import StatusChip from "../StatusChip";
import PriorityChip from "../PriorityChip";
import DateParser from "@/app/(dashboard)/_components/utils/DateParser";

interface Props {
  index: number;
  variant: "Status" | "Assigned" | "Priority" | "Category" | "Updated";
  title: string;
  value: any;
}

export default function InfoSection({ index, variant, title, value }: Props) {
  return (
    <div
      className={`flex flex-col gap-3 border-default-100 whitespace-nowrap font-medium
      ${index === 0 ? "pe-8" : "px-8"}
      ${index === 4 ? "" : "border-r-2 "}
      `}
    >
      <span className="text-sm text-primary-400">{title}</span>
      <span className="relative min-w-unit-24">
        <ValueSwitch variant={variant} value={value} />
      </span>
    </div>
  );
}

export function ValueSwitch({
  variant,
  value,
}: {
  variant: string;
  value: any;
}) {
  switch (variant) {
    case "Status":
      return (
        <span className="absolute -top-1">
          <StatusChip status={value} />
        </span>
      );
    case "Assigned":
      return <p>{value}</p>;
    case "Priority":
      return <PriorityChip priority={value} />;
    case "Category":
      return <p>{value}</p>;
    case "Updated":
      return <DateParser date={value} />;
  }
}

{
  /* 
<div className="flex flex-col gap-1 pe-8 border-r-2 border-default-100">
  <span className="text-sm font-medium text-primary-400">
    Status:
  </span>
  <span>
    
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
  <span className="font-medium text-sm py-1">
    <DateParser date={ticket.updatedAt} />
  </span>
</div> */
}

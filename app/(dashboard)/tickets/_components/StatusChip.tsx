import { Chip } from "@nextui-org/react";
import { StatClosed } from "@/app/_assets/icons/progress/Closed";
import { StatCompleted } from "@/app/_assets/icons/progress/Completed";
import { StatInProgress } from "@/app/_assets/icons/progress/InProgress";
import { StatOpen } from "@/app/_assets/icons/progress/Open";

export default function StatusChip({
  status,
}: {
  status: "OPEN" | "IN_PROGRESS" | "COMPLETED" | "CLOSED";
}) {
  let chipColor:
    | "default"
    | "danger"
    | "warning"
    | "success"
    | "primary"
    | "secondary"
    | undefined = "default";
  let chipText = "default";
  let chipIcon = null;

  switch (status) {
    case "OPEN":
      chipColor = "danger";
      chipText = "Open";
      chipIcon = <StatOpen />;
      break;
    case "IN_PROGRESS":
      chipColor = "warning";
      chipText = "In-Progress";
      chipIcon = <StatInProgress />;
      break;
    case "COMPLETED":
      chipColor = "success";
      chipText = "Completed";
      chipIcon = <StatCompleted />;
      break;
    case "CLOSED":
      chipColor = "default";
      chipText = "Closed";
      chipIcon = <StatClosed />;
      break;
  }

  return (
    <Chip
      className="text-lg gap-1"
      variant="flat"
      color={chipColor}
      startContent={chipIcon}
    >
      <span className="text-sm font-semibold">{chipText}</span>
    </Chip>
  );
}

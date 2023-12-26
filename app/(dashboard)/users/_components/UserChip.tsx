import { Chip } from "@nextui-org/react";

export default function UserChip({ value }: { value: string }) {
  const props: {
    label: string;
    color:
      | "primary"
      | "default"
      | "secondary"
      | "success"
      | "warning"
      | "danger"
      | undefined;
  } =
    value === "CLIENT"
      ? { label: "Client", color: "primary" }
      : { label: "Employee", color: "warning" };

  return (
    <Chip color={props.color} variant="flat" size="sm" className="p-2">
      <span className="font-bold">{props.label}</span>
    </Chip>
  );
}

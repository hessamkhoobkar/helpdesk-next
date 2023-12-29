import Link from "next/link";
import { Button } from "@nextui-org/react";
import { EditPen } from "@/app/_assets/icons/EditPen";

export default function HeadActions({ id }: { id: string }) {
  return (
    <div className="flex gap-2 ms-auto">
      <Button
        isIconOnly
        color="warning"
        variant="flat"
        aria-label="Take a photo"
        className="md:hidden"
        as={Link}
        href={`/tickets/${id}/edit`}
      >
        <EditPen />
      </Button>

      <Button
        className="max-md:hidden"
        color="warning"
        variant="flat"
        startContent={<EditPen />}
        as={Link}
        href={`/tickets/${id}/edit`}
      >
        <span>Edit</span>
      </Button>
    </div>
  );
}

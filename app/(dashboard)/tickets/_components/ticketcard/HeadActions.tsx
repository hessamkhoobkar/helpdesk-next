import { Button } from "@nextui-org/react";
import { EditPen } from "@/app/_assets/icons/EditPen";

export default function HeadActions() {
  return (
    <div className="flex gap-2 ms-auto">
      <Button
        isIconOnly
        color="warning"
        variant="flat"
        aria-label="Take a photo"
        className="md:hidden"
      >
        <EditPen />
      </Button>

      <Button
        className="max-md:hidden"
        color="warning"
        variant="flat"
        startContent={<EditPen />}
      >
        <span>Edit</span>
      </Button>
    </div>
  );
}

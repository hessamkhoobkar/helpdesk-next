import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Skeleton,
} from "@nextui-org/react";

export default function TicketFormSkeleton() {
  return (
    <Card className="shadow">
      <CardHeader className="p-4">
        <div className="w-1/2">
          <Skeleton className="h-7 rounded-xl" />
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="p-4 gap-4">
        <Skeleton className="h-16 rounded-xl" />
        <div className="flex gap-4">
          <Skeleton className="h-20 w-1/2 rounded-xl" />
          <Skeleton className="h-20 w-1/2 rounded-xl" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-20 w-1/2 rounded-xl" />
          <Skeleton className="h-20 w-1/2 rounded-xl" />
        </div>
        <Skeleton className="h-60 rounded-xl" />
      </CardBody>
    </Card>
  );
}

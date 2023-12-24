import { Card, Divider, Skeleton } from "@nextui-org/react";

export default function SkeletonCard() {
  return (
    <Card className="shadow">
      <div className="p-4">
        <Skeleton className="rounded-lg">
          <div className="h-8 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>

      <Divider />
      <div className="p-4">
        <Skeleton className="rounded-lg">
          <div className="h-40 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}

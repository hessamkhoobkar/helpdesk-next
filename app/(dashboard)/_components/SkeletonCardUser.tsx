import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonCardUser() {
  return (
    <Card className="shadow">
      <div className="flex gap-4 p-4">
        <Skeleton className="rounded-lg">
          <div className="h-36 w-36 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="flex flex-col gap-4">
          <Skeleton className="rounded-lg mb-4">
            <div className="h-8 w-64 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="flex gap-4">
            <Skeleton className="rounded">
              <div className="h-4 w-32 rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="rounded">
              <div className="h-4 w-32 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="flex gap-4">
            <Skeleton className="rounded">
              <div className="h-4 w-32 rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="rounded">
              <div className="h-4 w-32 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      </div>
    </Card>
  );
}

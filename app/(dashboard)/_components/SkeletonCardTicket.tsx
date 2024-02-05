import { Card, CardBody, Divider, Skeleton } from "@nextui-org/react";

export default function SkeletonCardTicket() {
  return (
    <Card className="shadow">
      <CardBody className="p-4 gap-4">
        <div className="w-1/2">
          <Skeleton className="rounded-lg w-1/2 h-8" />
        </div>
        <div className="w-full flex gap-2">
          <Skeleton className="rounded-lg w-48 h-5" />
          <Skeleton className="rounded-lg w-32 h-5" />
        </div>
      </CardBody>
      <Divider />
      <CardBody className="p-4 flex flex-row">
        {[...Array(5)].map((e, i) => {
          return (
            <div
              key={i}
              className={`border-default-100 
              ${i === 0 ? "pe-8" : "px-8"} 
              ${i !== 4 ? "border-r-2" : ""}`}
            >
              <div className="w-full flex flex-col gap-3">
                <Skeleton className="rounded-lg h-4 w-16" />
                <Skeleton className="rounded-lg h-8 w-32" />
              </div>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}

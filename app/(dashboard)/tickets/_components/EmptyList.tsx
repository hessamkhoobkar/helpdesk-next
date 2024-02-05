import { Card, CardBody, Divider, Skeleton } from "@nextui-org/react";

export default function EmptyList() {
  return (
    <Card className="shadow">
      <CardBody className="justify-center items-center gap-4 py-24">
        <h2 className="font-black text-3xl text-primary-600">
          We did not find any tickets
        </h2>
        <p>
          Try adjusting your seartch or filter to find that you&lsquo;re looking
          for.
        </p>
      </CardBody>
    </Card>
  );
}

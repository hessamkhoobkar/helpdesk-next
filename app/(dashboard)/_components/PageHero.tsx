import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";

export default function PageHero({
  title,
  description,
  cardActions,
  footerActions,
}: {
  title: string;
  description?: string;
  cardActions?: React.ReactNode;
  footerActions?: React.ReactNode;
}) {
  return (
    <Card className="w-full shadow mb-6">
      <CardBody className="p-4">
        <div className="w-full flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
          <div className="flex gap-2">{cardActions}</div>
        </div>
      </CardBody>
      {footerActions && (
        <>
          <Divider className="opacity-40" />
          <CardFooter className="p-4">{footerActions}</CardFooter>
        </>
      )}
    </Card>
  );
}

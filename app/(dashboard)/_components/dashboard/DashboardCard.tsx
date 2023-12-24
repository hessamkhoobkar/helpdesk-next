import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function DashboardCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="shadow">
      <CardHeader className="font-bold">{title}</CardHeader>
      <Divider />
      <CardBody className="p-1">{children}</CardBody>
    </Card>
  );
}

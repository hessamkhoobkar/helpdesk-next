import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

interface User {
  avatar: string;
  first_name: string;
  last_name: string;
}

export default function CommentCard({
  user,
  date,
  comment,
}: {
  user: User;
  date: Date;
  comment: string;
}) {
  return (
    <Card className="w-full shadow mt-4">
      <CardHeader className="flex gap-4">
        <Avatar isBordered radius="md" src={`/${user.avatar}`} />
        <div className="flex flex-col">
          <span className="font-medium">
            {user.first_name + " " + user.last_name}
          </span>
          <span className="text-xs font-medium text-default-400">
            {date.toLocaleString()}
          </span>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="p-6">
        <p className="font-medium">{comment}</p>
      </CardBody>
    </Card>
  );
}

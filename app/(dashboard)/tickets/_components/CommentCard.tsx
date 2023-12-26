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
    <div className="flex flex-col">
      <div className="flex gap-3 ps-1">
        <Avatar
          className="mt-1"
          isBordered
          radius="md"
          size="sm"
          src={`/${user.avatar}`}
        />
        <div className="flex flex-col">
          <span className="font-medium">
            {user.first_name + " " + user.last_name}
          </span>
          <span className="text-xs font-medium text-default-400 dark:text-default-600">
            {date.toLocaleString()}
          </span>
        </div>
      </div>
      <Card className="w-full shadow mt-2">
        <CardBody className="p-4">
          <p className="font-medium">{comment}</p>
        </CardBody>
      </Card>
    </div>
  );
}

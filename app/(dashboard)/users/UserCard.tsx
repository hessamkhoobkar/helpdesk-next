import Image from "next/image";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { User } from "@prisma/client";
import UserCardField from "./_components/UserCardField";
import UserChip from "./_components/UserChip";

export default function UserCard({ user }: { user: User }) {
  return (
    <Card className="w-full shadow">
      <CardBody>
        <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start gap-4 w-full">
          <div className="w-48 mb-4 lg:mb-0">
            <Image
              src={`/${user.avatar}`}
              alt="user avatar"
              width={180}
              height={180}
              className="rounded-xl dark:opacity-90"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between">
              <div className="text-xl font-bold flex gap-1">
                <span>{user.first_name}</span>
                <span>{user.last_name}</span>
              </div>
              <UserChip value={user.type} />
            </div>

            <div className="w-full flex gap-2">
              <div className="w-1/2 flex flex-col gap-3">
                <UserCardField label="Email" value={user.email} />
                <UserCardField label="Phone" value={user.phone} />
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <UserCardField label="Department" value={user.department} />
                <UserCardField label="Position" value={user.role} />
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

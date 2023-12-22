import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";
import { User } from "@prisma/client";

export default function UserCard({ user }: { user: User }) {
  return (
    <Card className="w-full shadow">
      <CardBody>
        <div className="flex justify-start items-start gap-4 w-full">
          <div>
            <Image
              src={`/${user.avatar}`}
              alt="user avatar"
              width={180}
              height={180}
              className="rounded-xl"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between">
              <div className="flex gap-1 text-xl font-bold">
                <span>{user.first_name}</span>
                <span>{user.last_name}</span>
              </div>
            </div>

            <div className="w-full flex gap-16">
              <div className="w-1/3 flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary-400">
                    Email:
                  </span>
                  <p className="font-medium">
                    {user.email.slice(0, 25) && user.email.length > 25
                      ? user.email.slice(0, 25) + "..."
                      : user.email}
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary-400">
                    Phone:
                  </span>
                  <p className="font-medium">{user.phone}</p>
                </div>
              </div>
              <div className="w-1/3 flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary-400">
                    Department:
                  </span>
                  <p className="font-medium">{user.department}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary-400">
                    Position:
                  </span>
                  <p className="font-medium">{user.role}</p>
                </div>
              </div>
              <div className="w-1/3 flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary-400">
                    Type:
                  </span>
                  <p className="font-medium">
                    {user.type.slice(0, 1) +
                      user.type.slice(1).toLocaleLowerCase()}
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary-400">
                    Gender:
                  </span>
                  <p className="font-medium">
                    <span>{user.gender}</span>
                    <span className="text-xs text-default-400 ms-2">
                      {user.gender === "Male" ? "(he/him)" : "(she/her)"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

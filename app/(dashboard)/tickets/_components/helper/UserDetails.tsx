import { User } from "@nextui-org/react";
import { User as UserType } from "@prisma/client";

export function GetUserDetails({
  id,
  users,
}: {
  id: string;
  users: UserType[];
}) {
  const userData = users.find((user) => user.id === id);

  if (!userData) {
    console.error("User not found");
    return "";
  }

  return (
    <User
      name={userData.first_name + " " + userData.last_name}
      description={userData.email}
      avatarProps={{
        src: `/${userData.avatar}`,
      }}
    />
  );
}

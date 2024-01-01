"use client";

import axios from "axios";
import UserList from "./UserList";
import PageHero from "../_components/PageHero";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import SkeletonCardUser from "../_components/SkeletonCardUser";
import { UserType } from "@prisma/client";

const userTypes: UserType[] = ["CLIENT", "EMPLOYEE"];

async function getUser(params: string, setLoading: any) {
  const response = await axios(`/api/users` + params);
  const users = response.data;

  setLoading(false);
  return users;
}

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedUserType] = useState<string>("");

  useEffect(() => {
    const params = selectedType ? `?userType=${selectedType}` : "";
    getUser(params, setLoading).then((users) => setUsers(users));
  }, [selectedType]);

  return (
    <div>
      <PageHero
        title="Users"
        description="List of all users"
        footerActions={
          <Select
            label="Filter by user type"
            placeholder="Select an type"
            selectionMode="single"
            className="w-56"
            classNames={{
              trigger: "h-16",
              label: "top-5",
              innerWrapper: "pt-12 mt-1",
            }}
            onChange={(e) => setSelectedUserType(e.target.value)}
          >
            {userTypes.map((userType) => (
              <SelectItem key={userType} value={userType}>
                {userType}
              </SelectItem>
            ))}
          </Select>
        }
      />

      <div className="flex flex-col justify-start items-start gap-2">
        {loading && (
          <div className="w-full grid grid-cols-2 gap-4">
            <SkeletonCardUser />
            <SkeletonCardUser />
            <SkeletonCardUser />
            <SkeletonCardUser />
          </div>
        )}

        {!loading && users.length > 0 && <UserList users={users} />}

        {!loading && users.length === 0 && (
          <div className="w-full h-48 rounded-lg bg-white shadow p-4 flex justify-center items-center">
            <p className="text-2xl font-bold text-default-400">
              No users found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

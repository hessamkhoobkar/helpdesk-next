"use client";

import axios from "axios";
import UserList from "./UserList";
import PageHero from "../_components/PageHero";
import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

async function getUser(params: string) {
  const response = await axios("http://localhost:3000/api/users" + params);
  const users = response.data;
  return users;
}

export default function UserPage() {
  const [users, setUsers] = useState([]);

  // IMPORTANT - USAGE OF ANY TYPE
  // This is a workaround to avoid a bug in nextui for the line 54 of this file | onSelectionChange={setSelectedKeys}
  const [selectedTypes, setSelectedKeys] = useState<any>(
    new Set(["CLIENT", "EMPLOYEE"])
  );

  useEffect(() => {
    const getParams = `?types=${Array.from(selectedTypes).join(",")}`;
    getUser(getParams).then((users) => setUsers(users));
  }, [selectedTypes]);

  return (
    <div>
      <PageHero
        title="Users"
        description="List of all users"
        footerActions={
          <Dropdown>
            <DropdownTrigger>
              <Button variant="flat" className="capitalize">
                user type
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Multiple selection example"
              variant="flat"
              closeOnSelect={false}
              disallowEmptySelection
              selectionMode="multiple"
              selectedKeys={selectedTypes}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="CLIENT">Clients</DropdownItem>
              <DropdownItem key="EMPLOYEE">Employee</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        }
      />

      <div className="flex flex-col justify-start items-start gap-2">
        {users.length > 0 ? (
          <UserList users={users} />
        ) : (
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

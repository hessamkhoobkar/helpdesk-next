"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from "@nextui-org/react";
import DarkmodeToggle from "./DarkmodeToggle";
import { PlusIcon } from "@/app/_assets/icons/Plus";
import { signOut } from "next-auth/react";
import { Exit } from "@/app/_assets/icons/Exit";

export default function UserMenu({ user }: { user: any }) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          as="button"
          className="transition-transform"
          color="primary"
          radius="md"
          name={user.email}
          src={`/${user.image}`}
        />
      </DropdownTrigger>

      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownSection aria-label="profile">
          <DropdownItem
            textValue="zoey@example.com"
            key="profile"
            className="h-14 gap-2"
          >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user.email}</p>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection className="sm:hidden" aria-label="links" showDivider>
          <DropdownItem key="mobile_link_dashboard" href="/">
            Dashboard
          </DropdownItem>
          <DropdownItem key="mobile_link_tickets" href="/tickets">
            Tickets
          </DropdownItem>
          <DropdownItem key="mobile_link_users" href="/users">
            Users
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Actions" showDivider>
          <DropdownItem
            href="/tickets/new"
            key="add_ticket"
            endContent={<PlusIcon className="text-xl" />}
          >
            Add ticket
          </DropdownItem>
          <DropdownItem key="quick_search" shortcut="⌘K">
            Quick search
          </DropdownItem>
          <DropdownItem
            key="darkmode_toggle"
            isReadOnly
            endContent={<DarkmodeToggle />}
          >
            Dark mode
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Dangerzone">
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            variant="solid"
            className="group"
            endContent={
              <Exit className="text-xl opacity-40 group-hover:opacity-100" />
            }
            onClick={() => signOut()}
          >
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}

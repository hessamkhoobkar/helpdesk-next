"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  DropdownSection,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import styles from "./navbar.module.css";
import DarkmodeToggle from "./DarkmodeToggle";
import { BellIcon } from "@/app/_assets/icons/Bell";
import { PlusIcon } from "@/app/_assets/icons/Plus";

// todo: add active link style
// todo: get user data from api

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Dashboard", "Tickets", "Users"];

  return (
    <Navbar
      className="bg-primary-700 dark:bg-primary-200"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="center">
        <NavbarBrand>
          <p className={styles.brandIcon}>HELPDESK</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 ms-8" justify="center">
        <NavbarItem>
          <Link className="text-white" href="/">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/tickets">
            Tickets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/users">
            Users
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            color="primary"
            variant="flat"
            className="text-white text-xl"
          >
            <BellIcon />
          </Button>
        </NavbarItem>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
              radius="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>

          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownSection aria-label="profile">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
            </DropdownSection>
            <DropdownSection
              className="sm:hidden"
              aria-label="links"
              showDivider
            >
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
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

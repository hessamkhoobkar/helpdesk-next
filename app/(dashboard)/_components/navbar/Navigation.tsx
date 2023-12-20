"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarContent, NavbarItem } from "@nextui-org/react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Tickets",
    href: "/tickets",
  },
  {
    label: "Users",
    href: "/users",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <NavbarContent className="hidden sm:flex gap-4 ms-8" justify="center">
      {menuItems.map((item) => (
        <NavbarItem key={item.label}>
          <Link
            className={`font-medium py-4 px-2 rounded-xl hover:text-white dark:hover:text-white transition-all duration-200 ease-in-out ${
              pathname === item.href
                ? "text-white"
                : "text-primary-200 dark:text-primary-700"
            }`}
            href={item.href}
          >
            {item.label}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  );
}

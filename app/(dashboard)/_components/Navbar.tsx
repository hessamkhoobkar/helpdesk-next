import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import UserMenu from "./navbar/UserMenu";
import { BellIcon } from "@/app/_assets/icons/Bell";
import Navigation from "./navbar/Navigation";

export default async function AppNavbar() {
  const session = await getServerSession(authOptions);

  return (
    <Navbar maxWidth="xl" className="bg-primary-700 dark:bg-primary-200">
      <NavbarContent justify="center">
        <NavbarBrand className="w-24">
          <Link href="/" className="brand-type">
            HELPDESK
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <Navigation />

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
        <UserMenu user={session?.user} />
      </NavbarContent>
    </Navbar>
  );
}

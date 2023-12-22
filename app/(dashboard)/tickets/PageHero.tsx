import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function PageHero() {
  return (
    <div className="flex justify-start items-center pb-2 mb-2 w-full">
      <h1 className="text-xl font-bold">Tickets</h1>
      <Button className="ms-auto" color="primary" href="/tickets/new">
        <Link href="/tickets/new">Create new ticket</Link>
      </Button>
    </div>
  );
}

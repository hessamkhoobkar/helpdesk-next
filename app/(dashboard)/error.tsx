"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button, Card, CardBody } from "@nextui-org/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Card className="shadow">
      <CardBody>
        <div className="flex flex-col justify-center items-center py-8">
          <p className="font-bold text-danger mb-4">
            houston we have a problem
          </p>
          <h2 className="text-6xl font-bold mb-2">
            {error.message || "Something went wrong!"}
          </h2>
          <p className="text-default mb-14">
            Please try again later or contact support if the problem persists.
          </p>
          <div className="flex gap-4">
            <Button color="primary" size="lg" onPress={() => reset()}>
              Try again
            </Button>

            <Button color="primary" size="lg" variant="flat" as={Link} href="/">
              Go back home
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

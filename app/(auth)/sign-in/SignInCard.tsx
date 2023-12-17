"use client";

import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button, Card, CardBody } from "@nextui-org/react";

// todo: handle loading state
// todo: handle error states and show user friendly error messages

export default function SignInCard({
  fullname,
  email,
  password,
  avatar,
}: {
  fullname: string;
  email: string;
  password: string;
  avatar: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  async function handleSignInReq() {
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
        callbackUrl,
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  }

  return (
    <Card>
      <CardBody className="gap-4">
        <div className="flex gap-3">
          <Image
            height="40"
            width="40"
            alt="nextui logo"
            className="rounded-lg"
            src={avatar}
          />
          <div className="flex flex-col">
            <p className="font-medium text-md">{fullname}</p>
            <p className="font-medium text-small text-default-500">{email}</p>
          </div>
        </div>
        <Button color="primary" onPress={handleSignInReq}>
          Sign In
        </Button>
      </CardBody>
    </Card>
  );
}

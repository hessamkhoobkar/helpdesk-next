"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardBody,
  useDisclosure,
} from "@nextui-org/react";
import { DangerTriangle } from "@/app/_assets/icons/DangerTriangle";

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
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [error, setError] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

  useEffect(() => {
    if (error) {
      onOpen();
      setError("");
    }
  }, [error, onOpen]);

  return (
    <>
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
          <Button color="primary" isLoading={loading} onPress={handleSignInReq}>
            Sign In
          </Button>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-end gap-2">
                <DangerTriangle className="text-danger text-3xl" />
                <span className="leading-6">The sign-in process failed</span>
              </ModalHeader>
              <ModalBody className="pb-8">
                <p>
                  There is an issue with the sign-in process. It is most likely
                  caused by the database server going down due to inactivity.
                  Please let me know, and I will work on it immediately.
                </p>
                <p>
                  You can reach out to me at{" "}
                  <a
                    className="text-primary font-bold underline "
                    href="https://khoobkar.com/contact"
                  >
                    contact page
                  </a>{" "}
                  of my website
                </p>
              </ModalBody>
              <ModalFooter className="bg-default-100 border-t">
                <Button color="default" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

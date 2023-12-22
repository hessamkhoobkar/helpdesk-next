import prisma from "@/prisma/client";
import { UserType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = new URLSearchParams(request.nextUrl.searchParams);
  const userTypes = params.get("types");
  const userTypesArray = userTypes?.split(",") as UserType[];

  let users;

  if (userTypesArray && userTypesArray.length > 1) {
    users = await prisma.user.findMany();
  } else {
    users = await prisma.user.findMany({
      where: {
        type: userTypesArray![0],
      },
    });
  }

  if (!users) {
    return NextResponse.json({ error: "No users found" }, { status: 404 });
  }

  return NextResponse.json(users, { status: 200 });
}

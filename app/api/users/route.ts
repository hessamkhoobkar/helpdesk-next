import prisma from "@/prisma/client";
import { UserType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = new URLSearchParams(request.nextUrl.searchParams);
  const userTypeQuery = params.get("userType") || undefined;

  const users = await prisma.user.findMany({
    where: {
      type: userTypeQuery as UserType,
    },
  });

  if (!users) {
    return NextResponse.json({ error: "No users found" }, { status: 404 });
  }

  return NextResponse.json(users, { status: 200 });
}

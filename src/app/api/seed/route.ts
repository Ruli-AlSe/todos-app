import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: "Soul gem", complete: true },
      { description: "power gem" },
      { description: "time gem" },
      { description: "space gem" },
      { description: "reality gem" },
    ],
  });

  return NextResponse.json({ message: "Seed executed" });
}

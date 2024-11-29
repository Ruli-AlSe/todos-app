import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: bcrypt.hashSync('123456'),
      roles: ['admin', 'user'],
      todos: {
        create: [
          { description: 'Soul gem', complete: true },
          { description: 'power gem' },
          { description: 'time gem' },
          { description: 'space gem' },
          { description: 'reality gem' },
        ],
      },
    },
  });

  // await prisma.todo.createMany({
  //   data: [
  //     { description: "Soul gem", complete: true },
  //     { description: "power gem" },
  //     { description: "time gem" },
  //     { description: "space gem" },
  //     { description: "reality gem" },
  //   ],
  // });

  return NextResponse.json({ message: 'Seed executed' });
}

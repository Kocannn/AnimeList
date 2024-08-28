import prisma from "../../../../libs/prisma";
import { NextResponse } from "next/server";
export async function POST(request) {
  const { name, email } =  await request.json();
  const data = { name, email }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    return new NextResponse("User Not Found", { status: 404 });
  }

  const newUser = await prisma.user.update({
    where: {
      email: data.email,
    },
    data: {
      name: data.name,
    },
  });
 const newComment = await prisma.comment.updateMany({
      where: {
        user_email: data.email
      },
      data:{
        user_name: data.name
      }
  })
  if (!newUser) return new NextResponse({ status: 500, isUpdated: false });
  else return new NextResponse({ status: 200, isUpdated: true });

}

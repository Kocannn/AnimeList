import prisma from "../../../../libs/prisma";

export async function POST(request){
  const {userId, content} = await request.json()
  const data = {userId, content}

  const createStatus = await prisma.forumPost.create({ data })
  if(!createStatus) return Response.json({status: 500, isCreated: false})
  else return Response.json({status: 200, isCreated: true})
}
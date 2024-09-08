import prisma from "../../../../libs/prisma"

export async function POST(request){
  const { name } = await request.json()
  const users = await prisma.user.findFirst({
    where: {
      name: name
    },
    include: {
      collections: true,
      comments: true,
      ratings: true,
      forumPosts: true,
    }
  })
  if(!users) return Response.json({status: 500})
  else return Response.json(users)
}
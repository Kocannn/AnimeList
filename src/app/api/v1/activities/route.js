
import prisma from "../../../../libs/prisma";

export async function POST(request){
  const {userId, action,  targetType} = await request.json();
  const data = {userId, action,  targetType};
  const createActivity = await prisma.activity.create({ data });

  if(!createActivity) return Response.json({status: 500, isCreated : false})
  else return Response.json({status:200, isCreated : true})
  
}
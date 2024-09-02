import prisma from "../../../../libs/prisma";

export async function POST(request){

    const { mediaId, userId, comment, userName, userImage } = await request.json();
    const data = { mediaId, userId, comment, userName, userImage };
    
    const createComment = await prisma.comment.create({ data })
    
    if(!createComment) return Response.json({status: 500, isCreated: false})
    else return Response.json({status: 200, isCreated: true})
}
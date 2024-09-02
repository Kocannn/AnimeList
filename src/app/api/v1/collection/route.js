import prisma from "../../../../libs/prisma";

export async function POST(request){

    const { mediaId, userId, title, image, mediaType } = await request.json();
    const data = { mediaId, userId, title, image, mediaType };
    const createCollection = await prisma.collection.create({ data })
    
    if(!createCollection) return Response.json({status: 500, isCreated: false})
    else return Response.json({status: 200, isCreated: true})
}
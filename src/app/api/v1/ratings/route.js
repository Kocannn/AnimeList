import prisma from "../../../../libs/prisma";

export async function POST(request) {
  const { mediaId, userId, rating } = await request.json();
  const data = { mediaId, userId, rating };
  const createRating = await prisma.rating.create({ data });
  if (!createRating) return Response.json({ status: 500, isUpdated: false });
  else return Response.json({ status: 200, isUpdated: true });
}

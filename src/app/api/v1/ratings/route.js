import prisma from "../../../../libs/prisma";

export async function POST(request) {
  const { anime_mal_id, user_email, ratings, anime_title } = await request.json();
  const data = { anime_mal_id, user_email, ratings, anime_title };

  const createRating = await prisma.rating.create({ data });
  if (!createRating) return Response.json({ status: 500, isUpdated: false });
  else return Response.json({ status: 200, isUpdated: true });
}

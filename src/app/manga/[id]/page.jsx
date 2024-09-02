import { getAnimeResponse } from "../../../libs/api-libs";
import Image from "next/image";
import CollectionButton from "../../../components/animeList/CollectionButton";
import { authUserSession } from "../../../libs/auth-libs";
import prisma from "../../../libs/prisma";
import Comment from "../../../components/animeList/Comment";
import CommentBox from "../../../components/animeList/CommentBox";
import Rating from "../../../components/animeList/Rating";
const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`manga/${id}`);
  const user = await authUserSession();
  const dataUser = await prisma.user.findFirst({
    where: { id: user?.id },
    include:{
      collections: {
        where:{
          mediaId: id
        }
      },
      ratings:{
        where:{
          mediaId: id
        }
      }
    }
  })
  return (
    <>
      <div className="flex py-4 px-4 gap-2 items-center">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex flex-col items-center">
            <Image
              src={anime.data.images.webp.image_url}
              height={200}
              width={250}
              className=" w-[full] rounded object-cover"
            />
            <div className="flex mt-2 w-full items-center justify-center flex-col gap-2">
              <div className="flex flex-cols items-center gap-2 justify-center">
                <Rating
                  mediaId={id}
                  userId={user?.id}
                  value={dataUser.ratings[0]?.rating}
                />
                 {dataUser.ratings[0]?.rating ? (
                  <p className="text-color-primary">{`${dataUser.ratings[0].rating} / 5`}</p>
                ) : (
                  ""
                )}
              </div>
              {!dataUser.collections[0] && user && (
                <CollectionButton
                  image={anime.data.images.webp.image_url}
                  mediaId={id}
                  title={anime.data.title}
                  userId={user?.id}
                  mediaType={"manga"}
                />
              )}
            </div>
          </div>
          <div className="flex-1 text-color-primary flow-root rounded-lg border py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-50">Title</dt>
                <dd className="text-gray-100 sm:col-span-2">
                  {anime.data.title}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-50">Genre</dt>
                <dd className="text-gray-100 sm:col-span-2">
                  {anime.data.genres.map((item, index) => {
                    return `${item.name}${
                      index < anime.data.genres.length - 1 ? ", " : ""
                    }`;
                  })}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-50">Studio</dt>
                <dd className="text-gray-100 sm:col-span-2">
                  {anime.data.authors.map((item, index) => {
                    return `${item.name}${
                      index < anime.data.authors.length - 1 ? ", " : " "
                    }`;
                  })}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-50">Rank</dt>
                <dd className="text-gray-100 sm:col-span-2">
                  {anime.data.rank}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-50">Score</dt>
                <dd className="text-gray-100 sm:col-span-2">
                  {anime.data.score}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-50">Chapters</dt>
                <dd className="text-gray-100 sm:col-span-2">
                  {anime.data.chapters ? anime.data.chapters : "N/A"}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-50">Synopsis</dt>
                <dd className="text-gray-100 sm:col-span-2 text-justify">
                  {anime.data.synopsis}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div></div>
      </div>
      <h2 className="text-center my-6 text-2xl font-bold text-color-primary sm:text-2xl">
        Comments
      </h2>
      {user && (
        <Comment
          mediaId={id}
          userId={user?.id}
          userName={user.name}
          userImage={user.image}
        />
      )}

      <CommentBox mediaId={id} />
    </>
  );
};

export default Page;

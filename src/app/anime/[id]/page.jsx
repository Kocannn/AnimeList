import dynamic from "next/dynamic";
import Image from "next/image";
import { authUserSession } from "../../../libs/auth-libs";
import prisma from "../../../libs/prisma";

import { getServerSideProps as getAnime } from "../../../libs/api-libs";

const VideoPlayer = dynamic(
  () => import("../../../components/utilities/VideoPlayer"),
  { ssr: false }
);
const Comment = dynamic(() => import("../../../components/animeList/Comment"), {
  ssr: false,
});
const CommentBox = dynamic(
  () => import("../../../components/animeList/CommentBox"),
  { ssr: false }
);
const CollectionButton = dynamic(
  () => import("../../../components/animeList/CollectionButton"),
  { ssr: false }
);
const Rating = dynamic(() => import("../../../components/animeList/Rating"), {
  ssr: false,
});



const Page = async ({ params: { id } }) => {
  const { props : {data: data}} = await getAnime(`anime/${id}`);
  const anime = data
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  const rating = await prisma.rating.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  return (
    <>
      <div className="flex py-4 px-4 gap-2 items-center">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex flex-col items-center">
            <Image
              src={anime.data.images.webp.image_url}
              alt={anime.data.images.jpg.image_url}
              height={200}
              width={250}
              className=" w-[full] rounded object-cover"
              loading="eager"
            />
            <div className="flex mt-2 w-full items-center justify-center flex-col gap-2">
              <div className="flex flex-cols items-center gap-2 justify-center">
                <Rating
                  anime_mal_id={id}
                  user_email={user?.email}
                  value={rating?.ratings}
                  anime_title={anime.data.title}
                />
                {rating?.ratings ? (
                  <p className="text-color-primary">{`${rating.ratings} / 5`}</p>
                ) : (
                  ""
                )}
              </div>
              {!collection && user && (
                <CollectionButton
                  anime_image={anime.data.images.webp.image_url}
                  anime_mal_id={id}
                  anime_title={anime.data.title}
                  user_email={user?.email}
                  type={"anime"}
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
                  {anime.data.studios.map((item, index) => {
                    return `${item.name}${
                      index < anime.data.studios.length - 1 ? ", " : " "
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
                <dt className="font-medium text-gray-50">Rating</dt>
                <dd className="text-gray-100 sm:col-span-2">
                  {anime.data.rating}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-50">Episodes</dt>
                <dd className="text-gray-100 sm:col-span-2">
                  {anime.data.episodes}
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
          anime_mal_id={id}
          anime_title={anime.data.title}
          user_email={user?.email}
          user_name={user.name}
          user_image={user.image}
          type={"anime"}
        />
      )}

      <CommentBox anime_mal_id={id} />
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;

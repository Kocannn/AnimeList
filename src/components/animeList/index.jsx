import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api, context }) => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 px-4 gap-4">
      {api.data?.map((anime) => {
        return (
          <Link
            href={`/${context}/${anime.mal_id}`}
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
            key={anime.mal_id}
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.images.jpg.image_url}
              width={350}
              height={350}
              className="w-full h-[350px] object-cover"
              loading="eager"
            />
            <h3 className="font-bold md:text-sm text-md p-4 justify-center items-center text-center">
              {anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;

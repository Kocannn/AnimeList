import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api, context }) => {
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {api.data?.map((anime) => (
          <div className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
            <Link
              href={`/${context}/${anime.mal_id}`}
              key={anime.mal_id}
            >
              <div className="flex flex-col items-center">
                <Image
                  src={anime.images.webp.image_url}
                  alt={anime.title}
                  width={185}
                  height={265}
                  className="w-[185px] h-[265px] object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64"
                />
                <h3 className="mt-4 font-bold text-sm text-center text-color-primary">
                  {anime.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;

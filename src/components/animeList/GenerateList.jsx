import Image from "next/image";
import Link from "next/link";

export const GenerateAnime = ({ api }) => {
  return (
    <>
      {api.data?.map((item) => {
        return (
          <Link
            href={`/anime/${item.mal_id}`}
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
            key={item.mal_id}
          >
            <Image
              src={item.images.webp.image_url}
              alt="..."
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              style={{ height: "300px" }}
              loading="eager"
            />
            <h3 className="font-bold md:text-sm text-md p-4 justify-center items-center text-center">
              {item.title}
            </h3>
          </Link>
        );
      })}
    </>
  );
};

export const GenerateManga = ({ api }) => {
  return (
    <>
      {api.data?.map((item) => {
        return (
          <Link
            href={`/manga/${item.mal_id}`}
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
            key={item.mal_id}
          >
            <Image
              src={item.images.webp.image_url}
              alt="..."
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              style={{ height: "300px" }}
            />
            <h3 className="font-bold md:text-sm text-md p-4 justify-center items-center text-center">
              {item.title}
            </h3>
          </Link>
        );
      })}
    </>
  );
};

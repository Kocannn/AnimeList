import Link from "next/link";
import Image from "next/image";

export const AnimeListCollection = ({ user }) => {
  let collection = user?.collections;
  collection = collection?.filter((item) => {
    return item.mediaType === "anime";
  })
  return (
    <>
       {
      collection?.length > 0 ? <section className="grid md:grid-cols-8 sm:grid-cols-4 grid-cols-2  p-4 gap-4">
      {collection?.map((item, index) => {
        return (
          <Link
          href={`/${item.mediaType}/${item.mediaId}`}
          className="cursor-pointer text-gray-800 hover:text-color-accent transition-all"
          key={index}
        >
          <Image
            src={item.image}
            alt="..."
            width={300}
            height={300}
            className="w-full h-[60] object-cover"
          />
          <h3 className="font-bold md:text-sm text-md p-4 justify-center items-center text-center">
            {item.title}
          </h3>
        </Link>
        );
      })}
    </section> : <h2 className="flex py-24 justify-center text-color-primary text-2xl">Anda belum memiliki anime di collection...</h2>
    }
  </>
  );

};

export const MangaListCollection = ({ user }) => {
  let collection = user?.collections;
  collection = collection?.filter((item) => {
    return item.mediaType === "manga";
  })
  return (
    <>
       {
      collection?.length > 0 ? <section className="grid md:grid-cols-8 sm:grid-cols-4 grid-cols-2  p-4 gap-4">
      {collection?.map((item, index) => {
        return (
          <Link
          href={`/${item.mediaType}/${item.mediaId}`}
          className="cursor-pointer text-gray-800 hover:text-color-accent transition-all"
          key={index}
        >
          <Image
            src={item.image}
            alt="..."
            width={300}
            height={300}
            className="w-full h-[60] object-cover"
          />
          <h3 className="font-bold md:text-sm text-md p-4 justify-center items-center text-center">
            {item.title}
          </h3>
        </Link>
        );
      })}
    </section> : <h2 className="flex py-24 justify-center text-color-primary text-2xl">Anda belum memiliki anime di collection...</h2>
    }
  </>
  );

};

import Image from "next/image";
import Link from "next/link";

const Page = ({image, user, active,login, params}) => {
  return (
    <>
      <div className="bg-[#1d2024] h-72 flex flex-row px-40 items-end gap-9 ">
        <div className="w-40 h-40 ">
          <Image
            src={image}
            alt={`${user}'s Profile Image`}
            width={160}
            height={160}
            className="object-cover"
          />
        </div>
        <div className="flex flex-row w-full justify-between mb-4 items-center">
          <h1 className="text-color-primary text-2xl">{user}</h1>
          {params !== login && <button className="bg-color-primary text-color-dark px-4 py-1 rounded transition-all shadow-xl text-xl hover:bg-opacity-80"> Follow </button>}
        </div>
      </div>

      <div className="bg-color-primary py-4">
        <div className="flex justify-center space-x-8  text-gray-600 ">

          <Link href={`/users/${user}`}>
            <p className={`hover:text-blue-500 ${active == 1 && "text-blue-500"}`}>Overview</p>
          </Link>

          <Link href={`/users/${user}/animeList`}>
            <p className={`hover:text-blue-500 ${active == 2 && "text-blue-500"}`}>Anime List</p>
          </Link>

          <Link href={`/users/${user}/mangaList`}>
            <p className={`hover:text-blue-500 ${active == 3 && "text-blue-500"}`}>Manga List</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;

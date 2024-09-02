import Image from "next/image";
import Link from "next/link";

const Page = ({image, user, active}) => {
  return (
    <>
      <div className="bg-[#1d2024] h-72 flex flex-col justify-center items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={`${user}'s Profile Image`}
            width={160}
            height={160}
            className="object-cover"
          />
        </div>
        <h1 className="text-color-primary text-2xl mt-4">{user}</h1>
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

import Link from "next/link";
import Image from "next/image";
import prisma from "../../../../libs/prisma";
import { authUserSession } from "../../../../libs/auth-libs";
const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });
  return (
    <>
    {
      collection.length > 0 ? <section className="grid md:grid-cols-8 sm:grid-cols-4 grid-cols-2  p-4 gap-4">
      {collection.map((item, index) => {
        return (
          <Link
          href={`/${item.type}/${item.anime_mal_id}`}
          className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
          key={index}
        >
          <Image
            src={item.anime_image}
            alt="..."
            width={300}
            height={300}
            className="w-full h-[60] object-cover"
          />
          <h3 className="font-bold md:text-sm text-md p-4 justify-center items-center text-center">
            {item.anime_title}
          </h3>
        </Link>
        );
      })}
    </section> : <h2 className="flex py-24 justify-center text-color-primary text-2xl">Anda belum memiliki anime di collection...</h2>
    }
    </>
  );
};

export default Page;

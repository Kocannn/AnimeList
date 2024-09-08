import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

const Page = ({ users }) => {
  const { forumPosts, image } = users;

  return (
    <section className="my-4 bg-white rounded-lg">
    {forumPosts.map((items, index) => (
      <div key={index} className="flex flex-col mb-4 p-4 border shadow-md rounded-lg">
        <div className="flex items-start">
          <Image
            src={image}  
            width={40}
            height={40}
            className="rounded-full"
            alt={users.name}
          />
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold">{users.name}</p>
              <p className="text-sm text-gray-400">
                {formatDistanceToNow(new Date(items.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
            <div className="flex break-all text-justify">
            <p className="mt-2 text-gray-700">{items.content}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>
  );
};

export default Page;

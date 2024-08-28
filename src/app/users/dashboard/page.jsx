import Link from "next/link";
import { authUserSession }  from "../../../libs/auth-libs";
import Image from "next/image";
import CRUDModal from "../../../components/utilities/CRUDModals";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="">
      <div className="text-color-primary flex flex-col justify-center items-center">
        <h5 className="text-4xl py-6 font-bold">Welcome</h5>
        <Image
          src={user.image} 
          alt="..."
          width={250}
          height={250}
          className="rounded-full border border-color-dark outline-inhereth"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex  w-3/4 h-auto my-4 bg-color-primary mx-auto p-4 rounded gap-4 flex-col">
          <div className="flex flex-row justify-center">
            <p className="text-gray-700">{user.name}</p>
          </div>
          <div className="flex flex-row justify-center ">
            <p className="text-gray-700">{user.email}</p>
          </div>
        </div>

        <Link href='/users/dashboard/collection' className="flex  w-3/4 h-auto mb-4 bg-color-secondary hover:bg-color-secondary hover:bg-opacity-90 mx-auto p-4 rounded gap-4 flex-col">
          <div className="flex flex-row justify-center ">
            <p className="text-gray-700">My Collection</p>
          </div>
        </Link>
        <Link href='/users/dashboard/comment' className="flex  w-3/4 h-auto mb-4 bg-color-secondary hover:bg-color-secondary hover:bg-opacity-90 mx-auto p-4 rounded gap-4 flex-col">
          <div className="flex flex-row justify-center ">
            <p className="text-gray-700">My Comment</p>
          </div>
        </Link>
            <CRUDModal email={user.email} />
        <Link
          href="/api/auth/signout"
          className="flex  w-3/4 mb-4 h-auto bg-red-500 mx-auto p-4 rounded gap-4 flex-col hover:bg-red-600"
        >
          <div className="flex items-center justify-center">
            <p>Log out</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;

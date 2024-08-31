import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./userActionButton";
import { authUserSession } from "../../libs/auth-libs";

const NavBar = async () => {
  const user = await authUserSession();
  return (
    <header className="bg-gradient-to-b from-[#222831] via-[#1d2024] to-[#222831] border-b border-color-primary mb-10">
      <div className="flex md:items-center md:flex-row sm:flex-row items-center justify-between p-4 gap-4">
        <div className="flex gap-4 items-center">
          <Link href="/">
            <p className="relative group font-bold text-color-primary text-2xl hover:text-gray-400">
              AnimeList
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </p>
          </Link>
          <div className="flex gap-4 ml-10 text-color-primary">
            <Link href="/">
              <p className="relative group hover:text-gray-400">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
            <Link href="/forum">
              <p className="relative group hover:text-gray-400">
                Forum
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
            <Link href="/forum">
              <p className="relative group hover:text-gray-400">
                Social
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <InputSearch />
          {user ? (
            <UserActionButton users={user} />
          ) : (
            <div className="flex items-center">
              <Link
                href="/login"
                className="flex  items-center justify-center p-2 w-full rounded-full text-color-primary transition-all duration-300"
                
              >
              <p className="relative group hover:text-gray-400" >
                Sign in
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;

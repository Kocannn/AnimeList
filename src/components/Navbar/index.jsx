
import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./userActionButton";
import { authUserSession } from "../../libs/auth-libs";

const NavBar = async () => {
  const user = await authUserSession();
  return (
    <header className="bg-color-accent">
      <div className="flex md:items-center md:flex-row sm:flex-row items-center justify-between p-4 gap-2 ">
        <Link href="/" className="font-bold text-color-primary text-2xl">
          AnimeList
        </Link>
        <div className="flex gap-4">
          <InputSearch />
          {user ? (
            <> 
              <UserActionButton users={user} />
            </>
          ) : (
            <div className="flex items-center w-28">
              <Link
                href="/login"
                className="flex justify-center border p-2 w-full rounded-full bg-gray-300 shadow-xl hover:bg-gray-200"
              >
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
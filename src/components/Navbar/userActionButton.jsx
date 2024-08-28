"use client";
import { Users } from "@phosphor-icons/react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";


const UserActionButton = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const menuRef = useRef(null);
	const menuHandler = () => setMenuVisible(!menuVisible)

	useEffect(()=> {
		const handleClickOutside = (event) => {
			if(menuRef.current && !menuRef.current.contains(event.target)){
				setMenuVisible(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return() => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])



  return (
    <div className="flex justify-between gap-2">
      <div className="flex relative items-center ml-auto" ref={menuRef}>
        <div className="inline-flex items-center overflow-hidden rounded-full border">
          <button name="menu" onClick={menuHandler} className="h-full p-2 text-color-secondary bg-gray-50 hover:bg-gray-100 hover:text-gray-700">
            <Users size={24} />
          </button>
        </div>
				{menuVisible && (

        <div
          className="absolute top-12 end-1 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-color-primary shadow-lg transition-all ease-in-out duration-200 "
        >
          <div className="p-2">
            <Link
              href="/users/dashboard/collection"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              View Collection
            </Link>

            <Link
              href="/users/dashboard/comment"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              View Comment
            </Link>

            <Link
              href="/users/dashboard"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              View Account
            </Link>

            <div>
              <Link
							href="/api/auth/signout"
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
							>
                Log out
              </Link>
            </div>
          </div>
        </div>
				)}

      </div>
    </div>
  );
};

export default UserActionButton;
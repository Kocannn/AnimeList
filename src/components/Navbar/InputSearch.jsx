"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (ev) => {
    const keyword = searchRef.current.value;
    if (keyword.trim()) {
      ev.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  
  const handleKeyDown = (ev) => {
    if (ev.key === "Enter") {
      handleSearch(ev);
    }
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-64 p-2 pl-12 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        ref={searchRef}
        onKeyDown={handleKeyDown}
      />
      <button
        name="search-button"
        className="absolute left-2 flex items-center justify-center p-2 rounded-full hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={20} weight="bold" />
      </button>
    </div>
  );
};

export default InputSearch;

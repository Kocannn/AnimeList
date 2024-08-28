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
    <div className="relative items-center">
      <input
        placeholder="cari anime..."
        className="p-2 rounded"
        ref={searchRef}
        onKeyDown={handleKeyDown}
      />
      <button name="search-button" className="absolute md:top-2 md:end-5 start-40 top-2 " onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;

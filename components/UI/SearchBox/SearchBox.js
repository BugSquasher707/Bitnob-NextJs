import { useState } from "react";
import { useRouter } from "next/router";
import style from "../../shared/Header/Header.module.css";
import { BiSearch } from "react-icons/bi";

const SearchBox = () => {
  const router = useRouter();

  const [searchVal, setSearchVal] = useState("");

  const handleSearchBar = async (e) => {
    e.preventDefault();

    if (!/(\s)/g.test(searchVal) && searchVal != '') {
      router.push(`/blog/search/${searchVal}`);
      setSearchVal("");
    }
  };

  return (
    <>
      <div
        className={`pt-10 flex relative justify-end items-center ${style.searchContainer}`}
      >
        <form className="relative" onSubmit={handleSearchBar}>
          <BiSearch className="absolute top-3 text-sm ml-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="py-2 px-2 pl-9 text-sm font-semibold text-gray-500 focus:outline-none rounded-lg border"
          />
        </form>
      </div>
    </>
  );
};

export default SearchBox;

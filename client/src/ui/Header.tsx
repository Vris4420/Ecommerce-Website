import { useState } from "react";
import { logo } from "../assets";
import { IoClose, IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="w-full bg-red-300">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        <img src={logo} alt="logo" className="w-44" />
        <div className="hidden md:inline-flex max-w-3xl w-full relative">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="search products"
            className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
          />
          {searchText ? (
            <IoClose
              onClick={() => setSearchText("")}
              className="top-2.5 right-4 text-xl absolute cursor-pointer duration-200 hover:text-red-500"
            />
          ) : (
            <IoSearchOutline className="top-2.5 right-4 text-xl absolute " />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

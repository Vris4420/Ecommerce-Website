import { useState } from "react";
import { logo } from "../assets";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";

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
        <div className="flex items-center gap-x-6 text-2xl">
          <FiUser className="hover:text-skyText duration-200 cursor-pointer  bg-yellow-600 " />
          <div className="relative block bg-yellow-600">
            <FiStar className="hover:text-skyText duration-200 cursor-pointer " />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </div>
          <div className="relative block bg-yellow-600">
            <FiShoppingBag className="hover:text-skyText duration-200 cursor-pointer " />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

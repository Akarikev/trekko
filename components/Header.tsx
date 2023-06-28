"use client";

import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
function Header() {
  return (
    <header>
      <div className="flex flex-col items-center p-5 md:flex-row bg-gray-500/10">
        {/* graidiemt color */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#515153] rounded-md filter blur-3xl opacity-50 -z-50 " />
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="trello logo"
          width={300}
          height={100}
          className="object-contain pb-10 w-44 md:56 md:pb-0"
        />
        <div className="flex items-center justify-end flex-1 w-full space-x-5">
          {/* searcjh box */}
          <form className="flex items-center flex-1 p-2 space-x-5 bg-white rounded-lg shadow-md md:flex-initial">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="search task"
              className="flex-1 p-2 outline-none "
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/* avatar */}
          <Avatar
            name="Prince Elorm"
            round
            color="#515153"
            size="50"
            className="font-[inter]"
          />
        </div>
      </div>

      {/* suggestion */}
      <div className="flex items-center justify-center py-2 md:py-5">
        <p className="flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl p-5 text-[#515153]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#515153] mr-1" />
          Kev is summarizing your tasks!... 🎉
        </p>
      </div>
    </header>
  );
}

export default Header;

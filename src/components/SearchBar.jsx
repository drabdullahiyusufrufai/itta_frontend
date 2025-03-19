import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { HiMenuAlt1, HiChevronDown } from 'react-icons/hi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Link } from 'react-router-dom';
const SearchBar = ({ toggleSidebar, handleSearch }) => (
  <div className="flex items-center justify-between gap-3 px-3 py-4 bg-secondary sticky top-0 z-40 ">
    <button
      className="block md:hidden text-white"
      onClick={toggleSidebar}
    >
      <HiMenuAlt1 size={30} />
    </button>
    <input
      type="text"
      placeholder="Search..."
      onChange={handleSearch}
      className="w-full max-w-sm px-4 py-2 text-sm rounded-full bg-white shadow-md focus:outline-none"
    />
    <div className="flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="px-4 py-2 bg-bgHover flex items-center gap-4 rounded-md shadow ">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
            <FaUserCircle size={30} />

          </div>
          <HiChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <DropdownMenuLabel className="px-4 py-2 text-gray-700 font-bold">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="border-t border-gray-200" />
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to={"/signup"}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to={"/signup"}>Notification</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to={"/signup"}>Books</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to={"/signup"}>Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
);

export default SearchBar;


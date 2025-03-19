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
          <DropdownMenuTrigger  className="px-4 py-2 bg-bgHover flex items-center gap-4 rounded-md shadow ">
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
  
export default SearchBar

// import React, { useState } from "react";
// import { myCourses, recommendations } from "../constants/data";
// import { coursesOffered } from "../constants/courses";
// import CourseCard from "../components/CourseCard";
// import logo from "../assets/images/logo/logo.png";
// import { Link } from "react-router-dom";
// import { HiOutlineUserCircle } from "react-icons/hi2";



// const Courses = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filterCourses = (courses) => {
//     return courses.filter(
//       (course) =>
//         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.description.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex shadow-lg px-4 rounded-sm justify-between sticky top-0 bg-gray-100 z-50 py-4  items-center mb-8">
//         <div className="flex item-center  w-1/2 gap-3">
//           <Link to={"/"}>
//             <img src={logo} alt="ITTA Learning" className="bg-[#245E86] w-16" />
//           </Link>
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearch}
//             placeholder="Search..."
//             className="p-3 border-[1px] border-gray-700 rounded-lg  w-full "
//           />
//         </div>

        
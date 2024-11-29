import React from "react";
import { HiOutlineSearch, HiOutlineMoon, HiOutlineSun, HiMenuAlt1, HiX } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";





export const BookCard = ({ title, author, image }) => (
  <div className="bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg flex flex-col">
    <img
      src={image}
      alt={title}
      className="rounded-md mb-4 h-40 object-cover"
    />
    <h3 className="text-md font-semibold">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{author}</p>
  </div>
);

export const Section = ({ title, books }) => (
  <section className="my-8">
    <h2 className="text-lg text-white font-semibold mb-4">{title}</h2>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  </section>
);
 
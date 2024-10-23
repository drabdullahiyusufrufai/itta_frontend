import React from "react";
import logo from "../assets/images/logo.jpeg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaMailBulk,
  FaPhone,
  FaFacebook,
} from "react-icons/fa"; // Importing React Icons
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";

import { BsMailbox } from "react-icons/bs";

const Footer = () => {
  // Scroll Back to Top Functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#080a54]  py-10 border-t">
      <div className="container mx-auto">
        {/* Grid Layout for Footer Sections */}
        <div className="md:grid flex px-4  flex-wrap items-center justify-center gap-x-10 gap-y-10  lg:grid-cols-auto md:grid-cols-4 md:gap-8 text-gray-700">
        <div className="text-white ">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  to="https://medium.com/@school.itta/about-us-c12f022cfad3?postPublishedType=repub"
                  className="hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/cheatsheets"
                  className="hover:underline"
                >
                  CheatSheets
                </Link>
              </li>
              <li>
                <Link
                  to={`categories/${"smartphones"}`}
                  className="hover:underline"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  to={`categories/${"vehicle"}`}
                  className="hover:underline"
                >
                  Answers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-4">Contacts</h3>
              <h2 className="flex items-center gap-2 my-3">
                <IoMail />

                <Link to="https://medium.com/@school.itta/about-us-c12f022cfad3?postPublishedType=repub" className="text-white">shool.itta@gmail.com</Link>
              </h2>
            </div>
            <div>
              <div className="flex text-white  gap-2 items-center my-3">
                <FaWhatsapp /> <p>+2347037411315 </p>
              </div>
            </div>
          </div>
          {/* Quick Links Section */}
          <div className="text-white ">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  to={`categories/${"electronics"}`}
                  className="hover:underline"
                >
                  Partnership
                </Link>
              </li>
              <li>
                <Link
                  to={`categories/${"womens-clothing"}`}
                  className="hover:underline"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to={`categories/${"smartphones"}`}
                  className="hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={`categories/${"vehicle"}`}
                  className="hover:underline"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg mt-[-70px] text-white font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-white ">
              {/* React Icons for Social Media */}
              <a href="#" aria-label="Facebook" className="hover:text-pink-600">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-pink-600">
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-600"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-pink-600">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-10 text-center">
          <button
            onClick={scrollToTop}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back to Top
          </button>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 text-center text-sm text-slate-200 ">
          &copy; {new Date().getFullYear()} ITTA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

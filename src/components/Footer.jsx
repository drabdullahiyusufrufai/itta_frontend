import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-gray-700">
      {/* Subscribe Section */}
      <div className="bg-[#517B9D] text-white text-center py-6 px-4 md:flex md:justify-between md:items-center max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 md:mb-0">
          Subscribe for our daily Updates...
        </h2>
        <form className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md text-gray-700 focus:outline-none"
          />
          <button className="bg-[#1D2836] px-3 py-2 rounded-md hover:shadow-lg text-white">
            Subscribe
          </button>
        </form>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold">ITTA</h3>
          <p className="mt-2">
            Join a community of tech enthusiasts and lifelong learners eager to
            explore, build, and master new skills in cutting-edge technologies.
          </p>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="mt-2 space-y-1">
            <li>Chatsheets</li>
            <li>Blog</li>
            <li>Webinars</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li>Team</li>
            <li>Partnership</li>
            <li>Contact Us</li>
            <li>Services</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center md:justify-start space-x-6">
          <Link to="#" className="text-gray-800">
            <FaInstagram size={40} />
          </Link>
          <Link to="#" className="text-gray-800">
            <FaFacebook size={40} />
          </Link>
          <Link to="#" className="text-gray-800">
            <FaWhatsapp size={40} />
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center mx-auto my-8"
      >
        <IoArrowUpCircleOutline size={60} className="text-gray-800" />
      </button>

      {/* Copyright Section */}
      <div className="bg-primary text-white py-3 text-center">
        <p>&copy; Copyright ITTA, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

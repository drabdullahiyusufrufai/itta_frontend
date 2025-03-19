// src/layouts/Layout.js
import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import SearchBar from '../../components/SearchBar';
import { Outlet } from "react-router-dom";

const Layout = ({ title, navs }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {z
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen">
      <SideBar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        navs={navs} // Dynamic Navigation Items
        title={title} // Dynamic Title
      />
      <div className="md:ml-64">
        <SearchBar handleSearch={setSearchQuery} toggleSidebar={toggleSidebar} />
        <div className="container mx-auto px-4 py-8">
          <Outlet context={{ searchQuery }} />
        </div>
      </div>
    </div>
  );
};

export default Layout;

import React, { useState, useEffect } from "react";
import { Header, Sidebar, Section } from "../components/BookComponent";
import { bookData } from "../constants/books";

function Books() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
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
    <div className="min-h-screen bg-primary dark:bg-darkPrimary text-textPrimary dark:text-textDark transition-all duration-300">
      <Sidebar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="md:ml-64">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-6">
          {bookData.sections.map((section, index) => (
            <Section key={index} title={section.title} books={section.books} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default Books;


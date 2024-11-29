import React, { useContext, useState } from "react";
import { Section } from "../components/BookComponent";
import { bookData } from "../constants/books";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

function Books() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const filteredBooks = (data) => {
    return data.sections
      .map((section) => ({
        ...section,
        books: section.books.filter((book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((section) => section.books.length > 0); // Only include sections with matching books
  };

  return (
    <div className={`min-h-screen  transition-all`}>
      <SideBar
        title={"Books"}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="md:ml-64">
        <SearchBar handleSearch={handleSearch} toggleSidebar={toggleSidebar} />
        <main className="p-6">
          {filteredBooks(bookData).map((section, index) => (
            <div key={index}>
              <Section title={section.title} books={section.books} />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Books;

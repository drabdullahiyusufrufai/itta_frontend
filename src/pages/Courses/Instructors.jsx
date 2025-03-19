import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { booksNavs } from "../../constants/Navs";

export default function Instructors() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch or use static data for author's books
    setBooks([
      { id: 1, title: "Book by Author A", author: "Author A", image: "https://via.placeholder.com/150" },
      { id: 2, title: "Book by Author B", author: "Author B", image: "https://via.placeholder.com/150" },
      { id: 3, title: "Book by Author C", author: "Author C", image: "https://via.placeholder.com/150" },
    ]);
  }, []);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold my-4">Author's Books</h1>
      <input
        type="text"
        placeholder="Search books by author..."
        className="w-full p-2 border rounded-lg mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books
          .filter((book) => book.author.toLowerCase().includes(search.toLowerCase()))
          .map((book) => (
            <div key={book.id} className="p-4 border rounded-lg shadow-lg">
              <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded-lg" />
              <h2 className="text-lg font-semibold mt-2">{book.title}</h2>
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { booksNavs } from "../../constants/Navs";

export default function PopularCourses() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch or use static data for popular books
    setBooks([
      { id: 1, title: "Popular Book 1", author: "Author X", rating: 4.8, image: "https://via.placeholder.com/150" },
      { id: 2, title: "Popular Book 2", author: "Author Y", rating: 4.7, image: "https://via.placeholder.com/150" },
      { id: 3, title: "Popular Book 3", author: "Author Z", rating: 4.9, image: "https://via.placeholder.com/150" },
    ]);
  }, []);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold my-4">Popular Books</h1>
      <input
        type="text"
        placeholder="Search popular books..."
        className="w-full p-2 border rounded-lg mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books
          .filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
          .map((book) => (
            <div key={book.id} className="p-4 border rounded-lg shadow-lg">
              <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded-lg" />
              <h2 className="text-lg font-semibold mt-2">{book.title}</h2>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p className="text-sm text-yellow-500">⭐ {book.rating}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
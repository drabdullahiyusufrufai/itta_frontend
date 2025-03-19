import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { booksNavs } from "../../constants/Navs";

export default function CategoriesCourses() {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch or use static data for book categories
    setCategories([
      { id: 1, name: "Fiction" },
      { id: 2, name: "Non-fiction" },
      { id: 3, name: "Science" },
      { id: 4, name: "History" },
      { id: 5, name: "Romance" },
    ]);
  }, []);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold my-4">Course Categories</h1>
      <input
        type="text"
        placeholder="Search categories..."
        className="w-full p-2 border rounded-lg mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories
          .filter((category) => category.name.toLowerCase().includes(search.toLowerCase()))
          .map((category) => (
            <div key={category.id} className="p-4 border rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-semibold">{category.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

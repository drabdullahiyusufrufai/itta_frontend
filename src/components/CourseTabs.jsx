import React, { useState } from "react";
import courseCategories from "../constants/courseCategory";

function CourseTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      {/* Tabs */}
      <div className="flex flex-wrap border-b">
        {courseCategories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-lg ${
              activeTab === index
                ? "border-b-2 border-blue-600 font-bold text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseCategories[activeTab]?.subcategories.map((subcategory, index) => (
          <div
            key={subcategory.id}
            className={`p-5 ${
              index === 0 ? "bg-[#E7F1F6]" : "bg-white"
            } rounded-md shadow-sm`}
          >
            <p className="font-bold text-gray-800">{subcategory.name}</p>
            <p className="text-sm my-3">{subcategory.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseTabs;

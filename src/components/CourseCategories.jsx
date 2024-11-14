import React, { useState } from "react";
import courseCategories from "../constants/courseCategory";

function CourseCategoriesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      {/* Tabs */}
      <div className="flex border-b">
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
      <div className="p-4 flex w-full flex-wrap gap-4">
        {courseCategories[activeTab]?.subcategories.map((subcategory,index) => (
          <div
            key={subcategory.id}
            className={`p-5 ${index==0?"bg-[#E7F1F6]":"bg-white"}  w-[48%] rounded-md mb-2 shadow-sm`}
          >
            <p className="font-bold  text-gray-800">

            {subcategory.name}
            </p>
            <p className="text-sm my-3">
              {subcategory.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCategoriesTabs;

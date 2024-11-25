import React from "react";
const CourseCard = ({ title, description, image, progress }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {progress !== undefined && (
          <div>
            <div className="relative h-3 rounded-full bg-gray-200 overflow-hidden">
              <div
                className={`h-3 rounded-full`}
                style={{
                  width: `${progress}%`,
                  backgroundColor:
                    progress > 50 ? "green" : progress > 30 ? "blue" : "red",
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-700 mt-2">{progress}%</p>
          </div>
        )}
      </div>
    );
  };

  export default CourseCard;
  
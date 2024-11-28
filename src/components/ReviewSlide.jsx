import React, { useState } from "react";
import StudentReviewCard from "./ReviewCard";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { LuArrowLeftCircle,LuArrowRightCircle } from "react-icons/lu";


const ReviewSlider = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  // Navigate to the next slide
  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex items-center justify-center py-10 bg-gray-100">
      <div className="relative rounded-3xl shadow-md bg-white w-full max-w-5xl overflow-hidden my-10">
        {/* Slide Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <StudentReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={goToPrevious}
            className="text-black px-3 py-2 focus:outline-none"
          >
            <LuArrowLeftCircle size={40} className="text-[#245E86]" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={goToNext}
            className="text-black px-3 py-2 focus:outline-none"
          >
            <LuArrowRightCircle  size={40} className="text-[#245E86]" />
          </button>
        </div>

        {/* Dots for Navigation */}
        <div className="absolute bottom-2 lg:left-[55%] left-1/2  transform -translate-x-1/2 flex space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-[#245E86]"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;

import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full bg-white rounded-lg  py-6 px-4 my-6 max-w-3xl mx-auto">
      {/* Avatar */}
      <div className="sm:w-1/3 w-28 h-28 sm:h-auto flex justify-center items-center">
        <img
          className="object-cover rounded-lg w-full h-full "
          src={review.avatar}
          alt="Student Avatar"
        />
      </div>

      {/* Quote and Details */}
      <div className="sm:w-2/3 flex flex-col items-center  w-full sm:pl-8 mt-4 sm:mt-0 text-center sm:text-left">
        {/* Quote Text */}
          <p className="text-[#245E86] text-4xl sm:text-6xl font-bold flex justify-center sm:justify-start">
            “
          </p>
        <div className="text-gray-800 text-base sm:text-lg leading-relaxed">
          <p className="">{review.reviewText}</p>
        </div>

        {/* Name and Title */}
        <div className="mt-4 text-gray-900">
          <p className="font-semibold text-base sm:text-lg">
            {review.studentName}
          </p>
          <p className="text-sm italic sm:text-base text-gray-600">
            {review.courseName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

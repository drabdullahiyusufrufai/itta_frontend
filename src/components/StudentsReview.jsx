import React from "react";

const StudentReviewCard = ({ review }) => {
  return (
    <div className="flex items-center justify-center w-full bg-white rounded-lg shadow-md py-2 my-10 px-3 max-w-3xl mx-auto">
      {/* Avatar */}
      <div className="w-1/3 flex justify-center">
        <img
          className="object-contain rounded-lg"
          src={review.avatar}
          alt="Student Avatar"
        />
      </div>

      {/* Quote and Details */}
      <div className="w-2/3 pl-8">
        {/* Quote Text */}
        <div className="text-gray-800 text-lg leading-relaxed">
          <p className="text-blue-500 text-[100px] font-bold w-full items-center justify-center flex">“</p>
          <p>

          {review.reviewText}
          </p>
        </div>

        {/* Name and Title */}
        <div className="text-right">
          <p className="font-semibold text-gray-900 text-lg">{review.studentName}</p>
          <p className="text-gray-600">{review.courseName}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentReviewCard;

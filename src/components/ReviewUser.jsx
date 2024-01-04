import React from "react";
import Stars from "../assets/stars.png";

const ReviewUser = ({ review }) => {
  const { text, rating, time_created, user } = review;

  return (
    <div className="border p-4 my-4">
      <div className="flex items-center mb-2">
        <img
          src={user.image_url}
          alt={`${user.name}'s profile`}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-gray-500">{time_created}</p>
        </div>
      </div>
      <p className="mb-4">{text}</p>
      <div className="flex items-center">
        <div className="flex items-center">
          {Array.from({ length: rating }, (_, index) => (
            <img src={Stars} width={20} height={20} />
          ))}
        </div>
        <p className="ml-2">{rating}</p>
      </div>
    </div>
  );
};

export default ReviewUser;

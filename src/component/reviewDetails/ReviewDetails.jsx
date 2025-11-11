import React from "react";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router";

const ReviewDetails = () => {
  const reviewDetails = useLoaderData();
  const {
    _id,
    foodPhoto,
    foodName,
    restaurantName,
    reviewerName,
    restaurantLocation,
    reviewText,
    Rating,
    reviewDate,
  } = reviewDetails;

  return (
    <div className="grid grid-cols-2">
      <div>
        <img className="h-[600px] w-full" src={foodPhoto}></img>
      </div>

      <div className="">
        <div className="flex justify-center ml-6 border mb-20 items-center px-4 py-2 gap-2 text-lg hover:bg-[#FFCD00] absolute top-20 bg-transparent  text-[#CE2600] font-bold">
          <FaArrowLeft />
          <NavLink to="/" className="">
            Back to Home
          </NavLink>
        </div>

        <div className="mt-20 pl-6">
          <h2 className="font-bold text-2xl underline">
            Food Name : {foodName}
          </h2>
          <div className="py-5 text-xl">
            <p>Restaurant Name : {restaurantName}</p>
            <p>Restaurant Location : {restaurantLocation}</p>
          </div>
          <p>Reviewer Name : {reviewerName}</p>
          <p>Comments : {reviewText}</p>
          <p>Date : {reviewDate}</p>
          <p className="flex items-center gap-2">
            Rating : {Rating}
            <span className="text-yellow-500">
              <FaStar />
            </span>
          </p>
        </div>

        <div className="flex justify-center mt-10 items-center border ml-6 px-4 py-2 gap-2 text-lg hover:bg-[#FFCD00] absolute bg-transparent  text-[#CE2600] font-bold">
          <FaArrowLeft />
          <NavLink to="/allReviews" className="">
            Back to All Reviews
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;

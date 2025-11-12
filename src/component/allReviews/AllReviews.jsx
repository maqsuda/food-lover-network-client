import React from "react";
import { useLoaderData } from "react-router";
import Review from "../review/Review";

const AllReviews = () => {
  const allData = useLoaderData();

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#CE2600] py-10 text-center">
        All Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto md:py-10">
        {allData.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;

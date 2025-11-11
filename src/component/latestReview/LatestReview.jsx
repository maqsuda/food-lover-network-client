import React, { use } from "react";
import Review from "../review/Review";
import { Link } from "react-router";

const LatestReview = ({ featuredReviewsPromise }) => {
  const featureData = use(featuredReviewsPromise);
  //   console.log(featureData);
  return (
    <div>
      <h2 className="text-5xl font-bold text-[#CE2600] py-10 text-center">
        Featured Reviews{" "}
      </h2>

      <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto py-10">
        {featureData.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/allreviews"
          className="btn bg-white font-bold text-[#CE2600] hover:bg-[#de9686] px-10 mb-10"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default LatestReview;

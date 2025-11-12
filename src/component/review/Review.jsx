import React from "react";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Review = ({ review }) => {
  const {
    _id,
    foodPhoto,
    foodName,
    restaurantName,
    reviewerName,
    restaurantLocation,
    Rating,
    reviewDate,
  } = review;

  // const [star, setStar] = useState(Rating);
  // setStar(Rating)
  // // const starVal = star.indexOf(0);
  // console.log(star);

  //   console.log(review.foodName);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-5 pt-5">
        <img
          src={foodPhoto}
          alt="Shoes"
          className="rounded-xl w-full h-[300px]"
        />
      </figure>
      <div className="card-body ">
        <div className="flex justify-between items-center">
          <h2 className="card-title underline">Food Name : {foodName}</h2>
          <span className="btn bg-white text-[#CE2600] border-none">
            <FaHeart />
          </span>
          {/* <button className="btn text-white bg-[#CE2600]">Favorite</button> */}
        </div>

        <div className="">
          <p>
            Restaurant Name :<span className="font-bold">{restaurantName}</span>
          </p>
          <p>
            Restaurant Location :
            <span className="font-bold">{restaurantLocation}</span>
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p>
              Reviewer Name : <span className="font-bold">{reviewerName}</span>
            </p>
          </div>
          <div>
            <p className="flex gap-2 items-center">
              Rating : <span className="font-bold">{Rating}</span>{" "}
              <span className="text-yellow-500">
                <FaStar />
              </span>
            </p>
            <p>
              Review Date : <span className="font-bold">{reviewDate}</span>
            </p>
          </div>
        </div>

        <div className="card-actions">
          <Link
            to={`/review-details/${_id}`}
            className="btn w-full text-white bg-[#CE2600]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Review;

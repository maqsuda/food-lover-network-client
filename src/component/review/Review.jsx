import React from "react";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Review = ({ review }) => {
  const { user } = useAuth();
  const {
    _id,
    foodPhoto,
    foodName,
    restaurantName,
    reviewerName,
    restaurantLocation,
    rating,
    comments,
    reviewDate,
  } = review;

  const handleAddFavorite = () => {
    const newFavorites = {
      foodName,
      foodPhoto,
      restaurantName,
      restaurantLocation,
      rating,
      reviewDate,
      comments,
      email: user?.email,
      reviewerName: user?.displayName,
      reviewerImage: user?.photoURL,
    };

    axios
      .post("http://localhost:3000/addFavorite", newFavorites)
      .then((data) => {
        console.log(data.data);

        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your favorite has been created.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const [star, setStar] = useState(Rating);
  // setStar(Rating)
  // // const starVal = star.indexOf(0);
  // console.log(star);

  //   console.log(review.foodName);
  return (
    <div className="card bg-base-100 shadow-sm">
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
          <span
            onClick={handleAddFavorite}
            className="btn bg-white text-[#CE2600] border-none"
          >
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
              Rating : <span className="font-bold">{rating}</span>{" "}
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

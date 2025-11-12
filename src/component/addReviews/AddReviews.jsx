import React from "react";

import useAuth from "../../hooks/useAuth";
// import useAxios from "../../hooks/useAxios";
import axios from "axios";
import Swal from "sweetalert2";

const AddReviews = () => {
  const { user } = useAuth();

  // const axiosInstance = useAxios();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewDate = e.target.reviewDate.value;
    const foodName = e.target.foodName.value;
    const foodPhoto = e.target.foodPhoto.value;
    const restaurantName = e.target.restaurantName.value;
    const restaurantLocation = e.target.restaurantLocation.value;
    const rating = e.target.rating.value;
    const comments = e.target.comments.value;
    const newReviews = {
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

    console.log();
    axios
      .post("http://localhost:3000/addReviews", newReviews)
      .then((data) => {
        console.log(data.data);

        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your reviews has been created.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error creating reviews:", error);
      });

    // axiosInstance.post("/addReviews", newReviews).then((data) => {
    //   console.log(data.data);
    // });
  };
  return (
    <div className="bg-base-200 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl lg:text-5xl py-10 text-center text-black">
        Add Reviews
      </h1>

      <div className=" bg-base-100 lg:w-[500px]   shadow-2xl lg:mb-10 py-5">
        <form className="px-10" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            {/* <label className="label gap-20">
              Email
              <input
                type="email"
                className="input"
                placeholder="Email"
                defaultValue={user.email}
                readOnly
              />
            </label> */}
            <label className="label lg:gap-12"></label>
            Food Name
            <input
              type="text"
              name="foodName"
              className="input"
              placeholder="Enter Food Name"
            />
            <label className="label lg:gap-11"></label>
            Food Image
            <input
              type="text"
              name="foodPhoto"
              className="input"
              placeholder="Enter Food Image"
            />
            <label className="label lg:gap-4"> </label>
            Restaurant Name
            <input
              type="text"
              name="restaurantName"
              className="input"
              placeholder="Enter Restaurant Name"
            />
            <label className="label"></label>
            Restaurant Location
            <input
              type="text"
              name="restaurantLocation"
              className="input"
              placeholder="Enter Restaurant Location"
            />
            <label className="label lg:gap-12"></label>
            Star Rating
            <input
              type="text"
              name="rating"
              className="input"
              placeholder="Enter Star Rating"
            />
            <label className="label lg:gap-10"> </label>
            Current Date
            <input
              type="date"
              name="reviewDate"
              className="input"
              placeholder="Todays Date"
              defaultValue={new Date("YYYY-MM-DD")}
            />
            <label className="label lg:gap-12"> </label>
            Comments
            <textarea
              cols={55}
              rows={10}
              className="border pl-2"
              name="comments"
            ></textarea>
            <button className="btn text-[#CE2600] font-bold hover:bg-[#FFCD00] mt-4">
              Add Review
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddReviews;

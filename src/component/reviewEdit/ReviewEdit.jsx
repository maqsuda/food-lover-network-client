import React from "react";
import { useLoaderData } from "react-router";

const ReviewEdit = () => {
  const reviewEdit = useLoaderData();

  const {
    _id,
    foodPhoto,
    foodName,
    restaurantName,
    restaurantLocation,
    reviewText,
    rating,
    reviewDate,
  } = reviewEdit;

  const handleUpdate = (_id) => {
    console.log(_id);
  };

  return (
    <div className="bg-base-200 flex flex-col items-center">
      <h2 className="text-5xl font-bold py-10 text-center text-black">
        Review Edit
      </h2>

      <div className=" bg-base-100 w-[500px]   shadow-2xl mb-10">
        <form className="p-10" onSubmit={handleUpdate}>
          <fieldset className="fieldset">
            <label className="label gap-12">
              Food Name
              <input
                type="text"
                name="foodName"
                className="input"
                defaultValue={foodName}
              />
            </label>
            <label className="label gap-11">
              Food Image
              <input
                type="text"
                name="foodPhoto"
                className="input"
                defaultValue={foodPhoto}
              />
            </label>

            <label className="label gap-4">
              Restaurant Name
              <input
                type="text"
                name="restaurantName"
                className="input"
                defaultValue={restaurantName}
              />
            </label>

            <label className="label">
              Restaurant Location
              <input
                type="text"
                name="restaurantLocation"
                className="input"
                defaultValue={restaurantLocation}
              />
            </label>
            <label className="label gap-12">
              Star Rating
              <input
                type="text"
                name="rating"
                className="input"
                defaultValue={rating}
              />
            </label>
            <label className="label gap-10">
              Current Date
              <input
                type="date"
                name="reviewDate"
                className="input"
                defaultValue={reviewDate}
              />
            </label>
            <label className="label gap-12">
              Comments
              <textarea
                cols={55}
                rows={10}
                className="border pl-2"
                name="comments"
                defaultValue={reviewText}
              ></textarea>
            </label>
            <button className="btn text-[#CE2600] font-bold hover:bg-[#FFCD00] mt-4">
              Edit Review
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ReviewEdit;

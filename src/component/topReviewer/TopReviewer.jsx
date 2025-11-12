import React from "react";
import { FaStar } from "react-icons/fa";
import girl1 from "../../assets/girl1.jpg";
import girl2 from "../../assets/girl2.jpg";
import girl3 from "../../assets/girl3.jpg";

const TopReviewer = () => {
  return (
    <div className="bg-base-200 pb-10 mb-10 lg:my-10">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#CE2600] pt-5 pb-10 text-center">
        What our reviewers are saying
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white p-5 shadow-xl ml-10 mr-10">
          <div className="flex items-center text-yellow-500 py-5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-justify ">
            If you’re looking for Lebanese-Armenian food look no further, this
            is the spot for you. Overall we love this place, we’ve been coming
            here for years and plan to go more in the future.
          </p>
          <button className="font-bold underline pb-5">View More ...</button>
          <div className="flex gap-2 items-center">
            <img className="size-12 rounded-full" src={girl1}></img>
            <p>Sarkira M.</p>
          </div>
        </div>

        <div className="bg-white p-5 shadow-xl ml-10 mr-10">
          <div className="flex items-center text-yellow-500 py-5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-justify">
            I always love coming here! It’s a very active place with many
            celebrations and gatherings happening! You get a lot of food for the
            money that you pay. I always get the vegetarian delight
          </p>
          <button className="font-bold underline pb-5">View More ...</button>
          <div className="flex gap-2 items-center">
            <img className="size-12 rounded-full" src={girl2}></img>
            <p>Maria</p>
          </div>
        </div>

        <div className="bg-white p-5 shadow-xl ml-10 mr-10">
          <div className="flex items-center text-yellow-500 py-5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-justify">
            This was my favorite restaurant dirimg my trip to LA. The food is
            amazing! The menu is extensive, but don't feel overwhelmed. Order an
            Armenian beer, it's light and refreshing.
          </p>
          <button className="font-bold underline pb-5">View More ...</button>
          <div className="flex gap-2 items-center">
            <img className="size-12 rounded-full" src={girl3}></img>
            <p>Fatema</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopReviewer;

import React from "react";
import hotel1 from "../../assets/cafe-social.jpg";
import hotel2 from "../../assets/restaurant-interior.jpg";
import hotel3 from "../../assets/bahar-all-day-dining.jpg";

import { FaCircle } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

const PopularRestaurents = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#CE2600] pt-5 pb-10 text-center">
        Popular Restaurents
      </h2>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-flow-row-dense gap-5 lg:py-10">
          <div className="lg:col-span-6 order-2 md:order-1">
            <img src={hotel1} alt="Shoes" className="rounded-xl" />
          </div>

          <div className="lg:col-span-6 order-1 md:order-2">
            <h2 className="text-3xl font-bold underline py-5">
              Cafe Social at InterContinental Dhaka
            </h2>

            <div>
              <p className="flex items-center gap-2">
                4.9
                <span className="text-[#FFCD00] flex items-center">
                  <FaCircle />
                  <FaCircle />
                  <FaCircle />
                  <FaCircle />
                  <FaCircle />
                </span>{" "}
                (618 reviews)
              </p>
            </div>

            <div className="pt-5">
              <p className="flex items-center gap-2">
                <IoRestaurant />
                Cafe, European -$$ - $$$ - <CiClock2 />{" "}
                <span className="text-[#FFCD00] ">Open Now</span>
              </p>
            </div>

            <p className="text-justify py-5">
              In a world full of differences, one thing that's common for both
              socialites and recluse is that they both find solace in a perfect
              cup of coffee. When a cafe at the heart of the town brings you the
              ambiance perfect for either, becomes a place where wonderful
              things happen, and sometimes, even the most pleasant of memories
              take place! Experience the wonderful aroma of finest coffee
              blends, spectacular artistry of baking, scrumptious assortment of
              cakes and cookies. Besides enjoy A La Carte menu and to top it
              off, the InterContinental standards of precision and care.
              Experience Cafe Social, experience the InterContinental Life!
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12  gap-5 lg:py-10 ">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold underline py-5">
              The Garden Kitchen at Sheraton Dhaka
            </h2>

            <div>
              <p className="flex items-center gap-2">
                4.9
                <span className="text-[#FFCD00] flex items-center">
                  <FaCircle />
                  <FaCircle />
                  <FaCircle />
                  <FaCircle />
                  <FaCircle />
                </span>{" "}
                (1837 reviews)
              </p>
            </div>

            <div className="pt-5">
              <p className="flex items-center gap-2">
                <IoRestaurant />
                Italian, Indian -$$ - $$$ - <CiClock2 />{" "}
                <span className="text-[#FFCD00] ">Open Now</span>
              </p>
            </div>

            <p className="text-justify py-5">
              The Garden Kitchen is a multi-cuisine restaurant in Dhaka offering
              a melange of sumptous dishes. This Banani restaurant also features
              an al fresco dining area
            </p>
            <div className="card-actions justify-end"></div>
          </div>

          <div className="lg:col-span-6 ">
            <img src={hotel2} alt="Shoes" className="rounded-xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-flow-row-dense gap-5 py-10">
          <div className="lg:col-span-6 order-2 md:order-1">
            <img src={hotel3} alt="Shoes" className="rounded-xl" />
          </div>

          <div className="lg:col-span-6 sm:order-1 md:order-2">
            <h2 className="text-3xl font-bold underline py-5">Bahar</h2>

            <div>
              <p className="flex items-center gap-2">
                4.9
                <span className="text-[#FFCD00] flex items-center">
                  <FaCircle />
                  <FaCircle />
                  <FaCircle />
                  <FaCircle />
                  <FaCircle />
                </span>{" "}
                (648 reviews)
              </p>
            </div>

            <div className="pt-5">
              <p className="flex items-center gap-2">
                <IoRestaurant />
                French, Chinese -$$ - $$$ - <CiClock2 />{" "}
                <span className="text-[#FFCD00] ">Open Now</span>
              </p>
            </div>

            <p className="text-justify py-5">
              This super stylish all day dining international restaurant has
              captivating chandeliers, 3 private dining areas with playful
              threadwork design in colour green, yellow & red throughout. Enjoy
              international cuisine at BAHAR. Open for breakfast, lunch and
              dinner
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRestaurents;

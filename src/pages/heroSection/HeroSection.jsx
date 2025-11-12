import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import food4 from "../../assets/food4.jpg";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center bg-base-100 mx-auto">
      <div className="carousel w-full rounded-box shadow-lg">
        <div id="slide1" className="carousel-item relative w-full h-[700px]">
          <img src={food1} className="w-full object-cover " alt="Slide 1" />
          <h2 className="absolute text-white text-2xl md:text-4xl lg:text-6xl font-bold pt-85 px-20 text-center shadow-gray-300">
            A Bite of Flavor. A Dash of Happiness
          </h2>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[700px]">
          <img src={food2} className="w-full object-cover ]" alt="Slide 2" />
          <h2 className="absolute text-white text-2xl md:text-4xl lg:text-6xl font-bold pt-85 px-20 text-center shadow-gray-300">
            Savor Every Bite — From Our Kitchen to Your Table
          </h2>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[700px]">
          <img src={food3} className="w-full object-cover" alt="Slide 3" />
          <h2 className="absolute text-white text-2xl md:text-4xl lg:text-6xl font-bold pt-85 px-20 text-center shadow-gray-300">
            Delicious Meals, Delivered Fresh to Your Doorstep
          </h2>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[700px]">
          <img src={food4} className="w-full object-cover" alt="Slide 4" />
          <h2 className="absolute text-white text-2xl md:text-4xl lg:text-6xl font-bold pt-84 px-20 shadow-gray-300 text-center">
            Fresh Ingredients, Honest Flavors, Healthy Choices.
          </h2>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

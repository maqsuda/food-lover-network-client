import React from "react";
import HeroSection from "../../pages/heroSection/HeroSection";
import LatestReview from "../latestReview/LatestReview";
import PopularRestaurents from "../popularRestaurents/PopularRestaurents";
import TopReviewer from "../topReviewer/TopReviewer";

const featuredReviewsPromise = fetch(
  "http://localhost:3000/latest-review"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <LatestReview
        featuredReviewsPromise={featuredReviewsPromise}
      ></LatestReview>
      <PopularRestaurents></PopularRestaurents>
      <TopReviewer></TopReviewer>
    </div>
  );
};

export default Home;

import React from "react";
import HeroSection from "../../pages/heroSection/HeroSection";
import LatestReview from "../latestReview/LatestReview";

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
    </div>
  );
};

export default Home;

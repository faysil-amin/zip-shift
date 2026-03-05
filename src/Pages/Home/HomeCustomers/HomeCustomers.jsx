import React from "react";
import img from "../../../assets/customer-top.png";
import "swiper/css";
import HomeReviewCard from "../HomeReviewCard/HomeReviewCard";
const data = fetch("/review.json").then((res) => res.json());
const HomeCustomers = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-center flex-col">
        <img src={img} alt="" />
        <h1 className="mt-4 px-8 font-bold text-xl md:text-3xl text-center">
          What our customers are sayings
        </h1>
        <p className="text-center mt-2 md:max-w-6/12">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="mt-8">
        <HomeReviewCard data={data}></HomeReviewCard>
      </div>
    </div>
  );
};

export default HomeCustomers;

import React from "react";
import "swiper/css";
import amazonvector from "../../../assets/brands/amazon_vector.png";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import star from "../../../assets/brands/star.png";
import starPeople from "../../../assets/brands/start_people.png";
import randstan from "../../../assets/brands/randstad.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const HomeLogoScroller = () => {
  return (
    <div className="pb-12 border-b-mauve-500 border-dashed">
      <h1 className="mt-10 mb-6 text-center font-bold text-xl">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
      >
        <SwiperSlide>
          <img src={amazon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amazonvector} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={casio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={star} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={starPeople} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={randstan} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeLogoScroller;

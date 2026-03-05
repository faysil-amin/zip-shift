import React from "react";
import logo from "../../../assets/be-a-merchant-bg.png";
import image from "../../../assets/location-merchant.png";
const HomePriority = () => {
  return (
    <div className="bg-[#03373D] mt-8 rounded-xl px-4 md:px-16 pb-16 pt-20 relative  gap-4">
      <img className="absolute top-0" src={logo} alt="" />
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <h1 className="text-xl mt-4 md:text-2xl text-white font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-white mt-3">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="mt-6 md:flex gap-4">
            <button className="px-4  md:px-8 py-2 bg-secondary rounded-3xl md:font-bold font-semibold">
              Become a Merchant
            </button>
            <button className="mt-4 md:mt-0 px-4 md:px-8 py-2 rounded-3xl text-secondary md:font-bold border border-secondary font-semibold">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-center">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePriority;

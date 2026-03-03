import React from "react";
import HomeServecesCard from "./HomeServecesCard";

const HomeServeces = () => {
  const arr = [
    {
      title: "Express  & Standard DeliveryB",
      details:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      details:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      title: "Fulfillment Solution",
      details:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Home Delivery",
      details:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      details:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      details:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className="rounded-xl bg-[#03373D]">
      <h1 className="text-white text-2xl font-bold text-center pt-14">
        Our Services
      </h1>
      <p className="text-white max-w-7/12 mx-auto text-center mt-2  md:px-0">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid md:grid-cols-3 gap-4 px-6 py-10">
        {arr.map((data) => (
          <HomeServecesCard data={data}></HomeServecesCard>
        ))}
      </div>
    </div>
  );
};

export default HomeServeces;

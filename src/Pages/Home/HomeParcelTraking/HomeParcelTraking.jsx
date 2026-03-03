import React from "react";
import safe from "../../../assets/safe-delivery.png";
import live from "../../../assets/live-tracking.png";
import HomeParcelTrakingCard from "./HomeParcelTrakingCard";
const HomeParcelTraking = () => {
  const arr = [
    {
      image: live,
      title: "Live Parcel Tracking",
      details:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      image: safe,
      title: "100% Safe Delivery",
      details:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      image: safe,
      title: "24/7 Call Center Support",
      details:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <div>
      {arr.map((data) => (
        <HomeParcelTrakingCard data={data}></HomeParcelTrakingCard>
      ))}
    </div>
  );
};

export default HomeParcelTraking;

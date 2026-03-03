import React from "react";
import Card from "./Card";

const HomeWorkCard = () => {
  const arr = [
    {
      title: "Booking Pick & Drop",
      details:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Cash On Delivery",
      details:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Delivery Hub",
      details:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Booking SME & Corporate",
      details:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div>
      <h1 className="font-bold text-xl md:text-2xl">How to Work</h1>
      <div className="mt-4 grid md:grid-cols-4 gap-4">
        {arr.map((data) => (
          <Card data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default HomeWorkCard;

import React from "react";
import car from "../../assets/bookingIcon.png";
const Card = ({ data }) => {
  const { title, details } = data;
  return (
    <div className="p-4 bg-white rounded-xl">
      <img src={car} alt="" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-accent mt-2">{details}</p>
    </div>
  );
};

export default Card;

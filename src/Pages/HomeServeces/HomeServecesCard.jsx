import React from "react";
import service from "../../assets/service.png";
const HomeServecesCard = ({ data }) => {
  const { title, details } = data;
  return (
    <div className="p-4 bg-white rounded-xl hover:bg-secondary">
      <div className="flex items-center justify-center mb-2">
        <img src={service} alt="" />
      </div>
      <h2 className="text-xl font-bold text-center">{title}</h2>
      <p className="text-accent mt-2 text-center">{details}</p>
    </div>
  );
};

export default HomeServecesCard;

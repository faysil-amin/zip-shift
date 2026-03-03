import React from "react";

const HomeParcelTrakingCard = ({ data }) => {
  const { image, title, details } = data;
  return (
    <div className="flex gap-4 bg-white p-8 rounded-xl mt-6">
      <div className="pr-8">
        <img src={image} alt="" />
      </div>
      <div className="flex items-start justify-center flex-col pl-8 border-l border-dashed">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default HomeParcelTrakingCard;

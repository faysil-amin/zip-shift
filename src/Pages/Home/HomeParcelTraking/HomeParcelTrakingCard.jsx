import React from "react";

const HomeParcelTrakingCard = ({ data }) => {
  const { image, title, details } = data;
  return (
    <div className="md:flex  gap-4 bg-white p-8 rounded-xl mt-6">
      <div className="pr-8 flex items-center justify-center">
        <img src={image} alt="" />
      </div>
      <div className="mt-6 flex items-start justify-center flex-col md:pl-8 md:border-l border-dashed">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default HomeParcelTrakingCard;

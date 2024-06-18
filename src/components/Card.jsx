// src/components/Card.jsx
import React from "react";

const Card = ({ title, link, rating }) => {
  return (
    <div className="bg-[#231239] text-[#F4AB4F] rounded-lg p-4 shadow-lg m-2">
      <div className="flex flex-col items-center">
        <img src={link} alt={title} className="rounded-lg mb-4 w-full" />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="text-lg mb-4">Rating: {rating}</div>
        <div className="flex flex-col space-y-4 w-full">
          <button className="bg-[#D62176] text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105 w-full">
            Watch Options
          </button>
          <button className="bg-[#D62176] text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105 w-full">
            Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

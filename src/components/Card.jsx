import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
//bg-[#D62176]
const Card = ({ title, link, rating }) => {
  rating = parseFloat(rating);
  rating = rating.toFixed(1);
  return (
    <div className="bg-[#231239] text-[#F4AB4F] rounded-lg p-2 shadow-lg shadow-[#4a2b5e] m-1">
      <div className="flex flex-col items-center">
        <img src={link} alt={title} className="rounded-lg mb-4 w-full" />
        <div className="flex items-start w-full mb-1">
          <FaStar className="text-[#FFD700] ml-2 my-1" />
          <div className="text-gray-300 p-1 text-sm font-bold">{rating}</div>
        </div>
        <h2 className="text-sm font-bold md:text-base mb-2 text-center min-h-[3rem]">
          {title}
        </h2>
        <div className="flex flex-col space-y-4 w-full">
          <button className="bg-[#D62176]  text-gray-300 px-4 py-2 rounded-3xl transition-transform transform hover:scale-105 w-full flex items-center justify-center space-x-2">
            <MdOutlineAdd className="text-lg   " />
            <span className="font-extrabold">Watchlist</span>
          </button>
          <button className=" text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105 w-full flex items-center justify-center space-x-2">
            <FaPlay className="text-[#FFD700] pr-1" />
            <span className=" font-semibold">Trailer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const Shimmer = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-[#231239] rounded-lg p-2 shadow-lg shadow-[#4a2b5e] m-1">
        <div className="flex flex-col items-center">
          <div className="mb-4 w-full h-48 bg-gray-700 rounded-lg"></div>
          <div className="flex items-start w-full mb-1">
            <div className="w-4 h-4 bg-gray-500 rounded-full ml-2 my-1"></div>
            <div className="w-10 h-4 bg-gray-500 rounded-full ml-2 my-1"></div>
          </div>
          <div className="w-full h-6 bg-gray-500 rounded my-2"></div>
          <div className="flex flex-col space-y-2 w-full">
            <div className="w-full h-10 bg-gray-500 rounded-3xl"></div>
            <div className="w-full h-10 bg-gray-500 rounded-3xl"></div>
            <div className="w-full h-10 bg-gray-500 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;

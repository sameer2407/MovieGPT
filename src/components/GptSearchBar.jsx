import React from "react";

const GptSearchBar = () => {
  return (
    <div className="bg-[#231239] p-4 flex items-center">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="w-full p-2 bg-[#D62176] text-[#FFD700] rounded"
      />
      <button className="ml-4 p-2 bg-[#D62176] text-[#FFD700] rounded">
        Search
      </button>
    </div>
  );
};

export default GptSearchBar;

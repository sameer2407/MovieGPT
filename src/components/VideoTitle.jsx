import React from "react";

const VideoTitle = ({ title, overview }) => {
  const shortenOverview = (text) => {
    const words = text.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="px-4 py-5 bg-gradient-to-r from-[#231239] to-transparent bg-opacity-75 text-white rounded w-full md:h-64">
      <h1 className="text-3xl font-bold text-[#f0b66f] mb-4">{title}</h1>
      <p className="text-sm text-[#f0b66f]">{shortenOverview(overview)}</p>
      <div className="flex mt-4">
        <button className="bg-[#D62176] text-[#f0b66f] py-2 px-4 rounded mr-2 hover:bg-opacity-50">
          Play
        </button>
        <button className="bg-[#D62176] text-[#f0b66f] py-2 px-4 rounded font-bold hover:bg-opacity-50">
          +
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

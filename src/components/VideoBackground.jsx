import React from "react";

const VideoBackground = ({ imagePath }) => {
  if (!imagePath) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/original${imagePath}`}
        alt="Video Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoBackground;

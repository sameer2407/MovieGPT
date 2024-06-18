import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMainMovie(randomMovie);
    }
  }, [movies]);

  if (!movies) return null;
  if (!mainMovie) return null;

  const { original_title, overview, backdrop_path } = mainMovie;

  return (
    <div className="relative w-full h-auto">
      <VideoBackground imagePath={backdrop_path} />
      <div className="relative z-10">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;

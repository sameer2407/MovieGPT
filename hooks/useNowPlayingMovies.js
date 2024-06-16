import React from "react";
import { OPTIONS } from "../src/utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../src/utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovies(); // Call the function here
  }, []);
};

export default useNowPlayingMovies;

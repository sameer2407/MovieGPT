import React from "react";
import Header from "./Header";
import { MdConstruction } from "react-icons/md";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.toggle);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-[#231239] min-h-screen">
      <Header />
      <Outlet></Outlet>
    </div>
  );
};

export default Browse;

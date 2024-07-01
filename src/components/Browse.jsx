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

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-[#231239] min-h-screen">
      <Header />
      {showGptSearch && <GptSearch />}
      <MainContainer />
      <SecondaryContainer />
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="bg-[#231239] text-[#F4AB4F] text-center p-6 border border-[#F4AB4F] rounded-lg shadow-lg m-4">
          <MdConstruction className="mx-auto text-4xl mb-2" /> 
          <p className="text-xl font-semibold flex items-center justify-center">
            This site is in the developmental phase. <br />
            More features will be added in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Browse;
///  i wil do th work i
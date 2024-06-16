import React, { useEffect } from "react";
import Header from "./Header";
import { MdConstruction } from "react-icons/md";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="bg-[#231239] min-h-screen">
      <Header />
      <MainContainer></MainContainer>
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

import { OPTIONS } from "../src/utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../src/utils/movieSlice";
import { get } from "firebase/database";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;

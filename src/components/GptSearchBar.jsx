import React, { useRef } from "react";
import openai from "../utils/openai";
import { OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gpt_query = `Give me the 5 Movie names for the query in the form of arrays always: ${searchText.current.value}`;

    const searchMoviesTMDB = async (movie) => {
      const dataa = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        OPTIONS
      );
      const json = await dataa.json();
      return json.results;
    };

    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: gpt_query }],
        model: "gpt-3.5-turbo",
      });

      const gptMoviesContent = chatCompletion.choices[0]?.message?.content;
      console.log(gptMoviesContent);

      let gptMovies;
      try {
        gptMovies = JSON.parse(gptMoviesContent);
      } catch (jsonError) {
        console.error("Error parsing JSON from OpenAI:", jsonError);
        return;
      }

      console.log(gptMovies);

      const data = gptMovies.map((movie) => searchMoviesTMDB(movie));
      const tmdbResults = await Promise.all(data);

      // Get the top 4 movies by vote_average for each child array
      // and discard movies with backdrop_path as null
      const top4MoviesByVoteAverage = tmdbResults.map((movies) =>
        movies
          .filter((movie) => movie.backdrop_path !== null)
          .sort((a, b) => b.vote_average - a.vote_average)
          .slice(0, 4)
      );

      // Combine all movies into a single array
      const combinedMovies = top4MoviesByVoteAverage.flat();

      console.log("filtered", combinedMovies);

      dispatch(
        addGptMoviesResult({
          movieResults: combinedMovies,
          movieNames: gptMovies,
        })
      );
    } catch (error) {
      console.error("Error fetching data from OpenAI:", error);
    }
  };

  return (
    <div className="bg-[#231239] p-4 flex items-center">
      <input
        type="text"
        ref={searchText}
        placeholder="Search for a movie..."
        className="w-full p-2 bg-[#D62176] text-[#FFD700] rounded"
      />
      <button
        className="ml-4 p-2 bg-[#D62176] text-[#FFD700] rounded"
        onClick={handleGptSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default GptSearchBar;

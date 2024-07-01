import React from "react";

const GptMovieSuggest = () => {
  const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight"];

  return (
    <div className="bg-[#231239] p-4">
      <h2 className="text-[#F4AB4F] text-xl mb-4">Movie Suggestions</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} className=" text-[#F4AB4F] mb-2">
            {movie}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GptMovieSuggest;

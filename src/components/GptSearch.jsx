import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggest from "./GptMovieSuggest";

const GptSearch = () => {
  return (
    <div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggest></GptMovieSuggest>
    </div>
  );
};

export default GptSearch;

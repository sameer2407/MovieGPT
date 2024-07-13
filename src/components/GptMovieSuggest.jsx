import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "./Card";

const GptMovieSuggest = () => {
  const moviesName = useSelector((store) => store.gpt.movieNames);
  const moviesResult = useSelector((store) => store.gpt.movieResults);

  return (
    <div className="bg-[#231239] p-4">
      <h2 className="text-[#F4AB4F] text-xl mb-4">Movie Suggestions</h2>

      <Box>
        <Grid container spacing={2}>
          {moviesResult.map((movie, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                title={movie?.original_title}
                link={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                rating={movie.vote_average}
                id={movie.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default GptMovieSuggest;

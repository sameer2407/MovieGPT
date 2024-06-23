import React from "react";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MovieList = ({ title, movies }) => {
  console.log("Rendering MovieList");
  console.log(movies);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="text-[#F4AB4F] bg-[#231239] p-8">
      <div className="mb-2">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <Carousel responsive={responsive}>
        {movies.map((movie, index) => (
          <Card
            key={index}
            title={movie?.original_title}
            link={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
            rating={movie.vote_average}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieList;

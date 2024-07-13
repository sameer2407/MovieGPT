import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OPTIONS } from "../utils/constants";

const MoviePage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const movieUrl = `https://api.themoviedb.org/3/movie/${id}`;
  const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(movieUrl, OPTIONS);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await fetch(creditsUrl, OPTIONS);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCredits(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCredits();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const director = credits?.crew.find((member) => member.job === "Director");
  const writer = credits?.crew.find(
    (member) => member.job === "Screenplay" || member.job === "Writer"
  );

  return (
    <div className="flex flex-col p-4 space-y-4">
      {movieDetails && (
        <>
          <div className="p-2">
            <h3 className="text-xl font-bold text-[#F4AB4F]">
              {movieDetails.title}
            </h3>
            <div className="flex text-gray-200 font-medium space-x-2">
              <p>{movieDetails.release_date.split("-")[0]}</p>
              <p>{movieDetails.runtime} mins</p>
            </div>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
              alt="Video Background"
              className="w-full h-full md:h-[350px] object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-300">{movieDetails.overview}</p>
            <div className="flex flex-wrap gap-2">
              {movieDetails.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-2 py-1 bg-gray-700 text-gray-200 rounded"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div>
                <h4 className="text-lg font-semibold text-[#F4AB4F]">Rating</h4>
                <p className="text-gray-300">{movieDetails.vote_average}/10</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#F4AB4F]">
                  Vote Count
                </h4>
                <p className="text-gray-300">{movieDetails.vote_count}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#F4AB4F]">
                  Popularity
                </h4>
                <p className="text-gray-300">{movieDetails.popularity}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-[#F4AB4F]">Cast</h4>
              <ul className="text-gray-300">
                {credits?.cast.slice(0, 5).map((castMember) => (
                  <li key={castMember.cast_id}>
                    {castMember.name} as {castMember.character}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-[#F4AB4F]">Director</h4>
              <p className="text-gray-300">
                {director ? director.name : "N/A"}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-[#F4AB4F]">Writer</h4>
              <p className="text-gray-300">{writer ? writer.name : "N/A"}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MoviePage;

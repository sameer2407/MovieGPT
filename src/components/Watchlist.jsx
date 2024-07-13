import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { OPTIONS } from "../utils/constants";

const Watchlist = () => {
  const [userId, setUserId] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchMovieDetails = async () => {
        try {
          const db = getDatabase();
          const watchlistRef = ref(db, `users/${userId}/movies`);
          onValue(watchlistRef, async (snapshot) => {
            const watchlistData = snapshot.val();
            if (watchlistData) {
              const movieIds = Object.keys(watchlistData);
              const movieDetails = await Promise.all(
                movieIds.map(async (movieId) => {
                  const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}`,
                    OPTIONS
                  );

                  if (!response.ok) {
                    throw new Error("Network response was not ok");
                  }

                  return await response.json();
                })
              );

              setMovies(movieDetails);
            } else {
              setMovies([]);
            }
            setLoading(false);
          });
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchMovieDetails();
    }
  }, [userId]);

  if (loading) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-[#F4AB4F] mb-4">
          Your Watchlist
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-[#F4AB4F] mb-4">Your Watchlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              link={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              rating={movie.vote_average}
              id={movie.id}
            />
          ))
        ) : (
          <p className="text-gray-300">Your watchlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMovieEdit } from "react-icons/md";
import {
  addMovieToWatchlist,
  removeMovieFromWatchlist,
} from "../utils/watchlistSlice";
import { getDatabase, ref, set, remove, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const Card = ({ title, link, rating, id }) => {
  const [userId, setUserId] = useState(null);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const dispatch = useDispatch();

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
      const db = getDatabase();
      const watchlistRef = ref(db, `users/${userId}/movies/${id}`);
      onValue(watchlistRef, (snapshot) => {
        const isInWatchlist = snapshot.exists(); // Check if movie ID exists in user's watchlist
        setIsInWatchlist(isInWatchlist);
      });
    }
  }, [userId, id]);

  const writeUserData = (movieId) => {
    if (userId) {
      const db = getDatabase();
      set(ref(db, `users/${userId}/movies/${movieId}`), {
        movieId: movieId,
      });
    }
  };

  const removeUserData = (movieId) => {
    if (userId) {
      const db = getDatabase();
      remove(ref(db, `users/${userId}/movies/${movieId}`));
    }
  };

  const handleWatchlistClick = () => {
    if (isInWatchlist) {
      dispatch(removeMovieFromWatchlist(id));
      removeUserData(id);
    } else {
      dispatch(addMovieToWatchlist(id));
      writeUserData(id);
    }
  };

  rating = parseFloat(rating).toFixed(1);

  return (
    <div className="bg-[#231239] text-[#F4AB4F] rounded-lg p-2 shadow-lg shadow-[#4a2b5e] m-1">
      <div className="flex flex-col items-center">
        <div className="mb-4 w-full h-48 flex items-center justify-center bg-gray-700 rounded-lg">
          {link ? (
            <img
              src={link}
              alt={title}
              className="rounded-lg w-full h-full object-cover"
            />
          ) : (
            <div className="text-gray-400">No Image Available</div>
          )}
        </div>
        <div className="flex items-start w-full mb-1">
          <FaStar className="text-[#FFD700] ml-2 my-1" />
          <div className="text-gray-300 p-1 text-sm font-bold">{rating}</div>
        </div>
        <h2 className="text-sm font-bold md:text-base mb-2 text-center min-h-[3rem]">
          {title}
        </h2>
        <div className="flex flex-col space-y-2 w-full">
          <button
            className={`px-4 py-2 rounded-3xl transition-transform transform hover:scale-105 w-full flex items-center justify-center space-x-2 ${
              isInWatchlist
                ? "bg-gray-500 text-gray-300"
                : "bg-[#D62176] text-gray-300"
            }`}
            onClick={handleWatchlistClick}
          >
            <MdOutlineAdd className="text-lg" />
            <span className="font-extrabold">
              {isInWatchlist ? "Added" : "Watchlist"}
            </span>
          </button>
          <button className="text-white px-4 py-2 rounded-3xl transition-transform transform hover:scale-105 w-full flex items-center justify-center space-x-2">
            <FaPlay className="text-[#FFD700] pr-1" />
            <span className="font-semibold">Trailer</span>
          </button>
          <Link to={`/browser/movieinfo/${id}`}>
            <button className="text-white px-4 py-2 transition-transform transform hover:scale-105 w-full flex items-center justify-center space-x-2">
              <MdMovieEdit className="text-2xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

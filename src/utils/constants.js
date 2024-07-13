export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_VERCEL_TMDB_API_KEY}`,
  },
};

export const movieSearchUrl =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

export const GPT_KEY = import.meta.env.VITE_VERCEL_OPENAI_API_KEY;

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_VERCEL_TMDB_API_KEY}`,
  },
};

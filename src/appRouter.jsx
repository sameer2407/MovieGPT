import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import HomePage from "./components/HomePage";
import GptSearch from "./components/GptSearch";
import MoviePage from "./components/MoviePage";
import Watchlist from "./components/Watchlist";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browser",
    element: <Browse />,
    children: [
      {
        path: "/browser",
        element: <HomePage />,
      },
      {
        path: "/browser/gpt",
        element: <GptSearch />,
      },
      {
        path: "/browser/movieinfo/:id", // Add dynamic parameter
        element: <MoviePage />,
      },
      {
        path: "/browser/watchlist",
        element: <Watchlist />,
      },
    ],
  },
]);

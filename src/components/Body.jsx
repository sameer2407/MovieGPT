import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "../appRouter";

const Body = () => {
  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;

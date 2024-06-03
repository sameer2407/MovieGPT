import React from "react";
import { appRouter } from "../appRouter";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  return (
    <>
      {" "}
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default Body;

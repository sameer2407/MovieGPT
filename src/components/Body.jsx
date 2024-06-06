import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { flagToggle } from "../utils/loginSlice";
import { appRouter } from "../appRouter";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("current user", user);
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        dispatch(flagToggle(true));
      } else {
        // User is signed out
        dispatch(flagToggle(false));
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]); // Add dispatch to the dependency array

  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;

import React, { useState } from "react";
import Logo from "../assets/LogoNew.svg";
import { FaUser } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { flagToggle } from "../utils/loginSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const flag = useSelector((state) => state.flag); // Assuming your flag is in the state object
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("current user", user);
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        dispatch(flagToggle(true));
        navigate("/browser");
      } else {
        // User is signed out
        dispatch(removeUser());
        dispatch(flagToggle(false));
        navigate("/");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="z-10 flex justify-between items-center">
      <img className="w-20 px-1" src={Logo} alt="Logo" />

      <div className="relative">
        {flag ? (
          <div className="user text-[#F4AB4F] py-8 px-3">
            <FaUser
              className="text-xl cursor-pointer"
              onClick={toggleDropdown}
            />
          </div>
        ) : null}
        {isDropdownOpen && <DropdownMenu />}
      </div>
    </div>
  );
};

export default Header;

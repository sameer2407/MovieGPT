import React, { useState, useEffect } from "react";
import Logo from "../assets/LogoNew.svg";
import { FaUser } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { flagToggle } from "../utils/loginSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { toggleGPT } from "../utils/gptSlice";

const Header = () => {
  const flag = useSelector((state) => state.flag);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGPT());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
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
  }, [dispatch, navigate]);

  return (
    <div className="z-10 flex justify-between items-center">
      <img className="w-20 px-1" src={Logo} alt="Logo" />

      <div className="relative">
        {flag ? (
          <div className="user text-[#F4AB4F] py-8 px-3 flex">
            <button
              className="text-gray-300 px-2 font-semibold py-1 rounded-md transition-transform transform hover:scale-105 w-full"
              onClick={handleGptSearchClick}
            >
              <IoSearchSharp className="text-2xl text-[#F4AB4F]" />
              {/* <span>GPT</span> */}
            </button>
            <FaUser
              className="text-3xl cursor-pointer mx-2"
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

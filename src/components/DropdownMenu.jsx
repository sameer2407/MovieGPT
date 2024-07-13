import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { flagToggle } from "../utils/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const DropdownMenu = () => {
  const userName = useSelector((state) => state.user.displayName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(flagToggle(false));
      navigate("/");
      console.log("Sign out successful");
    } catch (error) {
      console.error("Sign out error: ", error);
    }
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-[#231239] text-[#F4AB4F] rounded-lg shadow-lg shadow-[#4a2b5e] z-50">
      <ul className="py-1">
        <li className="px-4 py-2 hover:bg-[#4a2b5e] cursor-pointer">
          {userName}
        </li>
        {/* <li className="px-4 py-2 hover:bg-[#4a2b5e] cursor-pointer">
          Account Details
        </li> */}
        {/* <li className="px-4 py-2 hover:bg-[#4a2b5e] cursor-pointer">Help</li> */}
        <Link to={"/browser/watchlist"}>
          <li className="px-4 py-2 hover:bg-[#4a2b5e] cursor-pointer">
            Watchlist
          </li>
        </Link>

        <li
          className="px-4 py-2 hover:bg-[#4a2b5e] cursor-pointer"
          onClick={handleSignOut}
          onMouseEnter={(e) => (e.target.style.cursor = "pointer")}
        >
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;

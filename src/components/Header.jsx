import React, { useState } from "react";
import Logo from "../assets/LogoNew.svg";
import { FaUser } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const flag = useSelector((state) => state.flag); // Assuming your flag is in the state object
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

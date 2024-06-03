import React from "react";
import Logo from "../assets/LogoNew.svg";

const Header = () => {
  return (
    <div className="  z-10">
      <img className="w-20" src={Logo} alt="Logo"></img>
    </div>
  );
};

export default Header;

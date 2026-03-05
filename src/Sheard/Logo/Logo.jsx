import React from "react";
import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div className="items-end flex ">
      <img src={logo} alt="" />
      <h3 className="font-bold text-2xl -ml-4">ZapShift</h3>
    </div>
  );
};

export default Logo;

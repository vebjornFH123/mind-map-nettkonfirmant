import React from "react";
import logo from "../../assets/img/icons/logoNettkonf.webp";

function Navbar({ navigateInApp }) {
  return (
    <div className=" h-[60px] pl-2 pr-2 m-auto w-screen bg-master-lightblue bg-opacity-70 flex justify-center items-center gap-10 backdrop-blur-[20px] fixed top-0 z-[100]">
      <div className="flex justify-center items-center flex-row gap-1">
        <img className="object-contain h-10" alt="" src={logo} /> <span className="navbar-brand">Nettkonfirmant</span>
      </div>
    </div>
  );
}

export default Navbar;

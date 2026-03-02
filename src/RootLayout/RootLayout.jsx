import React from "react";
import Navbar from "../Sheard/Navbar/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="bg-primary h-screen">
      <nav className="pt-4">
        <Navbar></Navbar>
      </nav>

      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;

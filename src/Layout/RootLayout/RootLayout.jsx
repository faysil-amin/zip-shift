import React from "react";
import Navbar from "../../Sheard/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Sheard/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="bg-primary h-full">
      <nav className="pt-4">
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;

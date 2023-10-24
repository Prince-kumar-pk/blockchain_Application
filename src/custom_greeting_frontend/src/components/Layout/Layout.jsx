import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div>
      {/* <div className="App"> */}

      <div className="fixed">
        <Sidebar />
        {/* bg-[#f3f4f6] */}
      </div>
      <div className="md:w-[90%]  ml-[120px] mr-auto md:container lg:w-[90%]  border-view">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
    // </div>
  );
}

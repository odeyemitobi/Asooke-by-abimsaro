import React from "react";
import NavBar from "../components/NavBar/NavBar";

function Mainlayout({ children }) {
  return (
    <div className="">
      <NavBar />
      <div className="">{children}</div>
    </div>
  );
}

export default Mainlayout;

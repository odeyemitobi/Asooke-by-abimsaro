import React from "react";
import NavBar from "../components/NavBar/NavBar";

function Mainlayout({ children }) {
  return (
    <div className="">
      <NavBar />
      <div className="">{children}</div>
      <footer className="w-full bg-[#432818] absolute bottom-0 border-t-2 border-[#fff6e4]">
        <div className="text-center place-items-center grid h-[8vh]">
          <h1 className="xl:text-base text-sm text-white">
            &copy; Copyright 2023. Asooke by Abimsaro.
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default Mainlayout;

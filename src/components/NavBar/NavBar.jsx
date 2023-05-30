import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import Aso from "../../Assets/img/Abimsaro.jpg";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full fixed z-20">
      <div className="xl:px-[18rem] px-4 py-2 floated active">
        <header className="flex justify-between items-center">
          <div className="">
            <img className="h-[5rem]" src={Aso} alt="Aso" />
          </div>
          <div className="hidden md:flex text-[#432818] cursor-pointer navbar">
            <p className="pr-5 text-2xl font-semibold">Home</p>
            <p className="pr-5 text-2xl font-semibold">About</p>
            <p className="pr-5 text-2xl font-semibold">Clothe-Hub</p>
            <p className="pr-5 text-2xl font-semibold">Contact</p>
          </div>
          <div onClick={handleNav} className="block md:hidden cursor-pointer">
            {nav ? (
              <IoClose size={30} color="#432818" />
            ) : (
              <BiMenuAltRight size={40} color="#432818" />
            )}
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] h-full border-r border-r-gray-900 bg-[#fff6e4] ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <div className="place-items-center grid">
              <img className="h-[5rem]" src={Aso} alt="Aso" />
            </div>
            <div className="text-center cursor-pointer mt-5 ">
              <p className="p-5 text-2xl font-semibold">Home</p>
              <p className="p-5 text-2xl font-semibold">About</p>
              <p className="p-5 text-2xl font-semibold">Clothe-Hub</p>
              <p className="p-5 text-2xl font-semibold">Contact</p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default NavBar;

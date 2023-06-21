import React, { useState } from "react";
import { useNavigate } from "react-router";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Aso from "../../Assets/img/Abimsaro.jpg";
import "../../components/components.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

  return (
    <div className="w-full fixed z-20">
      <div className=" xl:px-[14rem] px-4 py-2 floated active">
        <header className="flex justify-between items-center">
          <div className="cursor-pointer">
            <img
              onClick={() => navigate("/")}
              className="md:h-[4rem] h-9"
              src={Aso}
              alt="Aso"
            />
          </div>
          <div className="hidden md:flex text-[#d4a473] cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "pr-5 text-2xl font-semibold hover:text-[#432818] " +
                (isActive ? "selected" : "cursor-pointer ")
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                "pr-5 text-2xl font-semibold hover:text-[#432818] " +
                (isActive ? "selected" : "cursor-pointer ")
              }
            >
              About
            </NavLink>

            <NavLink
              to="/hub"
              className={({ isActive }) =>
                "pr-5 text-2xl font-semibold hover:text-[#432818] " +
                (isActive ? "selected" : "cursor-pointer")
              }
            >
              Asooke-Hub
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                "pr-5 text-2xl font-semibold hover:text-[#432818] " +
                (isActive ? "selected" : "cursor-pointer")
              }
            >
              Contact
            </NavLink>
          </div>
          <div onClick={handleNav} className="block md:hidden cursor-pointer">
            {nav ? (
              <IoClose size={30} color="#432818" />
            ) : (
              <IoMenu size={35} color="#432818" />
            )}
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] h-full border-r border-r-gray-900 bg-[#432818] ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <div className="place-items-center grid">
              <img className="h-[5rem]" src={Aso} alt="Aso" />
            </div>
            <div className="text-center text-[#fff6e4] cursor-pointer mt-5 ">
              <p
                onClick={() => navigate("/")}
                className="p-5 text-2xl font-semibold hover:text-[#d4a473]"
              >
                Home
              </p>
              <p
                onClick={() => navigate("/about")}
                className="p-5 text-2xl font-semibold hover:text-[#d4a473]"
              >
                About
              </p>
              <p
                onClick={() => navigate("/hub")}
                className="p-5 text-2xl font-semibold hover:text-[#d4a473]"
              >
                Asooke-Hub
              </p>
              <p
                onClick={() => navigate("/contact")}
                className="p-5 text-2xl font-semibold hover:text-[#d4a473]"
              >
                Contact
              </p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default NavBar;

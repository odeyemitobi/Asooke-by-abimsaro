import React from "react";
import As2 from "../../Assets/pic/Asooke2.png";
import As3 from "../../Assets/pic/Asooke3.png";
import As4 from "../../Assets/pic/Asooke4.png";
import As5 from "../../Assets/pic/Asooke5.png";
import As6 from "../../Assets/pic/Asooke6.png";
import As7 from "../../Assets/pic/Asooke7.png";
import { useNavigate } from "react-router";
import Mainlayout from "../../Layouts/Mainlayout";
import MoreBtn from "./../../components/Button/MoreBtn";

function Home() {
  const navigate = useNavigate();

  const service = [
    {
      id: 1,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As2} alt="As2" />
      ),
    },
    {
      id: 2,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As3} alt="As2" />
      ),
    },
    {
      id: 3,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As4} alt="As2" />
      ),
    },
    {
      id: 4,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As5} alt="As2" />
      ),
    },
    {
      id: 5,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As6} alt="As2" />
      ),
    },
    {
      id: 6,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As7} alt="As2" />
      ),
    },
  ];

  return (
    <Mainlayout>
      <div className="">
        <div className="w-full storebg">
          <div className="px-2 2xl:pt-[15rem] xl:pt-[15rem] lg:pt-[9rem] md:pt-[7rem] sm:pt-[8rem] xs:pt-[7rem] pt-[7rem]">
            <div className="text-center">
              <div className=" place-items-center grid">
                <h1 className=" w-full lg:w-[70%] md:w-[80%] text-white font-semibold 2xl:text-[5.8rem] xl:text-[5.8rem] lg:text-[5rem] md:text-[5rem] sm:text-[7rem] xs:text-[2.3rem] text-[2.3rem]">
                  Check out our Aso-oke hub
                </h1>
              </div>
              <div
                onClick={() => navigate("/hub")}
                className="text-center pt-6"
              >
                <MoreBtn>Our Aso-oke Hub</MoreBtn>
              </div>
            </div>
          </div>
        </div>

        <div className="md:pt-20 pt-10">
          <div className="">
            <div className="text-center">
              <h1 className="text-2xl sm:text-[3rem] text-[#432818] font-semibold">
                WHAT WE SELL
              </h1>
            </div>
            <div className=" xl:px-[18rem] sm:px-4 px-2 md:py-20 py-8 grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10">
              {service?.map((service) => (
                <div className=" w-full">
                  <div className=" place-items-center grid">
                    {service.image}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#d4a473]">
          <div className="py-[4rem] ">
            <div className="text-center">
              <h1 className="text-2xl sm:text-[3rem] text-white font-semibold">
                ABOUT
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#432818]">
          <div className="py-9 ">
            <div className="text-center text-white">
              <div>
                <h1>Contact Us</h1>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <footer className="bg-[#432818] border-t-2 border-[#fff6e4]">
          <div className="text-center place-items-center grid h-[8vh]">
            <h1 className="text-base text-white">
              &copy; Copyright 2023. Asooke by Abimsaro.
            </h1>
          </div>
        </footer>
      </div>
    </Mainlayout>
  );
}

export default Home;

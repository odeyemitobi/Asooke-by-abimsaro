import React from "react";
import As2 from "../../Assets/pic/Asooke2.png";
import As3 from "../../Assets/pic/Asooke3.png";
import As4 from "../../Assets/pic/Asooke4.png";
import As5 from "../../Assets/pic/Asooke5.png";
import As6 from "../../Assets/pic/Asooke6.png";
import As7 from "../../Assets/pic/Asooke7.png";
import Mainlayout from "../../Layouts/Mainlayout";
import MoreBtn from "./../../components/Button/MoreBtn";

function Home() {
  const service = [
    {
      id: 1,
      image: <img className="rounded-[10px] h-[25rem]" src={As2} alt="As2" />,
    },
    {
      id: 2,
      image: <img className="rounded-[10px] h-[25rem]" src={As3} alt="As2" />,
    },
    {
      id: 3,
      image: <img className="rounded-[10px] h-[25rem]" src={As4} alt="As2" />,
    },
    {
      id: 4,
      image: <img className="rounded-[10px] h-[25rem]" src={As5} alt="As2" />,
    },
    {
      id: 5,
      image: <img className="rounded-[10px] h-[25rem]" src={As6} alt="As2" />,
    },
    {
      id: 6,
      image: <img className="rounded-[10px] h-[25rem]" src={As7} alt="As2" />,
    },
  ];

  return (
    <Mainlayout>
      <div className="">
        <div className="w-full storebg">
          <div className="px-2 pt-[15rem]">
            <div className="text-center">
              <h1 className="text-white font-semibold xl:text-[6rem] lg:text-[6rem] md:text-[7rem] sm:text-[8rem] text-[4rem]">
                Check out our Aso-oke hub
              </h1>
            </div>
            <div className="text-center pt-6">
              <MoreBtn>Our Aso-oke Hub</MoreBtn>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="">
            <div className="text-center">
              <h1 className="text-4xl font-semibold">Our Services</h1>
            </div>
            <div className=" xl:px-[18rem] sm:px-4 px-2 py-14 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10">
              {service?.map((service) => (
                <div className=" w-full">
                  <div className=" place-items-center grid">{service.image}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Home;

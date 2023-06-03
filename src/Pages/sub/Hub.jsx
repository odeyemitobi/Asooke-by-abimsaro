import React from "react";
import As2 from "../../Assets/pic/Asooke2.png";
import As3 from "../../Assets/pic/Asooke3.png";
import As4 from "../../Assets/pic/Asooke4.png";
import As5 from "../../Assets/pic/Asooke5.png";
import As6 from "../../Assets/pic/Asooke6.png";
import As7 from "../../Assets/pic/Asooke7.png";
import As8 from "../../Assets/pic/Asooke8.png";
import As9 from "../../Assets/pic/Asooke9.png";
import As10 from "../../Assets/pic/Asooke10.png";
import As11 from "../../Assets/pic/Asooke11.png";
import As12 from "../../Assets/pic/Asooke12.png";
import As13 from "../../Assets/pic/Asooke13.png";

import Mainlayout from "../../Layouts/Mainlayout";

function Hub() {

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
    {
      id: 6,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As8} alt="As2" />
      ),
    },
    {
      id: 6,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As9} alt="As2" />
      ),
    },
    {
      id: 6,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As10} alt="As2" />
      ),
    },
    {
      id: 6,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As11} alt="As2" />
      ),
    },
    {
      id: 6,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As12} alt="As2" />
      ),
    },
    {
      id: 6,
      image: (
        <img className="rounded-[10px] xl:h-[25rem]" src={As13} alt="As2" />
      ),
    },
  ];


  return (
    <Mainlayout>
      <div className="w-full">
        <div className="md:pt-[11rem] pt-20">
          <div className=" place-items-center grid text-center">
            <h1 className="md:w-[20%] text-4xl text-[#432818] font-semibold p-2 border-[#d4a473] border-4">
              OUR HUB
            </h1>
          </div>
          <div className=" xl:px-[18rem] sm:px-4 px-2 md:py-20 py-8 grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {service?.map((service) => (
              <div className=" w-full">
                <div className=" place-items-center grid">{service.image}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Hub;

import React from "react";
import Mainlayout from "../../Layouts/Mainlayout";

function About() {
  return (
    <Mainlayout>
      <div className="w-full bg-[#432818] h-[50vh] ">
        <div className="trans">
          <h1 className="text-white md:text-[3rem] text-3xl font-semibold">
            About us
          </h1>
        </div>
      </div>

      <div className="xl:px-[18rem] px-2 xs:py-[3rem] pt-[3rem] pb-[6rem]">
        <div className="text-center">
          <p className="md:text-[2rem] text-[1.3rem]">
            At Asooke by Abimsaro we are intentional about bringing you elegance
            and style infused in our rich culture and tradition , through our
            versatile and unique range of Asooke fabrics we commit to making you
            look your most beautiful and radiant selves at any occasion.
          </p>
        </div>
      </div>
    </Mainlayout>
  );
}

export default About;

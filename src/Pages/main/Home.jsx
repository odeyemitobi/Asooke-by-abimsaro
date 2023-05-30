import React from "react";
import Mainlayout from "../../Layouts/Mainlayout";
import MoreBtn from "./../../components/Button/MoreBtn";

function Home() {
  return (
    <Mainlayout>
      <div className="">
        <div className="w-full storebg">
          <div className="md:px-[18rem] px-2 pt-[15rem]">
            <div className="text-center">
              <h1 className="text-white font-semibold xl:text-[4rem] lg:text-[4rem] md:text-[4rem] sm:text-[4rem] text-[3rem]">
                Check out our clothe hub
              </h1>
            </div>
            <div className="text-center pt-6">
              <MoreBtn>Our Clothe Hub</MoreBtn>
            </div>
          </div>
        </div>

        <div>
          <h1>hello</h1>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Home;

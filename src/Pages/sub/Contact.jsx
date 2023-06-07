import React from "react";
import Mainlayout from "../../Layouts/Mainlayout";

function Contact() {
  return (
    <Mainlayout>
      <div className="bg-[#432818]">
        <div className="xl:pt-[11rem] pb-[13rem] py-24 xl:px-[18rem] px-2">
          <div className="text-white ">
            <div className="">
              <h1 className="text-white xl:text-[5rem] text-4xl font-semibold">Contact Us</h1>
            </div>
            <div className="flex justify-between pt-[11rem]">
              <div className="w-full text-[4rem]">
                <h1>You can contact us via this information for more enquiries</h1>
              </div>
              <div className="w-full text-[2rem] text-center">
                <p>Telephone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Contact;

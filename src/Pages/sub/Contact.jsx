import React from "react";
import Mainlayout from "../../Layouts/Mainlayout";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <Mainlayout>
      <div className="bg-[#432818]">
        <div className="xl:pt-[11rem] pb-[13rem] py-24 xl:px-[18rem] px-2">
          <div className="text-white ">
            <div className="">
              <h1 className="text-white xl:text-[5rem] text-[3rem] font-semibold">
                Contact Us
              </h1>
            </div>
            <div className="xl:flex xl:flex-col-2 grid justify-between xl:pt-[11rem] pt-[5.5rem]">
              <div className="w-[90%] xl:text-[4rem] text-[2rem]">
                <h1>
                  You can contact us via this information for more enquiries
                </h1>
              </div>
              <div className="w-full text-[2rem] xl:pl-14">
                <div className="flex items-center border-b-2 xl:py-8 py-5">
                  <div>
                    <BsFillTelephonePlusFill />
                  </div>
                  <div className="ml-5 xl:text-[3rem] text-lg">
                    <a href="tel:+2347019139931">TEL: +234 701 913 9931</a>
                  </div>
                </div>
                <div className="flex items-center border-b-2 xl:py-8 py-5">
                  <div>
                    <MdEmail />
                  </div>
                  <div className="ml-5 xl:text-[3rem] text-lg">
                    <a href="mailto:bimsaro@hotmail.com?subject=subject text">
                      bimsaro@hotmail.com
                    </a>
                  </div>
                </div>
                <p className="border-b-2 py-5">Telephone</p>
                <p className="border-b-2 py-5">Telephone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Contact;

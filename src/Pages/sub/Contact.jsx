import React from "react";
import Mainlayout from "../../Layouts/Mainlayout";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Contact() {
  return (
    <Mainlayout>
      <div className="bg-[#432818]">
        <div className="xl:pt-[11rem] pb-[13rem] py-24 xl:px-[10rem] px-2">
          <div className="text-white ">
            <div className=" xl:pt-0 md:pt-[5.6rem] sm:pt-[5rem] ">
              <h1 className="text-white text-center xl:text-[5rem] sm:text-[5rem] xs:text-[3rem] text-[2rem] font-semibold">
                Contact Us
              </h1>
            </div>
            <div className="xl:flex xl:flex-col-2 md:flex md:flex-col-2  grid justify-between xl:pt-[5rem] pt-[3rem]">
              <div className="w-[90%] xl:text-[4rem] md:text-[3.7rem] sm:text-[5rem] text-[2rem] md:pt-10 ">
                <h1>For more Enquiries please contact us via this infos.</h1>
              </div>
              <div className="w-full text-[2rem] xl:pl-14 md:pl-12 xl:pt-0 pt-9">
                <div className="flex items-center border-b-2 xl:py-8 py-5">
                  <div>
                    <BsFillTelephonePlusFill />
                  </div>
                  <div className="ml-5 xl:text-[2.5rem] md:text-[2rem] sm:text-[2rem] text-lg">
                    <a
                      target="_blank"
                      href="tel:+2347019139931"
                      rel="noopener noreferrer"
                    >
                      TEL: +234 701 913 9931
                    </a>
                  </div>
                </div>
                <div className="flex items-center border-b-2 xl:py-8 py-5">
                  <div>
                    <MdEmail />
                  </div>
                  <div className="ml-5 xl:text-[2.5rem] md:text-[2rem] sm:text-[2rem] text-lg">
                    <a
                      target="_blank"
                      href="mailto:bimsaro@hotmail.com?subject=subject text"
                      rel="noopener noreferrer"
                    >
                      bimsaro@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center border-b-2 xl:py-8 py-5">
                  <div>
                    <FaFacebookF />
                  </div>
                  <div className="ml-5 xl:text-[2.5rem] md:text-[2rem] sm:text-[2rem] text-lg">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100010040205937&mibextid=ZbWKwL"
                      rel="noopener noreferrer"
                    >
                      Abimbola Arogundade
                    </a>
                  </div>
                </div>
                <div className="flex items-center border-b-2 xl:py-8 py-5">
                  <div>
                    <AiFillInstagram />
                  </div>
                  <div className="ml-5 xl:text-[2.5rem] md:text-[2rem] sm:text-[2rem] text-lg">
                    <a
                      target="_blank"
                      href="https://instagram.com/abimsaro/"
                      rel="noopener noreferrer"
                    >
                      Abimsaro
                    </a>
                  </div>
                </div>
                <div className="py-5 flex items-center">
                  <div>
                    <MdLocationOn />
                  </div>
                  <div className="ml-5 sm:text-[2rem] text-[1.2rem]">
                    <p className="cursor-pointer">
                      1 Lawrence Lane, Gotta, Opposite Sunlight Plaza, Eko
                      Idumota, Lagos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Contact;

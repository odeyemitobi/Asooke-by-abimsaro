import React from "react";
import As2 from "../../Assets/pic/Asooke2.png";
import As3 from "../../Assets/pic/Asooke3.png";
import As4 from "../../Assets/pic/Asooke4.png";
import As5 from "../../Assets/pic/Asooke5.png";
import As6 from "../../Assets/pic/Asooke6.png";
import As7 from "../../Assets/pic/Asooke7.png";
import { useNavigate } from "react-router";
import { ImFacebook } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import Mainlayout from "../../Layouts/Mainlayout";
import MoreBtn from "./../../components/Button/MoreBtn";

function Home() {
  const navigate = useNavigate();

  const service = [
    {
      id: 1,
      tittle: (
        <h1 className="xl:text-[1.7rem] xs:text-[1rem] text-[13px] font-semibold xl:ml-4 ml-1 pt-3">
          Multi-Coloured Cotton Asooke
        </h1>
      ),
      image: <img className="rounded-[5px] xl:h-[25rem]" src={As2} alt="As2" />,
    },
    {
      id: 2,
      tittle: (
        <h1 className="xl:text-[1.7rem] xs:text-[1rem] text-[13px] font-semibold xl:ml-4 ml-1 pt-3">
          Navy Blue and Powder blue cotton Asooke
        </h1>
      ),
      image: <img className="rounded-[5px] xl:h-[25rem]" src={As3} alt="As2" />,
    },
    {
      id: 3,
      tittle: (
        <h1 className="xl:text-[1.7rem] xs:text-[1rem] text-[13px] font-semibold xl:ml-4 ml-1 pt-3">
          Navy Blue and Powder blue cotton Asooke
        </h1>
      ),
      image: <img className="rounded-[5px] xl:h-[25rem]" src={As4} alt="As2" />,
    },
    {
      id: 4,
      tittle: (
        <h1 className="xl:text-[1.7rem] xs:text-[1rem] text-[13px] font-semibold xl:ml-4 ml-1 pt-3">
          Metallic Asooke
        </h1>
      ),
      image: <img className="rounded-[5px] xl:h-[25rem]" src={As5} alt="As2" />,
    },
    {
      id: 5,
      tittle: (
        <h1 className="xl:text-[1.7rem] xs:text-[1rem] text-[13px] font-semibold xl:ml-4 ml-1 pt-3">
          Damask Asooke
        </h1>
      ),
      image: <img className="rounded-[15x] xl:h-[25rem]" src={As6} alt="As2" />,
    },
    {
      id: 6,
      tittle: (
        <h1 className="xl:text-[1.7rem] xs:text-[1rem] text-[13px] font-semibold xl:ml-4 ml-1 pt-3">
          Multi-Coloured Cotton Asooke
        </h1>
      ),
      image: <img className="rounded-[5px] xl:h-[25rem]" src={As7} alt="As2" />,
    },
  ];

  return (
    <Mainlayout>
      <div className="">
        <div className="w-full storebg">
          <div className="px-2 lg:pt-[20rem] sm:pt-[15rem] xs:pt-[14rem] pt-[13rem]">
            <div className="text-center">
              <div className=" place-items-center grid">
                <h1 className=" w-full lg:w-[70%] md:w-[80%] right text-white font-semibold 2xl:text-[5.8rem] xl:text-[5.8rem] lg:text-[5rem] md:text-[5rem] sm:text-[7rem] xs:text-[2.3rem] text-[2.3rem]">
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
              <h1 className="text-2xl sm:text-[3rem] right text-[#432818] font-semibold">
                WHAT WE SELL
              </h1>
            </div>
            <div className=" xl:px-[18rem] sm:px-4 px-2 md:py-20 py-8 grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10">
              {service?.map((service) => (
                <div className=" w-full">
                  <div className=" place-items-center grid">
                    {service.image}
                  </div>
                  <div>{service.tittle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#d4a473]">
          <div className="py-[4rem] ">
            <div className="text-center">
              <h1 className="text-2xl sm:text-[3rem] right text-white font-semibold">
                ABOUT
              </h1>
            </div>
            <div className="pt-[3.5rem] xl:px-[18rem] px-2 ">
              <p className="text-center text-white sm:text-3xl text-lg">
                At Asooke by Abimsaro we are intentional about bringing you
                elegance and style infused in our rich culture and tradition ,
                through our versatile and unique range of Asooke fabrics we
                commit to making you look your most beautiful and radiant selves
                at any occasion.
              </p>
            </div>
            <div className="py-16 xl:px-[20rem] px-2 text-center text-white">
              <div className="">
                <h1 className=" right sm:text-4xl text-lg font-semibold">
                  Contact us
                </h1>
              </div>
              <div className="flex justify-center pt-4">
                <div className="border-2 rounded-full p-1 mr-3">
                  <a
                    target="_blank"
                    href="tel:+2347019139931"
                    rel="noopener noreferrer"
                  >
                    <BsTelephoneFill />
                  </a>
                </div>
                <div className="border-2 rounded-full p-1 mr-3">
                  <a
                    target="_blank"
                    href="mailto:bimsaro@hotmail.com?subject=subject text"
                    rel="noopener noreferrer"
                  >
                    <IoMdMail />
                  </a>
                </div>
                <div className="border-2 rounded-full p-1 mr-3">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100010040205937&mibextid=ZbWKwL"
                    rel="noopener noreferrer"
                  >
                    <ImFacebook />
                  </a>
                </div>
                <div className="border-2 rounded-full p-1 mr-3">
                  <a
                    target="_blank"
                    href="https://instagram.com/abimsaro/"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Home;

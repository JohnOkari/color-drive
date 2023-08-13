import React from "react";
import aboutusbg from "/aboutusbg.png";
import aboutuspic from "/aboutuspic.png";

const AboutUs = () => {
  return (
    <div className="md:h-[100vh] bg-black py-12 md:py-0 flex flex-col justify-around gap-4 items-center ">
      <div className="flex flex-col w-[100%] justify-center items-center">
        <p className="text-xl text-white md:text-2xl">About Us</p>
        <p className="bg-[#FB0000] md:w-[30%] w-[80%] h-[3px]"></p>
      </div>
      <div className="flex md:flex-row flex-col justify-around">
        <div
          style={{ backgroundImage: `url(${aboutusbg})` }}
          className="bg-cover bg-center h-[434px] md:w-[461px] w-[300px] flex justify-end items-end"
        >
          <img
            src={aboutuspic}
            alt=""
            className="md:h-[252px] h-[240px] md:-m-8 -m-4 md:w-[354px] w-[200px] object-cover"
          />
        </div>

        <div className="flex flex-col md:w-[50%] mt-12 md:mt-0 md:text-start text-center justify-center items-center gap-4">
        
          <div className="flex justify-center items-center gap-4">
            <button className="p-2 bg-[#FB0000] rounded-md text-white">
              Call To Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

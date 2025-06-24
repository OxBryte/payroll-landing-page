import React from "react";
import { BsArrowRight, BsLightningChargeFill } from "react-icons/bs";
import Navbar from "../layout/Navbar";

export default function Hero() {
  return (
    <div className="w-full min-h-[100dvh] mx-auto relative">
      <Navbar />
      <div className="w-full min-h-[95dvh] p-4 md:p-10 mx-auto relative flex flex-col items-center overflow-hidden justify-center bg-c-bg text-white">
        <div className="flex flex-col gap-4 z-10 items-center text-center">
          <div className="bg-c-color/20 px-4 py-2 rounded-lg flex items-center gap-2 text-c-color">
            <BsLightningChargeFill />
            <p className="text-xs font-normal">Latest update</p>
            {/* <BsArrowRight/> */}
          </div>
          <p className="font-bricolage text-[53px] font-bold leading-[60px]">
            Forge Trust <br /> with Every{" "}
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-c-color to-c-color/50">
              Paycheck
            </span>{" "}
          </p>
          <p className="max-w-[560px] w-full font-light">
            Deliver seamless, transparent payroll experiences that honor your
            team's dedication and fuel your company's ambition.
          </p>
          <button className="border-button bg-c-color px-6 py-3 rounded-md text-sm text-white cursor-pointer">
            Launch App
          </button>
        </div>
        {/* <div className="absolute -bottom-20 -left-10 m-auto bg-c-color/50 w-[350px] h-[350px] blur-[80px] rounded-full"></div>
      <div className="absolute top-20 -right-10 m-auto bg-[#C294C2]/50 w-[350px] h-[350px] blur-[80px] rounded-full"></div> */}
        {/* <div className="absolute top-0 left-0 m-auto">
          <img src="/light.webp" alt="" className="" />
        </div> */}
        <div className="absolute inset-x-0 -bottom-60 m-auto bg-gradient-to-br from-c-color to-black w-[340px] h-[340px] blur-[60px] rounded-full"></div>
      </div>
    </div>
  );
}

import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="w-full min-h-[70dvh] rounded-3xl overflow-hidden p-10 mx-auto bg-gray-100 relative flex flex-col items-center justify-center">
      <div className="flex flex-col gap-2 z-10 items-center text-center">
        <div className="bg-c-color/20 px-4 py-2 rounded-sm flex items-center gap-2 text-c-color">
          <BsLightningChargeFill />
          <p className="text-xs font-normal">Take Full Control of Your Task</p>
        </div>
        <p className="font-bricolage text-[48px] font-bold">Payroll</p>
        <p className="text-sm font-light">
          Simplifying payroll management for businesses of all sizes.
        </p>
        <button className="bg-c-color px-4 py-2 rounded-md text-sm text-white">
          Launch App
        </button>
      </div>
      <div className="absolute inset-x-0 -bottom-30 m-auto bg-gradient-to-br from-c-color to-black w-60 h-60 blur-[30px] rounded-full"></div>
    </div>
  );
}

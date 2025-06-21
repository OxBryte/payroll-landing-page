import React from "react";

export default function Hero() {
  return (
      <div className="w-full min-h-[70dvh] rounded-3xl overflow-hidden p-10 mx-auto bg-gray-100 relative">
          <p className="font-bricolage text-[48px] font-bold">Payroll</p>
      <div className="absolute inset-x-0 -bottom-30 m-auto bg-gradient-to-br from-c-color to-black w-60 h-60 blur-[30px] rounded-full"></div>
    </div>
  );
}

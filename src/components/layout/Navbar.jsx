import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-18 flex items-center justify-between max-w-[1450px] px-4 mx-auto">
      <div className="">
        <img src="/glok-logo.svg" alt="" className="w-8" />
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#about"
          className="hover:text-c-color font-light text-sm hover:font-semibold"
        >
          About
        </a>
        <a
          href="#about"
          className="hover:text-c-color font-light text-sm hover:font-semibold"
        >
          Jobs(Coming soon)
        </a>
        <a
          href="#features"
          className="hover:text-c-color font-light text-sm hover:font-semibold"
        >
          Features
        </a>
      </div>
      <button className="bg-c-color px-4 py-2 rounded-md text-sm text-white">
        Launch App
      </button>
    </div>
  );
}

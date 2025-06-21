import React from "react";
import Navbar from "./Navbar";

export default function Container({ children }) {
  return (
    <div className="w-full mx-auto max-w-[1450px] px-4 flex flex-col gap-0">
      <Navbar />
      {children}
    </div>
  );
}

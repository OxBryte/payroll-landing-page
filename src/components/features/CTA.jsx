import React from "react";
import Container from "../layout/Container";

export default function CTA() {
  return (
    <Container>
      <div className="w-full mx-auto bg-c-bg p-10 md:p-20 min-h-[320px] flex items-center text-white relative overflow-hidden my-20">
        <div className="absolute -bottom-10 -left-10 mx-auto w-[180px] h-[180px] bg-c-color/50 rounded-full blur-[60px]"></div>
        <div className="flex flex-col items-left  space-y-6">
          <h2 className="text-3xl font-bricolage font-bold">
            Ready to simplify payroll?
          </h2>
          <div className="flex gap-6 items-center">
            <button className="bg-c-color px-4 py-2 rounded-md text-sm text-white scale-[110%]">
              Launch App
            </button>
            <button className="bg-white px-4 py-2 rounded-md text-sm text-black scale-[110%]">
              Request a Demo
            </button>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-10 w-[320px]">
          <img src="/gloc-logo.svg" alt="" className="w-full" />
        </div>
      </div>
    </Container>
  );
}

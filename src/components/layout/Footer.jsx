import React from "react";
import Container from "./Container";
import { BsTelegram, BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="py-6 border-t border-gray-200">
      <Container>
        <div className="w-full mx-auto flex items-center justify-between gap-6">
          <img src="/gloc-logo-4.svg" alt="" className="w-22" />
          <div className="flex items-center gap-4 text-gray-500 hover:text-c-color transition-colors">
            <div className="text-gray-500 hover:text-c-color transition-colors cursor-pointer">
              <BsTwitterX size={20} />
            </div>
            <div className="text-gray-500 hover:text-c-color transition-colors cursor-pointer">
              <BsTelegram size={20} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

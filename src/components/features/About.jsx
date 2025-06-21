import React from "react";

export default function About() {
  return (
    <div className="w-full mx-auto max-w-[1100px] py-10">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <p className="text-[36px] max-w-[360px] font-bold font-bricolage ">
          Building Solutions, Expanding Horizons
        </p>
        <div className="space-y-4 max-w-[500px]">
          <p className="text-sm text-gray-600 leading-[23px] font-light tracking-wide">
            At Payroll, we are dedicated to creating innovative solutions that
            empower businesses and individuals alike. Our mission is to simplify
            complex processes, enhance productivity, and foster growth through
            cutting-edge technology and user-centric design.
          </p>
          <p className="text-sm text-gray-600 leading-[23px] font-light tracking-wide">
            With a focus on quality and customer satisfaction, we strive to
            deliver exceptional products and services that meet the evolving
            needs of our clients. Our team of experts is committed to pushing
            the boundaries of what is possible, ensuring that we remain at the
            forefront of our industry.{" "}
          </p>
          <p className="text-sm text-gray-600 leading-[23px] font-light tracking-wide">
            With a focus on quality and customer satisfaction, we strive to
            deliver exceptional products and services that meet the evolving
            needs of our clients. Our team of experts is committed to pushing
            the boundaries of what is possible, ensuring that we remain at the
            forefront of our industry.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

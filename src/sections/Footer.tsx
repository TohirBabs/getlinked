import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="px-8 lg:px-16 pt-8 pb-4 bg-[#100B20]">
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-8 justify-between">
        <div className="flex flex-col gap-6 max-w-[400px]">
          <div className="w-24 h-5 lg:h-11 lg:w-40 relative">
            <Image
              src="/logo.svg"
              alt="GetLinked Logo"
              fill
              objectFit="contain"
              priority
            />
          </div>
          <p className="text-xs leading-6">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="flex items-center text-xs gap-2 ">
            <p>Terms of use</p>
            <p className="text-lg text-[#D434FE]">|</p>
            <p>Privacy</p>
          </div>
        </div>
        <div className="flex flex-col text-xs gap-6 max-w-[400px]">
          <p className="text-sm text-[#D434FE]">Useful Links</p>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
        </div>
        <div className="flex flex-col text-xs gap-6 max-w-[400px]">
          <p className="text-sm text-[#D434FE]">Useful Links</p>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

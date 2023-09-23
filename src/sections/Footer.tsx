import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="px-8 lg:px-16 py-20 bg-opacity-50 relative pb-4 bg-[#100B20]">
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-8 justify-around">
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

          <div className="flex items-center text-xs gap-2 pt-10">
            <p>Terms of use</p>

            <p className="text-lg text-[#D434FE]">|</p>

            <p>Privacy</p>
          </div>
        </div>
        <div className="flex flex-col text-xs gap-6 max-w-[400px]">
          <p className="text-sm font-semibold text-[#D434FE]">Useful Links</p>

          <p>Overview</p>

          <p>Timeline</p>

          <p>FAQs</p>

          <p>Register</p>

          <div className="flex gap-4 items-center">
            <p className="text-[#D434FE] ">Follow Us</p>
            <Image
              src="/instagram_icon.svg"
              width={25}
              height={25}
              alt="GetLinked Logo"
            />
            <Image
              src="/x_icon.svg"
              width={25}
              height={25}
              alt="GetLinked Logo"
            />{" "}
            <Image
              src="/facebook_icon.svg"
              width={13}
              height={25}
              alt="GetLinked Logo"
            />{" "}
            <Image
              src="/linkedin_icon.svg"
              width={25}
              height={25}
              alt="GetLinked Logo"
            />
          </div>
        </div>
        <div className="flex flex-col text-xs gap-6 max-w-[400px]">
          <p className="text-sm font-semibold text-[#D434FE]">Contact Us</p>

          <div className="flex gap-2">
            <Image
              src="/telephoneicon.svg"
              width={18}
              height={18}
              alt="GetLinked Logo"
            />
            <p>+234 6707653444</p>
          </div>

          <div className="flex gap-2">
            <Image
              src="/location_icon.svg"
              width={18}
              height={18}
              alt="GetLinked Logo"
            />
            <p className="w-[40%]">27,Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      <p className="text-xs text-center pt-10">
        All rights reserved. © getlinked Ltd.
      </p>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-8 lg:px-16 py-20 bg-opacity-50 relative pb-4 bg-[#100B20]">
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-8 justify-around">
        <div className="flex flex-col gap-6 max-w-[400px]">
          <Link href="/">
            <div className="w-24 h-5 lg:h-11 lg:w-40 relative">
              <Image
                src="/logo.svg"
                alt="GetLinked Logo"
                fill
                objectFit="contain"
                priority
              />
            </div>
          </Link>

          <p className="text-xs leading-6">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>

          <div className="flex items-center text-xs gap-2 pt-10">
            <p>Terms of use</p>

            <p className="text-lg text-[#D434FE]">|</p>

            <Link href="/#privacy">Privacy</Link>
          </div>
        </div>
        <div className="flex flex-col text-xs gap-6 max-w-[400px]">
          <p className="text-sm font-semibold text-[#D434FE]">Useful Links</p>
          <Link href="/#introduction">Overview</Link>
          <Link href="/#timeline">Timeline</Link>
          <Link href="/#faqs">FAQs</Link> <Link href="/register">Register</Link>
          <div className="flex gap-4 items-center">
            <p className="text-[#D434FE] ">Follow Us</p>
            <a href="/">
              <Image
                src="/insta.svg"
                width={25}
                height={25}
                alt="Getaed Logo"
              />
            </a>
            <a href="https://twitter.com/BabsTohir">
              <Image
                src="/x_icon.svg"
                width={25}
                height={25}
                alt="GetLinked Logo"
              />
            </a>
            <Image
              src="/facebook_icon.svg"
              width={13}
              height={25}
              alt="GetLinked Logo"
            />
            <a href="https://www.linkedin.com/in/tohir-babs-6a0045167/">
              <Image
                src="/linkedin_icon.svg"
                width={25}
                height={25}
                alt="GetLinked Logo"
              />
            </a>
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

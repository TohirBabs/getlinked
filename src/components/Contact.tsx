import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="h-screen  lg:px-16 border-b border-b-white border-opacity-20">
      <div className="2xl:max-w-[1280px] w-full mx-auto my-auto flex flex-col  items-center justify-center gap-10 text-sm lg:flex-row-reverse p-3  ">
        <div className="lg:p-10 p-4 lg:border-white lg:border rounded lg:border-opacity-5 lg:backdrop-blur lg:bg-white/5 max-w-xl lg:gap-8 gap-4 flex flex-col">
          <h3 className="font-title font-bold text-2xl text-[#D434FE] w-[80%]">
            Questions or need assistance? Let us know about it
          </h3>
          <p>Email us below to any question related to our event</p>
          <button className="capitalize  py-3 px-12 btn-grad rounded-md w-max">
            submit
          </button>
        </div>
        <div className="flex flex-col gap-8 max-w-md lg:pr-40 items-center lg:items-start text-center lg:text-start">
          <div className="hidden lg:flex flex-col gap-8">
            <h2 className="font-title font-bold text-4xl text-[#D434FE]">
              Get in touch
            </h2>
            <p>Contact Information</p>
            <p className="w-[40%]">27,Alara Street Yaba 100012 Lagos State</p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
          </div>

          <div className="">
            <p className="text-[#D434FE] pb-3">Share on</p>
            <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;

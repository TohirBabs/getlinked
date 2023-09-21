import Image from "next/image";
import React from "react";

const Faqs = () => {
  return (
    <div className="px-4 lg:px-10 py-4 pt-8 w-full  border-b border-b-white border-opacity-20">
      <div className=" 2xl:max-w-[1280px] w-full mx-auto justify-center items-center flex flex-col lg:flex-row-reverse lg:px-10  lg:gap-16  text-center lg:text-left">
        <div className="lg:w-[50%] w-full lg:h-[500px] h-[300px]  relative">
          <Image src="/faq.svg" alt="GetLinked Logo" fill objectFit="contain" />
        </div>
        <div className="flex-1 p-4">
          <div className="pb-4">
            <h2 className="font-title font-semibold text-2xl lg:text-4xl">
              Frequently Asked
            </h2>
            <h2 className="font-title font-semibold text-2xl lg:text-4xl text-[#D434FE]">
              Questions
            </h2>
          </div>
          <p className="text-xs leading-6 pb-8">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

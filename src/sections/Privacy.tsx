import Image from "next/image";
import React from "react";

const Privacy = () => {
  return (
    <div className="px-4 lg:px-10 py-4 pt-8 w-full  border-b border-b-white border-opacity-20">
      <div className=" 2xl:max-w-[1280px] w-full mx-auto justify-center items-center flex flex-col lg:flex-row lg:px-10  lg:gap-16  text-center lg:text-left">
        <div className="flex-1 p-4">
          <div className="pb-4">
            <h2 className="font-title font-semibold text-2xl lg:text-4xl">
              Privacy Policy and
            </h2>
            <h2 className="font-title font-semibold text-2xl lg:text-4xl text-[#D434FE]">
              Terms
            </h2>
          </div>
          <p className="text-xs opacity-70">
            Last updated on September 12, 2023
          </p>
          <p className="text-xs leading-6 pb-8">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className="p-4 border border-[#D434FE] rounded">
            <p className="text-xs leading-6 pb-8">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <button className="capitalize  py-3 px-12 btn-grad rounded-md w-max">
              read more
            </button>
          </div>
        </div>
        <div className="lg:w-[50%] w-full lg:h-[500px] h-[300px]  relative">
          <Image
            src="/privacy.svg"
            alt="GetLinked Logo"
            fill
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Privacy;

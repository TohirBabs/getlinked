import Image from "next/image";
import React from "react";

const Rewards = () => {
  return (
    <div className="px-4 lg:px-10 py-4 pt-8 w-full relative  border-b border-b-white border-opacity-20">
      <div className=" 2xl:max-w-[1280px] w-full mx-auto justify-center items-center flex flex-col lg:flex-row lg:px-10  lg:gap-16  text-center lg:text-left">
        <div className="lg:w-[50%] w-full lg:h-[500px] h-[300px]  relative">
          <Image
            src="/reward.svg"
            alt="GetLinked Logo"
            fill
            objectFit="contain"
          />
        </div>
        <div className="flex-1 p-4">
          <div className="pb-4">
            <h2 className="font-title font-semibold text-2xl lg:text-4xl">
              Prizes and
            </h2>

            <h2 className="font-title font-semibold text-2xl lg:text-4xl text-[#D434FE]">
              Rewards
            </h2>
          </div>
          <p className="text-xs leading-6">
            Highlight of the prizes or rewards for winners and for participants.
          </p>

          <div className=" w-full lg:h-[500px] h-[300px]  relative  pb-8">
            <Image
              src="/position.svg"
              alt="GetLinked Logo"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;

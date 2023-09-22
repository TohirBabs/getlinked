import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <div className="px-4 lg:px-10 py-4 pt-8 w-full relative border-b border-b-white border-opacity-20">
      <div className=" 2xl:max-w-[1280px] w-full mx-auto justify-center items-center flex flex-col  lg:px-10  lg:gap-16  text-center">
        <div className="flex-1 p-4">
          <div className="pb-4">
            <Reveal width="100%">
              <h2 className="font-title font-semibold text-2xl lg:text-4xl">
                Timeline
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="text-xs leading-6  lg:w-[70%] mx-auto">
              Here is the breakdown of the time we anticipate using for the
              upcoming event.
            </p>
          </Reveal>
        </div>
        <div className=" w-full lg:h-[500px] h-[200px] pb-8  relative">
          <Image
            src="/sponsors.svg"
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

export default Timeline;

import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="px-4 lg:px-10 py-8 pb-14 w-full relative border-b border-b-white border-opacity-20"
    >
      <div className=" 2xl:max-w-[1280px] w-full mx-auto justify-center items-center flex flex-col  lg:px-10  lg:gap-8  text-center">
        <div className="flex-1 p-4 pb-8">
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
        <Reveal width="100%">
          <div className="relative lg:py-16 px-4 gap-10 flex flex-col">
            <div className="absolute top-0 h-full w-1 rounded bg-[#D434FE] lg:left-[50%] lg:-translate-x-[50%]"></div>
            <div className="flex flex-col lg:flex-row lg:gap-12 gap-4 pl-7 lg:pl-0 lg:items-center relative">
              <div className="flex-1 lg:text-right text-left max-w-xl">
                <p className=" text-[#D434FE] font-semibold pb-3">
                  Hackerthon Announcement
                </p>
                <p className="text-xs">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <div className="p-2 bg-primary-purple z-10 absolute lg:relative lg:bottom-0 lg:left-0 -bottom-3 -left-5">
                <Image src="/one.svg" alt="one" width={30} height={30} />
              </div>
              <p className=" text-[#D434FE] flex-1 font-semibold text-left">
                November 18, 2023
              </p>
            </div>
            <div className="flex flex-col lg:flex-row-reverse lg:gap-12 gap-4 pl-7 lg:pl-0 lg:items-center relative">
              <div className="flex-1  text-left max-w-xl">
                <p className=" text-[#D434FE] font-semibold pb-3">
                  Teams Registration begins
                </p>
                <p className="text-xs">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
              <div className="p-2 bg-primary-purple z-10 absolute lg:relative lg:bottom-0 lg:left-0 -bottom-3 -left-5">
                <Image src="/two.svg" alt="one" width={30} height={30} />
              </div>
              <p className=" text-[#D434FE] flex-1 font-semibold lg:text-right text-left">
                November 18, 2023
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-12 gap-4 pl-7 lg:pl-0 lg:items-center relative">
              <div className="flex-1 lg:text-right text-left max-w-2xl">
                <p className=" text-[#D434FE] font-semibold pb-3">
                  Teams Registration ends
                </p>
                <p className="text-xs">
                  Interested Participants are no longer Allowed to register
                </p>
              </div>
              <div className="p-2 bg-primary-purple z-10 absolute lg:relative lg:bottom-0 lg:left-0 -bottom-3 -left-5">
                <Image src="/three.svg" alt="three" width={30} height={30} />
              </div>
              <p className=" text-[#D434FE] flex-1 font-semibold text-left">
                November 18, 2023
              </p>
            </div>
            <div className="flex flex-col lg:flex-row-reverse lg:gap-12 gap-4 pl-7 lg:pl-0 lg:items-center relative">
              <div className="flex-1  text-left max-w-2xl">
                <p className=" text-[#D434FE] font-semibold pb-3">
                  Announcement of the accepted teams and ideas
                </p>
                <p className="text-xs">
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
              <div className="p-2 bg-primary-purple z-10 absolute lg:relative lg:bottom-0 lg:left-0 -bottom-3 -left-5">
                <Image src="/four.svg" alt="four" width={30} height={30} />
              </div>
              <p className=" text-[#D434FE] flex-1 font-semibold lg:text-right text-left">
                November 18, 2023
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-12 gap-4 pl-7 lg:pl-0 lg:items-center relative">
              <div className="flex-1 lg:text-right text-left max-w-2xl">
                <p className=" text-[#D434FE] font-semibold pb-3">
                  Getlinked Hackathon 1.0 Offically Begins
                </p>
                <p className="text-xs">
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
              <div className="p-2 bg-primary-purple z-10 absolute lg:relative lg:bottom-0 lg:left-0 -bottom-3 -left-5">
                <Image src="/five.svg" alt="one" width={30} height={30} />
              </div>
              <p className=" text-[#D434FE] flex-1 font-semibold text-left">
                November 18, 2023
              </p>
            </div>
            <div className="flex flex-col lg:flex-row-reverse lg:gap-12 gap-4 pl-7 lg:pl-0 lg:items-center relative">
              <div className="flex-1  text-left max-w-2xl">
                <p className=" text-[#D434FE] font-semibold pb-3">Demo Day</p>
                <p className="text-xs">
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>
              <div className="p-2 bg-primary-purple z-10 absolute lg:relative lg:bottom-0 lg:left-0 -bottom-3 -left-5">
                <Image src="/six.svg" alt="one" width={30} height={30} />
              </div>
              <p className=" text-[#D434FE] flex-1 font-semibold lg:text-right text-left">
                November 18, 2023
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Timeline;

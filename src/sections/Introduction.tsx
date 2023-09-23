/* eslint-disable react/no-unescaped-entities */

import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div
      id="introduction"
      className="px-4  lg:px-10 py-8 pt-8 w-full relative  border-b border-b-white border-opacity-20"
    >
      <div className=" 2xl:max-w-[1280px] w-full mx-auto justify-center items-center flex flex-col lg:flex-row lg:px-10  lg:gap-16  text-center lg:text-left">
        <div className="lg:w-[50%] w-full lg:h-[500px] h-[300px] relative">
          <Image
            src="/bigidea.svg"
            alt="idea illustration"
            className="object-contain"
            fill
          />
        </div>
        <div className="flex-1 p-4">
          <Reveal width="100%">
            <>
              <div className="pb-4">
                <h2 className="font-title font-semibold text-2xl lg:text-4xl">
                  Introduction to getlinked
                </h2>

                <h2 className="font-title font-semibold text-2xl lg:text-4xl text-[#D434FE]">
                  tech Hackathon 1.0
                </h2>
              </div>

              <p className="text-xs leading-6 pb-8">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

"use client";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import { motion } from "framer-motion";
import Countdown from "react-countdown";

export default function Hero() {
  return (
    <div className="relative h-screen flex-col flex  w-full overflow-hidden">
      <div className="p-2 lg:px-16 z-10  relative flex-1  flex flex-col items-start lg:justify-center mt-20 w-full border-b border-b-white border-opacity-20 ">
        <div className="2xl:max-w-[1280px] w-full mx-auto">
          <div className="lg:w-[60%] flex flex-col items-center text-center lg:text-left lg:items-start gap-6">
            <div className="text-4xl flex flex-col gap-2 font-semibold font-title lg:text-7xl">
              <Reveal width="100%">
                <div className="flex relative lg:justify-start justify-center lg:pt-20 pt-8">
                  <h2 className=" ">getlinked Tech</h2>

                  <div className="w-10 h-10 lg:w-20 lg:h-20  absolute lg:bottom-12 bottom-6 lg:right-40 right-10">
                    <Image
                      src="/bulb.svg"
                      alt="bulb outline"
                      fill
                      objectFit="contain"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="flex gap-1">
                  <h2 className="font-title lg:text-7xl">
                    Hackathon <span className="text-[#D434FE]">1.0</span>
                  </h2>

                  <div className="w-10 h-10 lg:w-20 lg:h-20  relative">
                    <Image
                      src="/chain.svg"
                      alt="GetLinked Logo"
                      fill
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-10 h-10 lg:w-20 lg:h-20  relative">
                    <Image
                      src="/explosion.svg"
                      alt="GetLinked Logo"
                      fill
                      objectFit="contain"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <p className="lg:w-[55%] px-10  lg:px-0 text-xs lg:text-base">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
            </Reveal>
            <Reveal>
              <button className="capitalize relative py-3 px-12 btn-grad rounded-md w-max">
                register
              </button>
            </Reveal>
            <Countdown
              date={new Date(2023, 8, 26)}
              renderer={({ hours, minutes, seconds }) => (
                <Reveal>
                  <div className="flex gap-8 uppercase font-unicaOne lg:pt-10 ">
                    <div className="flex items-end">
                      <p className="text-5xl lg:text-6xl">{hours}</p>
                      <span className="leading-10">h</span>
                    </div>
                    <div className="flex items-end">
                      <p className="text-5xl lg:text-6xl">{minutes}</p>
                      <span className="leading-10">m</span>
                    </div>
                    <div className="flex items-end">
                      <p className="text-5xl lg:text-6xl">{seconds}</p>
                      <span className="leading-10">s</span>
                    </div>
                  </div>
                </Reveal>
              )}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.2 } }}
            className="absolute w-full lg:h-full h-[50%] max-w-[750px] right-0 bottom-0"
          >
            <div className="absolute lg:bottom-20 bottom-5 lg:left-8 lg:h-[70%] h-full  w-full opacity-80">
              <Image
                className="object-contain"
                src="/metrix.svg"
                alt="GetLinked Logo"
                fill
              />
            </div>
            <div className="absolute bottom-0  h-full max-h-[640px]  w-full">
              <Image
                className="object-cover lg:object-contain"
                src="/man-wearing-smart-glasses-touching-virtual-screen.png"
                alt="GetLinked Logo"
                fill
              />
            </div>

            <div className="absolute lg:bottom-20 bottom-5 lg:left-8 lg:h-[70%] h-full  w-full opacity-80">
              <Image
                className="object-contain"
                src="/nodeweb.svg"
                alt="GetLinked Logo"
                fill
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Countdown from "react-countdown";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative lg:-top-[96px]  h-screen min-h-[840px] flex-col flex  w-full overflow-hidden">
      <div className="p-2 lg:px-16 z-10 min-h-[55vh] relative flex-1  flex flex-col items-start lg:justify-center  w-full border-b border-b-white border-opacity-20 ">
        <div className="italic relative font-semibold lg:text-[1.7rem] text-center lg:absolute lg:right-20 lg:top-[6.5rem] w-full top-4 lg:text-right">
          <Typewriter
            options={{
              strings: "Igniting a Revolution in HR Innovation",
              cursor: "_",
              autoStart: true,
            }}
          />

          <div className="w-32 h-3 lg:w-60 lg:h-5  absolute lg:-bottom-4 -bottom-2  right-0">
            <Image
              src="/curve.svg"
              alt="bulb outline"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        <div className="2xl:max-w-[1280px] w-full mx-auto">
          <div className="lg:w-[60%] flex flex-col items-center text-center lg:text-left lg:items-start gap-8 ">
            <div className="text-4xl flex flex-col gap-2 font-semibold font-title lg:text-7xl">
              <div className="flex relative lg:justify-start justify-center lg:pt-20 pt-12">
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
              <div className=" relative lg:justify-start justify-center flex gap-1">
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
            </div>

            <div className="w-full gap-4 flex flex-col">
              <p className="lg:w-[55%] px-10  lg:px-0 text-xs lg:text-base">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              {/* <div className="flex"></div> */}
              <Button className="w-max mx-auto lg:mx-0">Register</Button>
            </div>

            <Countdown
              date={new Date(2023, 11, 18)}
              renderer={({ hours, minutes, seconds }) => (
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
              )}
            />
          </div>
          <div className="absolute w-full lg:h-[95%] h-[50%] max-w-[750px] right-0 bottom-0">
            <div className="absolute lg:bottom-20 bottom-5 lg:left-8 lg:h-[70%] h-full  w-full opacity-80">
              <Image
                className="object-contain"
                src="/metrix.svg"
                alt="GetLinked Logo"
                fill
                priority
              />
            </div>
            <div className="absolute bottom-0  h-full max-h-[640px]  w-full">
              <Image
                className="object-cover lg:object-contain"
                src="/man-wearing-smart-glasses-touching-virtual-screen.png"
                alt="GetLinked Logo"
                fill
                priority
              />
            </div>

            <div className="absolute lg:bottom-20 bottom-5 lg:left-8 lg:h-[70%] h-full  w-full opacity-80">
              <Image
                className="object-contain"
                src="/nodeweb.svg"
                alt="GetLinked Logo"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

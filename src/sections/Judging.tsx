import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import React from "react";

const Judging = () => {
  return (
    <div className="px-4 lg:px-10 py-4 pt-8 w-full relative  border-b border-b-white border-opacity-20 ">
      <div className=" 2xl:max-w-[1280px] w-full mx-auto justify-center items-center flex flex-col lg:flex-row lg:px-10  lg:gap-16  text-center lg:text-left">
        <div className="lg:w-[50%] w-full lg:h-[500px] h-[300px]  relative">
          <Image
            src="/judging.svg"
            alt="GetLinked Logo"
            fill
            objectFit="contain"
            priority
          />
        </div>
        <div className="flex-1 py-3 px-4">
          <Reveal width="100%">
            <>
              <div className="pb-4">
                <h2 className="font-title font-semibold text-2xl lg:text-4xl">
                  Judging Criteria
                </h2>

                <h2 className="font-title font-semibold text-2xl lg:text-4xl text-[#D434FE]">
                  Key Features
                </h2>
              </div>
              <div className="pb-8 flex flex-col gap-6">
                <p className="text-xs leading-6">
                  <span className="text-sm text-[#FF26B9]">
                    Innovation and Creativity:{" "}
                  </span>
                  Evaluate the uniqueness and creativity of the solution.
                  Consider whether it addresses a real-world problem in a novel
                  way or introduces innovative features.
                </p>

                <p className="text-xs leading-6">
                  <span className="text-sm text-[#FF26B9]">
                    Functionality:{" "}
                  </span>
                  Assess how well the solution works. Does it perform its
                  intended functions effectively and without major issues?
                  Judges would consider the completeness and robustness of the
                  solution.
                </p>

                <p className="text-xs leading-6">
                  <span className="text-sm text-[#FF26B9]">
                    Impact and Relevance:{" "}
                  </span>
                  Determine the potential impact of the solution in the real
                  world. Does it address a significant problem, and is it
                  relevant to the target audience? Judges would assess the
                  potential social, economic, or environmental benefits.
                </p>

                <p className="text-xs leading-6">
                  <span className="text-sm text-[#FF26B9]">
                    Technical Complexity:{" "}
                  </span>
                  Evaluate the technical sophistication of the solution. Judges
                  would consider the complexity of the code, the use of advanced
                  technologies or algorithms, and the scalability of the
                  solution.
                </p>

                <p className="text-xs leading-6">
                  <span className="text-sm text-[#FF26B9]">
                    Adherence to Hackathon Rules:{" "}
                  </span>
                  Judges will Ensure that the team adhered to the rules and
                  guidelines of the hackathon, including deadlines, use of
                  specific technologies or APIs, and any other
                  competition-specific requirements.
                </p>
              </div>
            </>
          </Reveal>

          <button className="capitalize relative  py-3 px-12 btn-grad rounded-md w-max">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Judging;

import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <div className="h-screen  lg:px-16 border-b border-b-white border-opacity-20">
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col  items-center justify-center gap-10 text-sm lg:flex-row p-3  ">
        <div className="lg:w-[50%] w-full lg:h-[500px] h-[300px]  relative">
          <Image
            src="/3d-graphic-designer-showing-thumbs-up.svg"
            alt="GetLinked Logo"
            fill
            objectFit="contain"
          />
        </div>
        <div className="lg:p-10 p-4 w-full lg:border-white lg:border rounded lg:border-opacity-5 lg:backdrop-blur lg:bg-white/5 max-w-xl lg:gap-8 gap-4 flex flex-col">
          <h3 className="font-title font-bold text-2xl text-[#D434FE]">
            Register
          </h3>
          <div className="flex">
            <p>Be part of this movement!</p>
            <Image
              src="walking.svg"
              alt="GetLinked Logo"
              width={90}
              height={40}
            />
          </div>
          <h3 className="uppercase">create your aaccount</h3>
          <button className="capitalize  py-3 px-12 btn-grad rounded-md w-max lg:w-full">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

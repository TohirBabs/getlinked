"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinkVariants = {
    initial: {
      opacity: 0,
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const Cancel_icon = () => {
    return (
      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.307505 10.6925C0.504459 10.8894 0.771552 11 1.05005 11C1.32854 11 1.59563 10.8894 1.79259 10.6925L5.50634 6.97874L9.22009 10.6925C9.41818 10.8838 9.68348 10.9897 9.95886 10.9873C10.2342 10.9849 10.4977 10.8744 10.6924 10.6797C10.8871 10.485 10.9976 10.2216 11 9.94617C11.0024 9.6708 10.8965 9.4055 10.7052 9.20741L6.99142 5.49366L10.7052 1.77991C10.8965 1.58182 11.0024 1.31652 11 1.04114C10.9976 0.765767 10.8871 0.502346 10.6924 0.307617C10.4977 0.112889 10.2342 0.00243378 9.95886 4.1008e-05C9.68348 -0.00235271 9.41818 0.103509 9.22009 0.294824L5.50634 4.00858L1.79259 0.294824C1.5945 0.103509 1.3292 -0.00235271 1.05383 4.1008e-05C0.778448 0.00243378 0.515027 0.112889 0.320299 0.307617C0.12557 0.502346 0.0151142 0.765767 0.0127213 1.04114C0.0103283 1.31652 0.11619 1.58182 0.307505 1.77991L4.02126 5.49366L0.307505 9.20741C0.110609 9.40437 0 9.67146 0 9.94995C0 10.2284 0.110609 10.4955 0.307505 10.6925Z"
          fill="#F8F8F8"
        />
      </svg>
    );
  };
  const navVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const navLinks = [
    { title: "timeline", href: "#" },
    { title: "overview", href: "#" },
    { title: "FAQs", href: "#" },
    { title: "contact", href: "#" },
  ];

  const NavLink = ({ title, href }) => {
    return (
      <motion.div variants={navLinkVariants}>
        <Link className="capitalize text-lg lg:text-sm textb" href={href}>
          {title}
        </Link>
      </motion.div>
    );
  };

  const MobileMenu = () => {
    return (
      <motion.nav
        variants={navVariants}
        animate="animate"
        initial="initial"
        exit="exit"
        className="z-50 origin-top flex lg:hidden  gap-10 text-sm  pl-10 lg:pl-0 bg-primary-purple  h-screen fixed w-screen flex-col left-0 top-0 justify-center"
      >
        <motion.ul
          variants={staggerVariants}
          initial="initial"
          animate="open"
          exit="initial"
          className="flex gap-10 flex-col "
        >
          {navLinks.map((link, index) => {
            return (
              <li key={index} className="overflow-hidden">
                <NavLink title={link.title} href={link.href} />
              </li>
            );
          })}
          <div className="overflow-hidden">
            <motion.button
              variants={navLinkVariants}
              className="capitalize relative py-3 px-12 btn-grad  rounded-md w-max"
            >
              register
            </motion.button>
          </div>
        </motion.ul>

        <div
          onClick={() => setToggleMenu(false)}
          className=" absolute right-4 top-4 lg:hidden rounded-full p-[2px] bg-gradient-to-r from-[#903AFF] to-[#FF26B9]"
        >
          <div className="p-2 rounded-full bg-primary-purple">
            <Cancel_icon />
          </div>
        </div>
      </motion.nav>
    );
  };
  return (
    <div className="relative h-screen flex-col flex  w-full">
      <div className="w-[800px] blur-md rounded-full h-[800px] bg-gradient-radial from-[#430980] via-primary-purple  to-primary-purple absolute -top-[200px] -left-[50px]"></div>
      <div className="w-[600px] blur-md rounded-full h-[600px] bg-gradient-radial from-[#430980] via-primary-purple  to-primary-purple absolute  -right-[100px]"></div>

      <div className="px-4 lg:px-16 py-4 z-10  relative flex-1  flex flex-col items-start lg:justify-center mt-20 w-full border-b border-b-white border-opacity-20 ">
        <div className="2xl:max-w-[1280px] w-full mx-auto">
          <div className="lg:w-[60%] flex flex-col items-center text-center lg:text-left lg:items-start gap-6">
            <div className="text-4xl font-semibold font-title lg:text-7xl">
              <div className="flex relative lg:justify-start justify-center">
                <h2 className=" ">getlinked Tech</h2>
                <div className="w-10 h-10 lg:w-20 lg:h-20  absolute lg:bottom-16 bottom-6 lg:right-40 right-10">
                  <Image
                    src="/bulb.svg"
                    alt="GetLinked Logo"
                    fill
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>
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
                    priority
                  />
                </div>
                <div className="w-10 h-10 lg:w-20 lg:h-20  relative">
                  <Image
                    src="/explosion.svg"
                    alt="GetLinked Logo"
                    fill
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>
            </div>
            <p className="lg:w-[55%] text-xs lg:text-base">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div className="overflow-hidden">
              <motion.button
                variants={navLinkVariants}
                initial="initial"
                animate="open"
                className="capitalize relative py-3 px-12 btn-grad rounded-md w-max"
              >
                register
              </motion.button>
            </div>
            <div className="flex gap-8 uppercase font-unicaOne lg:pt-10 ">
              <div className="flex items-end">
                <p className="text-5xl lg:text-6xl">00</p>
                <span className="leading-10">h</span>
              </div>
              <div className="flex items-end">
                <p className="text-5xl lg:text-6xl">00</p>
                <span className="leading-10">m</span>
              </div>
              <div className="flex items-end">
                <p className="text-5xl lg:text-6xl">00</p>
                <span className="leading-10">s</span>
              </div>
            </div>
          </div>
          <div className="absolute w-full lg:h-full h-[50%] max-w-[750px] right-0 bottom-0">
            <div className="absolute bottom-0  h-full max-h-[640px]  w-full">
              <Image
                className="object-contain  "
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
          </div>
        </div>
      </div>
    </div>
  );
}

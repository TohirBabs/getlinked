"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Hamburger_icon = () => {
    return (
      <svg
        width="19"
        height="14"
        viewBox="0 0 19 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z"
          fill="white"
        />
      </svg>
    );
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
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "sring",
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "sring",
        stiffness: 80,
        damping: 1,
      },
    },
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
        <Link className="capitalize text-lg sm:text-sm textb" href={href}>
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
        className=" origin-top flex sm:hidden  gap-10 text-sm  pl-10 sm:pl-0 bg-primary-purple  h-screen absolute w-screen flex-col left-0 top-0 justify-center"
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
          className=" absolute right-4 top-4 sm:hidden rounded-full p-[2px] bg-gradient-to-r from-[#903AFF] to-[#FF26B9]"
        >
          <div className="p-2 rounded-full bg-primary-purple">
            <Cancel_icon />
          </div>
        </div>
      </motion.nav>
    );
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className="px-8 sm:px-16 pt-8 pb-4  border-b border-b-white border-opacity-20 static top-0 backdrop-blur bg-primary-purple bg-opacity-20"
    >
      <div className="2xl:max-w-[1280px] w-full mx-auto flex gap-8 justify-between">
        <div className="w-24 h-5 sm:h-11 sm:w-40 relative">
          <Image
            src="/logo.svg"
            alt="GetLinked Logo"
            fill
            objectFit="contain"
            priority
          />
        </div>

        <motion.nav
          variants={navVariants}
          animate="animate"
          initial="initial"
          className={`hidden sm:flex-row sm:flex  gap-20 text-sm sm:items-center relative`}
        >
          <motion.ul
            variants={staggerVariants}
            initial="initial"
            animate="open"
            className="flex gap-14  items-center"
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
                className="capitalize relative py-3 px-12 btn-grad rounded-md w-max"
              >
                register
              </motion.button>
            </div>
          </motion.ul>
        </motion.nav>
        <AnimatePresence>{toggleMenu && <MobileMenu />}</AnimatePresence>

        <div onClick={() => setToggleMenu(true)} className="sm:hidden">
          <Hamburger_icon />
        </div>
      </div>
    </motion.header>
  );
}

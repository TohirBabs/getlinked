"use client";
import { CancelIcon } from "@/icons/CancelIcon";
import { Menu_icon } from "@/icons/MenuIcon";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navVariants = {
    initial: {
      x: "100vw",
    },
    animate: {
      x: 0,
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "ease-in",
        delay: 0.5,
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
    { title: "timeline", href: "#timeline" },
    { title: "overview", href: "#introduction" },
    { title: "FAQs", href: "#faqs" },
    { title: "contact", href: "contact" },
  ];

  const NavLink = ({ title, href }) => {
    return (
      <motion.div variants={navLinkVariants}>
        <Link
          className="capitalize text-sm lg:text-sm hover:text-[#FF26B9] transition-colors"
          href={href}
        >
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
        className="z-50 origin-top flex lg:hidden  gap-10 text-sm  pl-10 lg:pl-0 bg-primary-purple  h-screen fixed  w-screen flex-col left-0 top-0 justify-center"
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
          className=" absolute right-8 top-8 lg:hidden rounded-full p-[2px] bg-gradient-to-r from-[#903AFF] to-[#FF26B9]"
        >
          <div className="p-2 rounded-full bg-primary-purple">
            <CancelIcon />
          </div>
        </div>
      </motion.nav>
    );
  };

  return (
    <header className="px-8 lg:px-16 pt-8 pb-4 z-20  border-b border-b-white border-opacity-20 fixed w-full top-0 backdrop-blur bg-primary-purple bg-opacity-20">
      <div className="2xl:max-w-[1280px] w-full mx-auto flex gap-8 justify-between">
        <div className="w-24 h-5 lg:h-11 lg:w-40 relative">
          <Image
            src="/logo.svg"
            alt="GetLinked Logo"
            fill
            objectFit="contain"
            priority
          />
        </div>

        <nav
          className={`hidden lg:flex-row lg:flex  gap-20 text-sm lg:items-center relative`}
        >
          <ul
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
            <Link href="/register">
              <Button className="capitalize relative">register</Button>
            </Link>
          </ul>
        </nav>
        <AnimatePresence>{toggleMenu && <MobileMenu />}</AnimatePresence>
        <div onClick={() => setToggleMenu(true)} className="lg:hidden">
          <Menu_icon />
        </div>
      </div>
    </header>
  );
}

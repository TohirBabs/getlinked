"use client";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  top: number;
  lgtop: number;
}

const Bgblob = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 2], ["0%", "-100%"]);
  return (
    <motion.div style={{ y }} className="h-[200vh] w-screen fixed top-0 z-0">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, ease: "easeIn", duration: 1 }}
        className="lg:w-[1000px] w-[500px] blur-lg rounded-full lg:h-[1000px] h-[500px] bg-gradient-radial from-[#430980] via-primary-purple  to-primary-purple absolute -top-[100px] lg:-top-[200px] -left-[150px] lg:-left-[50px]"
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, ease: "easeIn", duration: 1 }}
        className="lg:w-[1000px] w-[400px] blur-lg rounded-full lg:h-[1000px] h-[400px] bg-gradient-radial from-[#430980] via-primary-purple  to-primary-purple absolute  -right-[100px] lg:first-letter:-right-[100px] -bottom-[10vh]"
      ></motion.div>
    </motion.div>
  );
};

export default Bgblob;

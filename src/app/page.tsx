"use client";
import Bgblob from "@/components/Bgblob";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

import Register from "@/components/Register";
import Faqs from "@/sections/Faq";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Judging from "@/sections/Judging";
import Privacy from "@/sections/Privacy";
import Rewards from "@/sections/Rewards";
import Rules from "@/sections/Rules";
import Timeline from "@/sections/Timeline";
import Partners from "@/sections/partners";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-primary-purple  min-h-screen w-screen text-white relative overflow-hidden">
      <Bgblob />
      <AnimatedCursor
        innerSize={30}
        outerSize={20}
        color=" 255,255,255"
        innerStyle={{ border: "2px rgb(212, 52, 254) solid" }}
      />
      <Navbar />
      <Hero />
      <Introduction />
      <Rules />
      <Judging />
      <Faqs />
      <Timeline />
      <Rewards />
      <Partners />
      <Privacy />
      <Footer />
    </main>
  );
}

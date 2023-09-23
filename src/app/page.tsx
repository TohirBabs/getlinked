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

export default function Home() {
  return (
    <>
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
    </>
  );
}
